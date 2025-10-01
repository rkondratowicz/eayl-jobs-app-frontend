import type { JobRole } from "../models/job-role";

export function createSampleJobRoles(): JobRole[] {
  return [
    {
      roleName: "Senior Software Engineer",
      location: "London",
      capability: "Backend Development",
      band: "Senior",
      closingDate: new Date("2025-11-15"),
    },
    {
      roleName: "Junior Frontend Developer",
      location: "Manchester",
      capability: "Frontend Development",
      band: "Junior",
      closingDate: new Date("2025-10-30"),
    },
    {
      roleName: "DevOps Engineer",
      location: "Birmingham",
      capability: "Infrastructure",
      band: "Mid",
      closingDate: new Date("2025-12-01"),
    },
    {
      roleName: "Product Manager",
      location: "Edinburgh",
      capability: "Product Management",
      band: "Senior",
      closingDate: new Date("2025-11-20"),
    },
    {
      roleName: "UX Designer",
      location: "Bristol",
      capability: "Design",
      band: "Mid",
      closingDate: new Date("2025-10-25"),
    },
  ];
}
