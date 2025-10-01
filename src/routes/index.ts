import type { Application } from "express";
import { JobRolesController } from "../controllers/JobRolesController";

export const configureRoutes = (app: Application): void => {
  // Initialize controllers
  const jobRolesController = new JobRolesController();

  // Redirect root to job roles
  app.get("/", (_req, res) => {
    res.redirect("/api/job-roles");
  });

  // API Routes
  app.use("/api/job-roles", jobRolesController.router);
};
