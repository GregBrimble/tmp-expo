import {
  getAssetFromKV,
  serveSinglePageApp,
} from "@cloudflare/kv-asset-handler";
import { handleEvent as api } from "./api";

addEventListener("fetch", (event) => {
  try {
    event.respondWith(handleEvent(event));
  } catch (e) {
    event.respondWith(new Response("Internal Error", { status: 500 }));
  }
});

const handleEvent = async (event: FetchEvent) => {
  const response = await api(event);
  if (response.ok) return response;

  return await handleAssetEvent(event);
};

const assetOptions: Parameters<typeof getAssetFromKV>[1] = {
  mapRequestToAsset: serveSinglePageApp,
};

const handleAssetEvent = async (event: FetchEvent) => {
  try {
    return await getAssetFromKV(event, assetOptions);
  } catch (e) {
    return new Response("Not found", { status: 404 });
  }
};
