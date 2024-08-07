// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $Hero from "./islands/Hero.tsx";
import * as $ImagesSection from "./islands/ImagesSection.tsx";
import * as $TalkWithUs from "./islands/TalkWithUs.tsx";
import * as $TextAnimation from "./islands/TextAnimation.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/Header.tsx": $Header,
    "./islands/Hero.tsx": $Hero,
    "./islands/ImagesSection.tsx": $ImagesSection,
    "./islands/TalkWithUs.tsx": $TalkWithUs,
    "./islands/TextAnimation.tsx": $TextAnimation,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
