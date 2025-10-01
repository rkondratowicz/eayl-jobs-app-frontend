import type { Request, Response } from "express";
import { Router } from "express";

export class HomeController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.configureRoutes();
  }

  private configureRoutes(): void {
    this.router.get("/", this.getHome.bind(this));
  }

  private getHome(_req: Request, res: Response): void {
    res.render("index", {
      title: "Find Your Dream Job",
      subtitle: "Discover amazing career opportunities that match your skills and ambitions",
      heroMessage:
        "Your next career move starts here. Explore job roles, learn about requirements, and take the next step in your professional journey.",
    });
  }
}
