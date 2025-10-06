import type { CreateJobRoleInput, JobRole } from "../models/job-role.js";
import type { JobRoleService } from "./interfaces.js";

/**
 * API-based implementation of JobRoleService
 * Note: This is a stub implementation for future API integration
 */
export class JobRoleApiService implements JobRoleService {
  constructor(readonly baseUrl: string) {
    // Base URL will be used when implementing actual API calls
    if (!baseUrl) {
      throw new Error("API base URL is required");
    }
  }

  getAllJobRoles(): JobRole[] {
    // TODO: Implement API call using this.baseUrl
    // Example: fetch(`${this.baseUrl}/job-roles`)
    throw new Error("JobRoleApiService.getAllJobRoles not implemented yet");
  }

  getJobRoleById(_id: string): JobRole | null {
    // TODO: Implement API call using this.baseUrl
    // Example: fetch(`${this.baseUrl}/job-roles/${_id}`)
    throw new Error("JobRoleApiService.getJobRoleById not implemented yet");
  }

  createJobRole(_input: CreateJobRoleInput): JobRole {
    // TODO: Implement API call using this.baseUrl
    // Example: fetch(`${this.baseUrl}/job-roles`, { method: 'POST', body: JSON.stringify(_input) })
    throw new Error("JobRoleApiService.createJobRole not implemented yet");
  }
}
