import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import {
  Container,
  ChallengeActive,
  Header,
  Main,
  Footer,
  ChallengeFailedButton,
  ChallengeSucceededButton,
  ChallengeNotActive,
} from './styles';

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <Header>Ganhe {activeChallenge.amount} xp</Header>

          <Main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </Main>

          <Footer>
            <ChallengeFailedButton onClick={handleChallengeFailed}>
              Falhei
            </ChallengeFailedButton>

            <ChallengeSucceededButton onClick={handleChallengeSucceeded}>
              Completei
            </ChallengeSucceededButton>
          </Footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completendo desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
};
