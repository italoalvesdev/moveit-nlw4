import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import { Overlay, Container, Header } from './styles';

export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <Header>{level}</Header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Fechar modal icon" />
        </button>
      </Container>
    </Overlay>
  );
};
