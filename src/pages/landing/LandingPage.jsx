import { LandingTopNav } from "./LandingTopNav";
import { LandingHero } from "./LandingHero";
import { LandingFeatures } from "./LandingFeatures";
import { LandingBlog } from "./LandingBlog";
import { LandingAbout } from "./LandingAbout";
import { LandingFooter } from "./LandingFooter";

import { ScrollToTop } from "@components";

function LandingPage() {
  return (
    <div>
      <LandingTopNav />

      <main>
        <LandingHero />
        <LandingFeatures />
        <LandingBlog />
        <LandingAbout />
        <LandingFooter />

        <ScrollToTop />
      </main>
    </div>
  );
}

export { LandingPage };
