import type { JobRole } from "../models/job-role.js";
import type { JobRoleService } from "./interfaces.js";

export class JobRoleMemoryService implements JobRoleService {
  private jobRoles: JobRole[] = [];

  constructor(initialJobRoles: JobRole[] = []) {
    this.jobRoles = [...initialJobRoles];
  }

  getAllJobRoles(): JobRole[] {
    return [...this.jobRoles];
  }

  getJobRoleById(id: string): JobRole | null {
    const jobRole = this.jobRoles.find((role) => role.id === id);
    return jobRole ? { ...jobRole } : null;
  }
}
