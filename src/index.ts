import { Application } from "./deps.ts";
import { router } from "./infrastructures/router.ts";

const app = new Application();

// logger
// errorHandler

app.use(router.routes());
app.use(router.allowedMethods());

// router

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(
    `Start litening on ` + `${hostname ?? "localhost"}: ${port}`
  );
});

const port = parseInt(Deno.env.get("PORT") ?? "8000");

app.listen({ port });
