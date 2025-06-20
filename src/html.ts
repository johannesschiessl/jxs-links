export const HOME_HTML = `
    <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #1a1a1a;
            color: #ccc;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          
          h1 {
            color: #fff;
            font-weight: 300;
            margin-bottom: 2rem;
            font-size: 2rem;
          }
          
          form {
            display: flex;
            gap: 0.5rem;
            align-items: center;
          }
          
          input {
            padding: 0.75rem 1rem;
            border: 1px solid #444;
            border-radius: 6px;
            font-size: 1rem;
            background: #2a2a2a;
            color: #ccc;
            min-width: 300px;
          }
          
          input:focus {
            outline: none;
            border-color: #666;
          }
          
          button {
            padding: 0.75rem 1.5rem;
            background: #333;
            border: 1px solid #444;
            border-radius: 6px;
            font-size: 1rem;
            color: #ccc;
            cursor: pointer;
          }
          
          button:hover {
            background: #404040;
          }
        </style>
      </head>
      <body>
        <h1>jxs Links</h1>
        <form action="/" method="post">
          <input type="text" name="url" placeholder="URL" />
          <button type="submit">Add</button>
        </form>
      </body>
    </html>
    `;

export const LINK_ADDED_HTML = (url: string, id: string) => `
    <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #1a1a1a;
            color: #ccc;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
          }
          
          h1 {
            color: #fff;
            font-weight: 300;
            margin-bottom: 0;
            font-size: 2rem;
          }
          
          .success-message {
            color: #4ade80;
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }
          
          .link-info {
            background: #2a2a2a;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            min-width: 400px;
          }
          
          .link-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .link-label {
            font-weight: 500;
            min-width: 80px;
          }
          
          .link-url {
            flex: 1;
            padding: 0.5rem;
            background: #1a1a1a;
            border: 1px solid #444;
            border-radius: 4px;
            color: #ccc;
            font-family: monospace;
          }
          
          .share-button {
            padding: 0.5rem 1rem;
            background: #4ade80;
            border: none;
            border-radius: 4px;
            color: #000;
            cursor: pointer;
            font-weight: 500;
          }
          
          .share-button:hover {
            background: #22c55e;
          }
          
          form {
            display: flex;
            gap: 0.5rem;
            align-items: center;
          }
          
          input {
            padding: 0.75rem 1rem;
            border: 1px solid #444;
            border-radius: 6px;
            font-size: 1rem;
            background: #2a2a2a;
            color: #ccc;
            min-width: 300px;
          }
          
          input:focus {
            outline: none;
            border-color: #666;
          }
          
          button {
            padding: 0.75rem 1.5rem;
            background: #333;
            border: 1px solid #444;
            border-radius: 6px;
            font-size: 1rem;
            color: #ccc;
            cursor: pointer;
          }
          
          button:hover {
            background: #404040;
          }
        </style>
      </head>
      <body>
        <h1>jxs Links</h1>
        <div class="success-message">✓ Link added successfully!</div>
        
        <div class="link-info">
          <div class="link-row">
            <span class="link-label">Original:</span>
            <input class="link-url" value="${url}" readonly />
            <button class="share-button" onclick="navigator.clipboard.writeText('${url}')">Copy</button>
          </div>
          <div class="link-row">
            <span class="link-label">Short:</span>
            <input class="link-url" value="localhost:3000/${id}" readonly />
            <button class="share-button" onclick="navigator.clipboard.writeText('localhost:3000/${id}')">Share</button>
          </div>
        </div>
        
        <div>
          <h2 style="color: #fff; font-weight: 300; margin-bottom: 1rem;">Add Another Link</h2>
          <form action="/" method="post">
            <input type="text" name="url" placeholder="URL" />
            <button type="submit">Add</button>
          </form>
        </div>
      </body>
    </html>
    `;
