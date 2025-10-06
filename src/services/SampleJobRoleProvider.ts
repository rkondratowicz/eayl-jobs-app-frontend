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
      status: "Open",
      jobSpec:
        "We are seeking an experienced Senior Software Engineer to join our backend team. You will be responsible for designing and implementing scalable systems.",
      responsibilities:
        "Lead technical design, mentor junior developers, write clean code, conduct code reviews, and collaborate with cross-functional teams.",
      numberOfOpenPositions: 2,
    },
    {
      id: "2",
      roleName: "Junior Frontend Developer",
      location: "Manchester",
      capability: "Frontend Development",
      band: "Junior",
      closingDate: new Date("2025-10-30"),
      status: "Open",
      jobSpec:
        "Join our frontend team as a Junior Developer. You will work on modern web applications using React and TypeScript.",
      responsibilities:
        "Develop UI components, write tests, participate in code reviews, and learn from senior team members.",
      numberOfOpenPositions: 3,
    },
    {
      id: "3",
      roleName: "DevOps Engineer",
      location: "Birmingham",
      capability: "Infrastructure",
      band: "Mid",
      closingDate: new Date("2025-12-01"),
      status: "Open",
      jobSpec: "We need a DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines.",
      responsibilities:
        "Manage cloud infrastructure, automate deployments, monitor system performance, and ensure security best practices.",
      numberOfOpenPositions: 1,
    },
    {
      id: "4",
      roleName: "Product Manager",
      location: "Edinburgh",
      capability: "Product Management",
      band: "Senior",
      closingDate: new Date("2025-11-20"),
      status: "Open",
      jobSpec:
        "Lead product strategy and execution for our core products. Work closely with engineering, design, and business stakeholders.",
      responsibilities:
        "Define product roadmap, prioritize features, conduct user research, analyze metrics, and drive product launches.",
      numberOfOpenPositions: 1,
    },
    {
      id: "5",
      roleName: "UX Designer",
      location: "Bristol",
      capability: "Design",
      band: "Mid",
      closingDate: new Date("2025-10-25"),
      status: "Open",
      jobSpec:
        "Create exceptional user experiences for our digital products. Collaborate with product and engineering teams.",
      responsibilities:
        "Design user interfaces, conduct usability testing, create prototypes, maintain design systems, and advocate for users.",
      numberOfOpenPositions: 2,
    },
    {
      id: "6",
      roleName: "Data Scientist",
      location: "Cambridge",
      capability: "Data & Analytics",
      band: "Senior",
      closingDate: new Date("2025-12-10"),
      status: "Open",
      jobSpec:
        "Apply machine learning and statistical analysis to solve complex business problems and drive data-driven decisions.",
      responsibilities:
        "Build predictive models, analyze large datasets, communicate insights to stakeholders, and deploy ML solutions.",
      numberOfOpenPositions: 1,
    },
    {
      id: "7",
      roleName: "Junior QA Engineer",
      location: "Leeds",
      capability: "Quality Assurance",
      band: "Junior",
      closingDate: new Date("2025-11-05"),
      status: "Open",
      jobSpec:
        "Ensure the quality of our software products through manual and automated testing. Learn QA best practices.",
      responsibilities:
        "Write test cases, execute tests, report bugs, learn test automation, and collaborate with developers.",
      numberOfOpenPositions: 2,
    },
    {
      id: "8",
      roleName: "Technical Lead",
      location: "Glasgow",
      capability: "Engineering Leadership",
      band: "Principal",
      closingDate: new Date("2025-12-15"),
      status: "Open",
      jobSpec:
        "Provide technical leadership for a team of engineers. Drive architectural decisions and mentor team members.",
      responsibilities:
        "Set technical direction, review architecture, mentor engineers, ensure code quality, and align with business goals.",
      numberOfOpenPositions: 1,
    },
    {
      id: "9",
      roleName: "Mobile Developer",
      location: "Cardiff",
      capability: "Mobile Development",
      band: "Mid",
      closingDate: new Date("2025-11-25"),
      status: "Open",
      jobSpec:
        "Build and maintain our mobile applications for iOS and Android using React Native or native technologies.",
      responsibilities:
        "Develop mobile features, optimize performance, fix bugs, write tests, and collaborate with designers.",
      numberOfOpenPositions: 2,
    },
    {
      id: "10",
      roleName: "Cybersecurity Specialist",
      location: "Belfast",
      capability: "Security",
      band: "Senior",
      closingDate: new Date("2025-12-05"),
      status: "Open",
      jobSpec:
        "Protect our systems and data by implementing security best practices and responding to security incidents.",
      responsibilities:
        "Conduct security audits, implement security controls, respond to incidents, train teams, and monitor threats.",
      numberOfOpenPositions: 1,
    },
  ];
}
