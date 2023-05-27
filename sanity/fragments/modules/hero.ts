import { groq } from "next-sanity";
import { IMAGE } from "../image";

export const MODULE_HERO = groq`
  _key,
  _type,
  blocks[] {
    ...,
  },
  "grundprincipper": grundprincipper[] {
    ...,
  },
  "backgroundImage": backgroundImage {
    ${IMAGE}
  },
`;
