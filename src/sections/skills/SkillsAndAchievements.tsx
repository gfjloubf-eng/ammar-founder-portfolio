import React from 'react';
import { TechnicalSkillsMatrix } from './TechnicalSkillsMatrix';
import { AchievementsTimeline } from './AchievementsTimeline';

export function SkillsAndAchievements() {
  return (
    <div style={{ display: 'grid', gap: 26, paddingBottom: 24 }}>
      <TechnicalSkillsMatrix />
      <AchievementsTimeline />
    </div>
  );
}

