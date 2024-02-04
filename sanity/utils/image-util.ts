import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import clientConfig from "../config/client-config";

const builder = ImageUrlBuilder(createClient(clientConfig));

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
