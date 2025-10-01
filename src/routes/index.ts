import type { Application } from "express";
import { HomeController } from "../controllers/HomeController.js";
import { JobRolesController } from "../controllers/JobRolesController.js";

export const configureRoutes = (app: Application): void => {
  // Initialize controllers
  const homeController = new HomeController();
  const jobRolesController = new JobRolesController();

  // Home Routes
  app.use("/", homeController.router);

  // Job Roles Routes
  app.use("/job-roles", jobRolesController.router);
};
