import type { CreateJobRoleInput, JobRoleValidationError } from "../models/job-role.js";

export class JobRoleValidationService {
  private readonly VALID_BANDS = ["Junior", "Mid", "Senior", "Principal", "Lead"];
  private readonly VALID_STATUSES = ["Open", "Closed", "Draft"];

  public validateCreateInput(input: CreateJobRoleInput): JobRoleValidationError[] {
    const errors: JobRoleValidationError[] = [];

    // Validate roleName
    if (!input.roleName || input.roleName.trim().length === 0) {
      errors.push({
        field: "roleName",
        message: "Role name is required",
      });
    } else if (input.roleName.trim().length < 3) {
      errors.push({
        field: "roleName",
        message: "Role name must be at least 3 characters long",
      });
    } else if (input.roleName.trim().length > 100) {
      errors.push({
        field: "roleName",
        message: "Role name must not exceed 100 characters",
      });
    }

    // Validate location
    if (!input.location || input.location.trim().length === 0) {
      errors.push({
        field: "location",
        message: "Location is required",
      });
    } else if (input.location.trim().length < 2) {
      errors.push({
        field: "location",
        message: "Location must be at least 2 characters long",
      });
    } else if (input.location.trim().length > 100) {
      errors.push({
        field: "location",
        message: "Location must not exceed 100 characters",
      });
    }

    // Validate capability
    if (!input.capability || input.capability.trim().length === 0) {
      errors.push({
        field: "capability",
        message: "Capability is required",
      });
    } else if (input.capability.trim().length < 2) {
      errors.push({
        field: "capability",
        message: "Capability must be at least 2 characters long",
      });
    } else if (input.capability.trim().length > 50) {
      errors.push({
        field: "capability",
        message: "Capability must not exceed 50 characters",
      });
    }

    // Validate band
    if (!input.band || input.band.trim().length === 0) {
      errors.push({
        field: "band",
        message: "Band is required",
      });
    } else if (!this.VALID_BANDS.includes(input.band)) {
      errors.push({
        field: "band",
        message: `Band must be one of: ${this.VALID_BANDS.join(", ")}`,
      });
    }

    // Validate closingDate
    if (!input.closingDate) {
      errors.push({
        field: "closingDate",
        message: "Closing date is required",
      });
    } else {
      const closingDate = input.closingDate instanceof Date ? input.closingDate : new Date(input.closingDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (Number.isNaN(closingDate.getTime())) {
        errors.push({
          field: "closingDate",
          message: "Closing date must be a valid date",
        });
      } else if (closingDate < today) {
        errors.push({
          field: "closingDate",
          message: "Closing date must be in the future",
        });
      }
    }

    // Validate status
    if (!input.status || input.status.trim().length === 0) {
      errors.push({
        field: "status",
        message: "Status is required",
      });
    } else if (!this.VALID_STATUSES.includes(input.status)) {
      errors.push({
        field: "status",
        message: `Status must be one of: ${this.VALID_STATUSES.join(", ")}`,
      });
    }

    // Validate jobSpec
    if (!input.jobSpec || input.jobSpec.trim().length === 0) {
      errors.push({
        field: "jobSpec",
        message: "Job specification is required",
      });
    } else if (input.jobSpec.trim().length < 10) {
      errors.push({
        field: "jobSpec",
        message: "Job specification must be at least 10 characters long",
      });
    } else if (input.jobSpec.trim().length > 5000) {
      errors.push({
        field: "jobSpec",
        message: "Job specification must not exceed 5000 characters",
      });
    }

    // Validate responsibilities
    if (!input.responsibilities || input.responsibilities.trim().length === 0) {
      errors.push({
        field: "responsibilities",
        message: "Responsibilities are required",
      });
    } else if (input.responsibilities.trim().length < 10) {
      errors.push({
        field: "responsibilities",
        message: "Responsibilities must be at least 10 characters long",
      });
    } else if (input.responsibilities.trim().length > 5000) {
      errors.push({
        field: "responsibilities",
        message: "Responsibilities must not exceed 5000 characters",
      });
    }

    // Validate numberOfOpenPositions
    if (input.numberOfOpenPositions === undefined || input.numberOfOpenPositions === null) {
      errors.push({
        field: "numberOfOpenPositions",
        message: "Number of open positions is required",
      });
    } else if (!Number.isInteger(input.numberOfOpenPositions) || input.numberOfOpenPositions < 1) {
      errors.push({
        field: "numberOfOpenPositions",
        message: "Number of open positions must be at least 1",
      });
    } else if (input.numberOfOpenPositions > 999) {
      errors.push({
        field: "numberOfOpenPositions",
        message: "Number of open positions must not exceed 999",
      });
    }

    return errors;
  }
}
