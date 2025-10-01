import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import nunjucks from "nunjucks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Configure Nunjucks
nunjucks.configure(path.join(__dirname, "../views"), {
  autoescape: true,
  express: app,
  watch: false, // Disabled - tsx watch handles file changes by restarting the server
});

// Set view engine
app.set("view engine", "njk");

// Middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

// Import and configure routes
import { configureRoutes } from "./routes/index.js";

// Configure all routes
configureRoutes(app);

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

export default app;
