import schema from "./schema";

export default {
  handler: "src/functions/hello/handler.main",
  events: [
    {
      http: {
        method: "post",
        path: "hello",
        bodyType: "Passenger",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
        responseData: {
          // response with description and response body
          200: {
            description: "this went well",
            bodyType: "Passenger",
          },

          // response with just a description
          400: {
            description: "failed Post",
          },
          // shorthand for just a description
          502: "server error",
        },
        swaggerTags: ["Hello from AutoSwagger"],
        description: "Post hello function",
      },
    },
  ],
};
