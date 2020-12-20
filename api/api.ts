import { Router } from "@glenstack/cf-workers-router";
import { handler as graphql } from "./graphql";

const router = new Router();
router.get("/graphql", graphql);
router.post("/graphql", graphql);

export const handleEvent = async (event: FetchEvent): Promise<Response> => {
  const { request } = event;
  return await router.route(request);
};
