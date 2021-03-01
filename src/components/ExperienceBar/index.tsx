import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import {
  Header,
  ProgressBarContainer,
  ProgressBar,
  CurrentExperience,
} from './styles';

export const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Header>
      <span>0 xp</span>
      <ProgressBarContainer>
        <ProgressBar percentToNextLevel={percentToNextLevel} />
        <CurrentExperience
          percentToNextLevel={percentToNextLevel}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </CurrentExperience>
      </ProgressBarContainer>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  );
};
