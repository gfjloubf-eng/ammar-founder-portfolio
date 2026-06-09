 import React from 'react';
import { PageShell } from '../ui/layout/PageShell';

import { HomeHero } from '../sections/home/HomeHero';


import { FounderStorySection } from '../sections/home/FounderStorySection';
import { FeaturedNexaLedgerSection } from '../sections/home/FeaturedNexaLedgerSection';
import { ProjectsSection } from '../sections/home/ProjectsSection';
import { DesignShowcaseSection } from '../sections/home/DesignShowcaseSection';
import { PublicationsSection } from '../sections/home/PublicationsSection';
import { SkillsSection } from '../sections/home/SkillsSection';
import { AchievementsSection } from '../sections/home/AchievementsSection';
import { ContactSection } from '../sections/home/ContactSection';

export default function Home() {
  return (
    <PageShell>
      <HomeHero />
      <FounderStorySection />
      <FeaturedNexaLedgerSection />
      <ProjectsSection />
      <DesignShowcaseSection />
      <PublicationsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </PageShell>
  );
}