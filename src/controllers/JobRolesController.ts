import { type Request, type Response, Router } from "express";
import type { CreateJobRoleInput } from "../models/job-role.js";
import type { JobRoleService } from "../services/interfaces.js";
import { JobRoleMemoryService } from "../services/JobRoleMemoryService.js";
import { JobRoleValidationService } from "../services/JobRoleValidationService.js";
import { createSampleJobRoles } from "../services/SampleJobRoleProvider.js";

export class JobRolesController {
  private jobRoleService: JobRoleService;
  private validationService: JobRoleValidationService;
  public router: Router;

  constructor(jobRoleService?: JobRoleService, validationService?: JobRoleValidationService) {
    this.jobRoleService = jobRoleService || new JobRoleMemoryService(createSampleJobRoles());
    this.validationService = validationService || new JobRoleValidationService();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/", this.getAllJobRoles.bind(this));
    this.router.get("/create", this.showCreateForm.bind(this));
    this.router.post("/create", this.createJobRole.bind(this));
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

      res.render("job-roles/index", {
        title: "Available Job Roles",
        description: "Explore exciting career opportunities across various teams and locations",
        jobRoles: processedJobRoles,
        count: jobRoles.length,
        hasNoJobs: jobRoles.length === 0,
      });
    } catch (error) {
      res.status(500).render("job-roles/index", {
        title: "Error - Job Roles",
        description: "An error occurred while loading job roles",
        jobRoles: [],
        count: 0,
        hasNoJobs: true,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  private getJobRoleById(req: Request, res: Response): void {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).render("job-roles/detail", {
          title: "Error - Invalid Job Role",
          description: "Job role ID is required",
          error: "Job role ID is required",
          jobRole: null,
        });
        return;
      }

      const jobRole = this.jobRoleService.getJobRoleById(id);

      if (!jobRole) {
        res.status(404).render("job-roles/detail", {
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

      res.render("job-roles/detail", {
        title: `${jobRole.roleName} - Job Role Details`,
        description: `View details for ${jobRole.roleName} position in ${jobRole.location}`,
        jobRole: processedJobRole,
      });
    } catch (error) {
      res.status(500).render("job-roles/detail", {
        title: "Error - Job Role Details",
        description: "An error occurred while loading job role details",
        error: error instanceof Error ? error.message : "Unknown error",
        jobRole: null,
      });
    }
  }

  private showCreateForm(_req: Request, res: Response): void {
    try {
      res.render("job-roles/create", {
        title: "Create Job Role",
        description: "Add a new job role to the system",
        errors: [],
        formData: {},
      });
    } catch (error) {
      res.status(500).render("job-roles/create", {
        title: "Error - Create Job Role",
        description: "An error occurred while loading the form",
        error: error instanceof Error ? error.message : "Unknown error",
        errors: [],
        formData: {},
      });
    }
  }

  private createJobRole(req: Request, res: Response): void {
    try {
      const input: CreateJobRoleInput = this.parseFormData(req.body);
      const errors = this.validationService.validateCreateInput(input);

      if (errors.length > 0) {
        res.status(400).render("job-roles/create", {
          title: "Create Job Role",
          description: "Add a new job role to the system",
          errors,
          formData: input,
        });
        return;
      }

      const newJobRole = this.jobRoleService.createJobRole(input);
      res.redirect(`/job-roles/${newJobRole.id}`);
    } catch (error) {
      res.status(500).render("job-roles/create", {
        title: "Error - Create Job Role",
        description: "An error occurred while creating the job role",
        error: error instanceof Error ? error.message : "Unknown error",
        errors: [],
        formData: req.body,
      });
    }
  }

  private parseFormData(body: Record<string, unknown>): CreateJobRoleInput {
    return {
      roleName: String(body["roleName"] || ""),
      location: String(body["location"] || ""),
      capability: String(body["capability"] || ""),
      band: String(body["band"] || ""),
      closingDate: body["closingDate"] ? new Date(String(body["closingDate"])) : new Date(),
      status: String(body["status"] || "Draft"),
      jobSpec: String(body["jobSpec"] || ""),
      responsibilities: String(body["responsibilities"] || ""),
      numberOfOpenPositions: Number.parseInt(String(body["numberOfOpenPositions"] || "0"), 10) || 0,
    };
  }
}
