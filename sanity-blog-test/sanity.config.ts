import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "@/sanity/schemas/test-schema";
import { schemas } from "@/sanity/schemas";
const config = defineConfig({
  projectId: "juxljha6",
  dataset: "production",
  title: "Testing Sanity",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn: true,
});
export default config;
