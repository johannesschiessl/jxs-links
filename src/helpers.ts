import fs from "fs";

let linksCache: Record<string, any> | null = null;

linksCache = getLinks();

export function getLinks() {
  if (linksCache) {
    return linksCache;
  }

  try {
    const links = JSON.parse(fs.readFileSync("links.json", "utf8"));
    linksCache = links;
    return links;
  } catch (error) {
    return {};
  }
}

function writeLinks(links: Record<string, any>) {
  fs.writeFileSync("links.json", JSON.stringify(links, null, 2));
  linksCache = null;
  getLinks();
}

export function addLink(url: string) {
  if (!url) {
    throw new Error("URL is required");
  }

  if (!url.startsWith("https://")) {
    url = "https://" + url;
  }

  if (!/^https?:\/\/[^\/]+\.[^\/]+/.test(url)) {
    throw new Error("Invalid URL format");
  }

  const links = getLinks();

  let id: string;
  do {
    id = Array.from({ length: 4 }, () =>
      String.fromCharCode(97 + Math.floor(Math.random() * 26)),
    ).join("");
  } while (links[id]);

  const updatedLinks = {
    ...links,
    [id]: { url, createdAt: new Date().toISOString() },
  };

  writeLinks(updatedLinks);

  return { id, url };
}

export async function trackClick(id: string) {
  const links = getLinks();
  const link = links[id];

  if (link) {
    const updatedLinks = {
      ...links,
      [id]: { ...link, clicks: (link.clicks || 0) + 1 },
    };

    writeLinks(updatedLinks);
  }
}
