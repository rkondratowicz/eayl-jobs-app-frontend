import { describe, expect, it } from "vitest";
import type { CreateJobRoleInput } from "../models/job-role.js";
import { JobRoleValidationService } from "./JobRoleValidationService.js";

describe("JobRoleValidationService", () => {
  const validationService = new JobRoleValidationService();

  const createValidInput = (): CreateJobRoleInput => ({
    roleName: "Senior Software Engineer",
    location: "London",
    capability: "Backend Development",
    band: "Senior",
    closingDate: new Date("2026-12-31"),
    status: "Open",
    jobSpec: "We are seeking an experienced Senior Software Engineer to join our team.",
    responsibilities: "Lead technical design, mentor developers, and deliver quality code.",
    numberOfOpenPositions: 2,
  });

  describe("validateCreateInput", () => {
    it("should return no errors for valid input", () => {
      const input = createValidInput();
      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should return multiple errors for multiple invalid fields", () => {
      const input: CreateJobRoleInput = {
        roleName: "AB", // Too short
        location: "L", // Too short
        capability: "B", // Too short
        band: "InvalidBand", // Invalid band
        closingDate: new Date("2020-01-01"), // Past date
        status: "InvalidStatus", // Invalid status
        jobSpec: "Short", // Too short
        responsibilities: "Short", // Too short
        numberOfOpenPositions: 0, // Too low
      };

      const errors = validationService.validateCreateInput(input);

      expect(errors.length).toBeGreaterThan(0);
      expect(errors.some((e) => e.field === "roleName")).toBe(true);
      expect(errors.some((e) => e.field === "location")).toBe(true);
      expect(errors.some((e) => e.field === "capability")).toBe(true);
      expect(errors.some((e) => e.field === "band")).toBe(true);
      expect(errors.some((e) => e.field === "closingDate")).toBe(true);
      expect(errors.some((e) => e.field === "status")).toBe(true);
      expect(errors.some((e) => e.field === "jobSpec")).toBe(true);
      expect(errors.some((e) => e.field === "responsibilities")).toBe(true);
      expect(errors.some((e) => e.field === "numberOfOpenPositions")).toBe(true);
    });
  });

  describe("roleName validation", () => {
    it("should return error for missing roleName", () => {
      const input = createValidInput();
      input.roleName = "";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("roleName");
      expect(errors[0]?.message).toBe("Role name is required");
    });

    it("should return error for roleName too short", () => {
      const input = createValidInput();
      input.roleName = "AB";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("roleName");
      expect(errors[0]?.message).toBe("Role name must be at least 3 characters long");
    });

    it("should return error for roleName too long", () => {
      const input = createValidInput();
      input.roleName = "A".repeat(101);

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("roleName");
      expect(errors[0]?.message).toBe("Role name must not exceed 100 characters");
    });

    it("should accept roleName with exactly 3 characters", () => {
      const input = createValidInput();
      input.roleName = "ABC";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept roleName with exactly 100 characters", () => {
      const input = createValidInput();
      input.roleName = "A".repeat(100);

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should trim whitespace before validation", () => {
      const input = createValidInput();
      input.roleName = "  Valid Role Name  ";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });
  });

  describe("location validation", () => {
    it("should return error for missing location", () => {
      const input = createValidInput();
      input.location = "";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("location");
      expect(errors[0]?.message).toBe("Location is required");
    });

    it("should return error for location too short", () => {
      const input = createValidInput();
      input.location = "L";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("location");
      expect(errors[0]?.message).toBe("Location must be at least 2 characters long");
    });

    it("should return error for location too long", () => {
      const input = createValidInput();
      input.location = "A".repeat(101);

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("location");
      expect(errors[0]?.message).toBe("Location must not exceed 100 characters");
    });

    it("should accept location with exactly 2 characters", () => {
      const input = createValidInput();
      input.location = "UK";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });
  });

  describe("capability validation", () => {
    it("should return error for missing capability", () => {
      const input = createValidInput();
      input.capability = "";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("capability");
      expect(errors[0]?.message).toBe("Capability is required");
    });

    it("should return error for capability too short", () => {
      const input = createValidInput();
      input.capability = "B";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("capability");
      expect(errors[0]?.message).toBe("Capability must be at least 2 characters long");
    });

    it("should return error for capability too long", () => {
      const input = createValidInput();
      input.capability = "A".repeat(51);

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("capability");
      expect(errors[0]?.message).toBe("Capability must not exceed 50 characters");
    });
  });

  describe("band validation", () => {
    it("should return error for missing band", () => {
      const input = createValidInput();
      input.band = "";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("band");
      expect(errors[0]?.message).toBe("Band is required");
    });

    it("should return error for invalid band", () => {
      const input = createValidInput();
      input.band = "InvalidBand";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("band");
      expect(errors[0]?.message).toContain("Band must be one of:");
    });

    it("should accept valid band: Junior", () => {
      const input = createValidInput();
      input.band = "Junior";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept valid band: Mid", () => {
      const input = createValidInput();
      input.band = "Mid";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept valid band: Senior", () => {
      const input = createValidInput();
      input.band = "Senior";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept valid band: Principal", () => {
      const input = createValidInput();
      input.band = "Principal";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept valid band: Lead", () => {
      const input = createValidInput();
      input.band = "Lead";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });
  });

  describe("closingDate validation", () => {
    it("should return error for missing closingDate", () => {
      const input = createValidInput();
      // @ts-expect-error: Testing invalid input
      input.closingDate = null;

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("closingDate");
      expect(errors[0]?.message).toBe("Closing date is required");
    });

    it("should return error for invalid closingDate", () => {
      const input = createValidInput();
      input.closingDate = new Date("invalid");

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("closingDate");
      expect(errors[0]?.message).toBe("Closing date must be a valid date");
    });

    it("should return error for past closingDate", () => {
      const input = createValidInput();
      input.closingDate = new Date("2020-01-01");

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("closingDate");
      expect(errors[0]?.message).toBe("Closing date must be in the future");
    });

    it("should accept today as closingDate", () => {
      const input = createValidInput();
      input.closingDate = new Date();

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept future closingDate", () => {
      const input = createValidInput();
      input.closingDate = new Date("2030-12-31");

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });
  });

  describe("status validation", () => {
    it("should return error for missing status", () => {
      const input = createValidInput();
      input.status = "";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("status");
      expect(errors[0]?.message).toBe("Status is required");
    });

    it("should return error for invalid status", () => {
      const input = createValidInput();
      input.status = "InvalidStatus";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("status");
      expect(errors[0]?.message).toContain("Status must be one of:");
    });

    it("should accept valid status: Open", () => {
      const input = createValidInput();
      input.status = "Open";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept valid status: Closed", () => {
      const input = createValidInput();
      input.status = "Closed";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept valid status: Draft", () => {
      const input = createValidInput();
      input.status = "Draft";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });
  });

  describe("jobSpec validation", () => {
    it("should return error for missing jobSpec", () => {
      const input = createValidInput();
      input.jobSpec = "";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("jobSpec");
      expect(errors[0]?.message).toBe("Job specification is required");
    });

    it("should return error for jobSpec too short", () => {
      const input = createValidInput();
      input.jobSpec = "Short";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("jobSpec");
      expect(errors[0]?.message).toBe("Job specification must be at least 10 characters long");
    });

    it("should return error for jobSpec too long", () => {
      const input = createValidInput();
      input.jobSpec = "A".repeat(5001);

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("jobSpec");
      expect(errors[0]?.message).toBe("Job specification must not exceed 5000 characters");
    });

    it("should accept jobSpec with exactly 10 characters", () => {
      const input = createValidInput();
      input.jobSpec = "A".repeat(10);

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept jobSpec with exactly 5000 characters", () => {
      const input = createValidInput();
      input.jobSpec = "A".repeat(5000);

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });
  });

  describe("responsibilities validation", () => {
    it("should return error for missing responsibilities", () => {
      const input = createValidInput();
      input.responsibilities = "";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("responsibilities");
      expect(errors[0]?.message).toBe("Responsibilities are required");
    });

    it("should return error for responsibilities too short", () => {
      const input = createValidInput();
      input.responsibilities = "Short";

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("responsibilities");
      expect(errors[0]?.message).toBe("Responsibilities must be at least 10 characters long");
    });

    it("should return error for responsibilities too long", () => {
      const input = createValidInput();
      input.responsibilities = "A".repeat(5001);

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("responsibilities");
      expect(errors[0]?.message).toBe("Responsibilities must not exceed 5000 characters");
    });

    it("should accept responsibilities with exactly 10 characters", () => {
      const input = createValidInput();
      input.responsibilities = "A".repeat(10);

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept responsibilities with exactly 5000 characters", () => {
      const input = createValidInput();
      input.responsibilities = "A".repeat(5000);

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });
  });

  describe("numberOfOpenPositions validation", () => {
    it("should return error for missing numberOfOpenPositions", () => {
      const input = createValidInput();
      // @ts-expect-error: Testing invalid input
      input.numberOfOpenPositions = null;

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("numberOfOpenPositions");
      expect(errors[0]?.message).toBe("Number of open positions is required");
    });

    it("should return error for numberOfOpenPositions less than 1", () => {
      const input = createValidInput();
      input.numberOfOpenPositions = 0;

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("numberOfOpenPositions");
      expect(errors[0]?.message).toBe("Number of open positions must be at least 1");
    });

    it("should return error for negative numberOfOpenPositions", () => {
      const input = createValidInput();
      input.numberOfOpenPositions = -5;

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("numberOfOpenPositions");
      expect(errors[0]?.message).toBe("Number of open positions must be at least 1");
    });

    it("should return error for numberOfOpenPositions greater than 999", () => {
      const input = createValidInput();
      input.numberOfOpenPositions = 1000;

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("numberOfOpenPositions");
      expect(errors[0]?.message).toBe("Number of open positions must not exceed 999");
    });

    it("should return error for non-integer numberOfOpenPositions", () => {
      const input = createValidInput();
      input.numberOfOpenPositions = 2.5;

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(1);
      expect(errors[0]?.field).toBe("numberOfOpenPositions");
      expect(errors[0]?.message).toBe("Number of open positions must be at least 1");
    });

    it("should accept numberOfOpenPositions of 1", () => {
      const input = createValidInput();
      input.numberOfOpenPositions = 1;

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept numberOfOpenPositions of 999", () => {
      const input = createValidInput();
      input.numberOfOpenPositions = 999;

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });

    it("should accept numberOfOpenPositions in valid range", () => {
      const input = createValidInput();
      input.numberOfOpenPositions = 50;

      const errors = validationService.validateCreateInput(input);

      expect(errors).toHaveLength(0);
    });
  });
});
