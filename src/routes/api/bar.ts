import { createFileRoute } from "@tanstack/react-router";

import big from "../../big.jpg?raw";

const Route = createFileRoute("/api/bar")({
  server: {
    handlers: {
      GET: () => {
        return Response.json({
          message: "Hello from the API route!",
          big,
        });
      },
    },
  },
});

export { Route };
