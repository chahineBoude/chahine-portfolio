const skill = {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "skillName",
      title: "SkillName",
      type: "string",
    },
    {
      name: "skillLogo",
      title: "SkillLogo",
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
      name: "level",
      title: "Level",
      type: "number",
    },
  ],
};

export default skill;
