const clientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION,
};

export default clientConfig;
