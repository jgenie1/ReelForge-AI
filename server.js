const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");
const fs = require("fs");

// Automatically create symlink on Hostinger/Linux startup to resolve asset 404s/503s
if (process.platform !== "win32") {
  const link = path.join(__dirname, "public/_next");
  if (!fs.existsSync(link)) {
    try {
      fs.symlinkSync("../.next", link, "dir");
      console.log("✅ Created startup symlink: public/_next -> ../.next");
    } catch (err) {
      console.error("⚠️ Failed to create startup symlink:", err.message);
    }
  }
}

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3080;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Next.js Server ready on port ${port}`);
    });
});
