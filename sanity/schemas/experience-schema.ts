const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "companyImage",
      title: "CompanyImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "dateEnded",
      type: "date",
    },
    {
      name: "isCurrentlyWorking",
      title: "IsCUrrentlyWorking",
      type: "boolean",
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default experience;
