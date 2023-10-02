export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET_NAME"),
        },
      },
    },
  },
  // "vercel-deploy": {
  //   enabled: true,
  //   config: {
  //     deployHook: process.env.VERCEL_DEPLOY_HOOK,
  //     apiToken: process.env.VERCEL_API_KEY,
  //     appFilter: "pakestate-frontend",
  //     teamFilter: "mominchaudhry",
  //     roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
  //   },
  // },
});
