import type { Application } from "express";
import { JobRolesController } from "../controllers/JobRolesController.js";

export const configureRoutes = (app: Application): void => {
  // Initialize controllers
  const jobRolesController = new JobRolesController();

  // Redirect root to job roles
  app.get("/", (_req, res) => {
    res.redirect("/job-roles");
  });

  // Job Roles Routes
  app.use("/job-roles", jobRolesController.router);
};
