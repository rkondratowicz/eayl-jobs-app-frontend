import type { JobRole } from "../models/job-role";

export interface JobRoleService {
  getAllJobRoles(): JobRole[];
}
