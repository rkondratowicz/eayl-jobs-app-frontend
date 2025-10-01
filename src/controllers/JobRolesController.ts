import { type Request, type Response, Router } from "express";
import type { JobRoleService } from "../services/interfaces.js";
import { JobRoleMemoryService } from "../services/JobRoleMemoryService.js";
import { createSampleJobRoles } from "../services/SampleJobRoleProvider.js";

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
    this.router.get("/:id", this.getJobRoleById.bind(this));
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

  private getJobRoleById(req: Request, res: Response): void {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).render("job-role-detail", {
          title: "Error - Invalid Job Role",
          description: "Job role ID is required",
          error: "Job role ID is required",
          jobRole: null,
        });
        return;
      }

      const jobRole = this.jobRoleService.getJobRoleById(id);

      if (!jobRole) {
        res.status(404).render("job-role-detail", {
          title: "Error - Job Role Not Found",
          description: "The requested job role could not be found",
          error: "Job role not found",
          jobRole: null,
        });
        return;
      }

      // Process job role for template rendering
      const processedJobRole = {
        ...jobRole,
        firstLetter: jobRole.roleName.charAt(0),
        formattedClosingDate: jobRole.closingDate.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };

      res.render("job-role-detail", {
        title: `${jobRole.roleName} - Job Role Details`,
        description: `View details for ${jobRole.roleName} position in ${jobRole.location}`,
        jobRole: processedJobRole,
        currentDateTime: new Date().toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    } catch (error) {
      res.status(500).render("job-role-detail", {
        title: "Error - Job Role Details",
        description: "An error occurred while loading job role details",
        error: error instanceof Error ? error.message : "Unknown error",
        jobRole: null,
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
