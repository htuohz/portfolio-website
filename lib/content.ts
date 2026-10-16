export const experience = [
  {
    company: "Linfox",
    role: "Full Stack Developer",
    start: "2025-02",
    period: "Feb 2025 – now",
    summary:
      "Redesigning the customer portal: a new PostgreSQL-based authorisation model, and ordering that creates orders in Blue Yonder. Also set up local development with Serverless Offline and moved bundling to esbuild for faster builds.",
  },
  {
    company: "Auxita",
    role: "Software Engineer",
    start: "2023-01",
    period: "Jan 2023 – Nov 2024",
    summary: "Built healthcare platform features, prescriber tools and patient enrolment workflows with React, Node.js and MongoDB.",
  },
  {
    company: "Tecks",
    role: "Full-stack Developer",
    start: "2021-12",
    period: "Dec 2021 – Jan 2023",
    summary: "Built e-commerce and golf booking workflows for a sports retail client.",
  },
] as const;

export const stack = [
  { group: "Interfaces", items: "React, TypeScript, AG Grid, TanStack Query" },
  { group: "Services and data", items: "Node.js, Express, PostgreSQL, Prisma, MongoDB, AWS Lambda, Snowflake" },
  { group: "Delivery", items: "Serverless Framework, esbuild, Docker, GitHub Actions" },
] as const;
