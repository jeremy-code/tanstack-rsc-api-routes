import { getFoo } from "#/functions/getFoo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
  loader: () => {
    const foo = getFoo();

    return { foo };
  },
});

function Home() {
  const { foo } = Route.useLoaderData();

  return (
    <div className="p-8">
      {foo}
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
    </div>
  );
}
