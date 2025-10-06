import { beforeEach, describe, expect, it } from "vitest";
import type { CreateJobRoleInput, JobRole } from "../models/job-role.js";
import { JobRoleMemoryService } from "./JobRoleMemoryService.js";

describe("JobRoleMemoryService", () => {
  let service: JobRoleMemoryService;

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

  beforeEach(() => {
    service = new JobRoleMemoryService();
  });

  describe("createJobRole", () => {
    it("should create a new job role with unique ID", () => {
      const input = createValidInput();
      const result = service.createJobRole(input);

      expect(result.id).toBe("1");
      expect(result.roleName).toBe(input.roleName);
      expect(result.location).toBe(input.location);
    });

    it("should add job role to internal storage", () => {
      const input = createValidInput();
      const created = service.createJobRole(input);

      const retrieved = service.getJobRoleById(created.id);

      expect(retrieved).not.toBeNull();
      expect(retrieved?.id).toBe(created.id);
      expect(retrieved?.roleName).toBe(input.roleName);
    });

    it("should preserve all input properties", () => {
      const input = createValidInput();
      const result = service.createJobRole(input);

      expect(result.roleName).toBe(input.roleName);
      expect(result.location).toBe(input.location);
      expect(result.capability).toBe(input.capability);
      expect(result.band).toBe(input.band);
      expect(result.closingDate).toEqual(input.closingDate);
      expect(result.status).toBe(input.status);
      expect(result.jobSpec).toBe(input.jobSpec);
      expect(result.responsibilities).toBe(input.responsibilities);
      expect(result.numberOfOpenPositions).toBe(input.numberOfOpenPositions);
    });

    it("should handle multiple creations correctly with sequential IDs", () => {
      const input1 = createValidInput();
      const input2 = { ...createValidInput(), roleName: "Junior Developer" };
      const input3 = { ...createValidInput(), roleName: "DevOps Engineer" };

      const result1 = service.createJobRole(input1);
      const result2 = service.createJobRole(input2);
      const result3 = service.createJobRole(input3);

      expect(result1.id).toBe("1");
      expect(result2.id).toBe("2");
      expect(result3.id).toBe("3");
    });

    it("should return a copy of the created job role", () => {
      const input = createValidInput();
      const result = service.createJobRole(input);

      // Modify the returned object
      result.roleName = "Modified Name";

      // Original should be unchanged
      const retrieved = service.getJobRoleById(result.id);
      expect(retrieved?.roleName).toBe(input.roleName);
    });

    it("should increment ID from existing job roles", () => {
      const existingRoles: JobRole[] = [
        {
          id: "5",
          roleName: "Existing Role",
          location: "Edinburgh",
          capability: "Testing",
          band: "Mid",
          closingDate: new Date("2026-01-01"),
          status: "Open",
          jobSpec: "Existing job specification.",
          responsibilities: "Existing responsibilities.",
          numberOfOpenPositions: 1,
        },
      ];

      const serviceWithExisting = new JobRoleMemoryService(existingRoles);
      const input = createValidInput();
      const result = serviceWithExisting.createJobRole(input);

      expect(result.id).toBe("6");
    });

    it("should handle non-sequential existing IDs correctly", () => {
      const existingRoles: JobRole[] = [
        {
          id: "2",
          roleName: "Role 2",
          location: "London",
          capability: "Testing",
          band: "Mid",
          closingDate: new Date("2026-01-01"),
          status: "Open",
          jobSpec: "Job specification.",
          responsibilities: "Responsibilities.",
          numberOfOpenPositions: 1,
        },
        {
          id: "7",
          roleName: "Role 7",
          location: "Manchester",
          capability: "Testing",
          band: "Mid",
          closingDate: new Date("2026-01-01"),
          status: "Open",
          jobSpec: "Job specification.",
          responsibilities: "Responsibilities.",
          numberOfOpenPositions: 1,
        },
        {
          id: "4",
          roleName: "Role 4",
          location: "Birmingham",
          capability: "Testing",
          band: "Mid",
          closingDate: new Date("2026-01-01"),
          status: "Open",
          jobSpec: "Job specification.",
          responsibilities: "Responsibilities.",
          numberOfOpenPositions: 1,
        },
      ];

      const serviceWithExisting = new JobRoleMemoryService(existingRoles);
      const input = createValidInput();
      const result = serviceWithExisting.createJobRole(input);

      expect(result.id).toBe("8"); // Max is 7, so next should be 8
    });

    it("should be retrievable via getAllJobRoles", () => {
      const input1 = createValidInput();
      const input2 = { ...createValidInput(), roleName: "Junior Developer" };

      service.createJobRole(input1);
      service.createJobRole(input2);

      const allRoles = service.getAllJobRoles();

      expect(allRoles).toHaveLength(2);
      expect(allRoles[0]?.roleName).toBe(input1.roleName);
      expect(allRoles[1]?.roleName).toBe(input2.roleName);
    });

    it("should preserve Date objects correctly", () => {
      const input = createValidInput();
      const specificDate = new Date("2027-06-15T10:30:00.000Z");
      input.closingDate = specificDate;

      const result = service.createJobRole(input);

      expect(result.closingDate).toEqual(specificDate);
      expect(result.closingDate.getTime()).toBe(specificDate.getTime());
    });

    it("should handle special characters in string fields", () => {
      const input = createValidInput();
      input.roleName = "Senior Engineer (£50k-£70k) - London/Remote";
      input.jobSpec = "Looking for someone with C++, Node.js & React expertise!";

      const result = service.createJobRole(input);

      expect(result.roleName).toBe(input.roleName);
      expect(result.jobSpec).toBe(input.jobSpec);
    });
  });
});
