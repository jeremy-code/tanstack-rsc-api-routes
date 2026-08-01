import { createServerFn } from "@tanstack/react-start";
import { renderServerComponent } from "@tanstack/react-start/rsc";

const getFoo = createServerFn({ method: "GET" }).handler(() => {
  return "Hello world";
});

export { getFoo };
