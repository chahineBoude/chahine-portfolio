const project = {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      {
        name: "projectTitle",
        title: "ProjectTitle",
        type: "string",
      },
      {
        name: "projectImage",
        title: "projectImage",
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
        name: "githubRepo",
        title: "GithubRepo",
        type: "string",
      },
      {
        name: "liveDemo",
        title: "LiveDemo",
        type: "string",
      },
      {
        name: "stack",
        title: "Stack",
        type: "array",
        of: [{ type: "reference", to: { type: "skill" } }],
      },
    ],
  };
  
  export default project;
  