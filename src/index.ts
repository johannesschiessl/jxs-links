import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { HOME_HTML, LINK_ADDED_HTML } from "./html.js";
import { addLink, getLinks, trackClick } from "./helpers.js";

const app = new Hono();

app.get("/", (c) => {
  return c.html(HOME_HTML);
});

app.post("/", async (c) => {
  const body = await c.req.formData();

  try {
    const { id, url } = addLink(body.get("url") as string);
    return c.html(LINK_ADDED_HTML(url, id));
  } catch (error) {
    return c.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      400,
    );
  }
});

app.get("/:slug{.*}", (c) => {
  const slug = c.req.param("slug");

  if (/^[a-z]{4}$/.test(slug)) {
    const links = getLinks();
    const link = links[slug];

    if (link) {
      trackClick(slug);
      return c.redirect(link.url);
    }

    return c.notFound();
  }

  if (slug === "favicon.ico") {
    return c.notFound();
  }

  try {
    const { id, url } = addLink(slug as string);
    return c.html(LINK_ADDED_HTML(url, id));
  } catch (error) {
    return c.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      400,
    );
  }
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
