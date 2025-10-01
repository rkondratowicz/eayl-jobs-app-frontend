import type { JobRole } from "../models/job-role.js";

export interface JobRoleService {
  getAllJobRoles(): JobRole[];
  getJobRoleById(id: string): JobRole | null;
}
