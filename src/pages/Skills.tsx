import React from 'react';
import { PageShell } from '../ui/layout/PageShell';
import { SkillsAndAchievements } from '../sections/skills/SkillsAndAchievements';

export default function Skills() {
  return (
    <PageShell>
      <div className="container">
        <SkillsAndAchievements />
      </div>
    </PageShell>
  );
}

