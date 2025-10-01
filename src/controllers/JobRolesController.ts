import { type Request, type Response, Router } from "express";
import type { JobRoleService } from "../services/interfaces";
import { JobRoleMemoryService } from "../services/JobRoleMemoryService";
import { createSampleJobRoles } from "../services/SampleJobRoleProvider";

export class JobRolesController {
  private jobRoleService: JobRoleService;
  public router: Router;

  constructor(jobRoleService?: JobRoleService) {
    this.jobRoleService = jobRoleService || new JobRoleMemoryService(createSampleJobRoles());
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/", this.getAllJobRoles.bind(this));
  }

  private getAllJobRoles(_req: Request, res: Response): void {
    try {
      const jobRoles = this.jobRoleService.getAllJobRoles();

      // Process job roles for template rendering
      const processedJobRoles = jobRoles.map((jobRole) => ({
        ...jobRole,
        firstLetter: jobRole.roleName.charAt(0),
        formattedClosingDate: jobRole.closingDate.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      }));

      res.render("job-roles", {
        title: "Available Job Roles",
        description: "Explore exciting career opportunities across various teams and locations",
        jobRoles: processedJobRoles,
        count: jobRoles.length,
        hasNoJobs: jobRoles.length === 0,
        currentDateTime: new Date().toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    } catch (error) {
      res.status(500).render("job-roles", {
        title: "Error - Job Roles",
        description: "An error occurred while loading job roles",
        jobRoles: [],
        count: 0,
        hasNoJobs: true,
        error: error instanceof Error ? error.message : "Unknown error",
        currentDateTime: new Date().toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    }
  }
}
