import type { JobRole } from "../models/job-role.js";

export function createSampleJobRoles(): JobRole[] {
  return [
    {
      id: "1",
      roleName: "Senior Software Engineer",
      location: "London",
      capability: "Backend Development",
      band: "Senior",
      closingDate: new Date("2025-11-15"),
    },
    {
      id: "2",
      roleName: "Junior Frontend Developer",
      location: "Manchester",
      capability: "Frontend Development",
      band: "Junior",
      closingDate: new Date("2025-10-30"),
    },
    {
      id: "3",
      roleName: "DevOps Engineer",
      location: "Birmingham",
      capability: "Infrastructure",
      band: "Mid",
      closingDate: new Date("2025-12-01"),
    },
    {
      id: "4",
      roleName: "Product Manager",
      location: "Edinburgh",
      capability: "Product Management",
      band: "Senior",
      closingDate: new Date("2025-11-20"),
    },
    {
      id: "5",
      roleName: "UX Designer",
      location: "Bristol",
      capability: "Design",
      band: "Mid",
      closingDate: new Date("2025-10-25"),
    },
  ];
}
