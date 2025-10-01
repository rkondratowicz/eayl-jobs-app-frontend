import type { JobRole } from "../models/job-role";
import type { JobRoleService } from "./interfaces";

export class JobRoleMemoryService implements JobRoleService {
  private jobRoles: JobRole[] = [];

  constructor(initialJobRoles: JobRole[] = []) {
    this.jobRoles = [...initialJobRoles];
  }

  getAllJobRoles(): JobRole[] {
    return [...this.jobRoles];
  }
}
