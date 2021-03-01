import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import { Container } from './styles';

export const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img
        src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        alt="Italo Alves"
      />
      <div>
        <strong>Italo Alves</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};
