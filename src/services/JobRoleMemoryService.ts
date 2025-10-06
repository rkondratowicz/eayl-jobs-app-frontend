import type { CreateJobRoleInput, JobRole } from "../models/job-role.js";
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

  createJobRole(input: CreateJobRoleInput): JobRole {
    // Generate new ID: find max numeric ID and increment
    const maxId =
      this.jobRoles.length > 0
        ? Math.max(
            ...this.jobRoles.map((role) => {
              const numId = Number.parseInt(role.id, 10);
              return Number.isNaN(numId) ? 0 : numId;
            })
          )
        : 0;

    const newId = (maxId + 1).toString();

    const newJobRole: JobRole = {
      id: newId,
      ...input,
    };

    this.jobRoles.push(newJobRole);
    return { ...newJobRole };
  }
}
