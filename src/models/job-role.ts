export interface JobRole {
  id: string;
  roleName: string;
  location: string;
  capability: string;
  band: string;
  closingDate: Date;
  status: string;
  jobSpec: string;
  responsibilities: string;
  numberOfOpenPositions: number;
}

export type CreateJobRoleInput = Omit<JobRole, "id">;

export interface JobRoleValidationError {
  field: string;
  message: string;
}
