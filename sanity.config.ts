import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "jlpwc9iu",
  dataset: "production",
  title: "Chahine's portfolio",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
