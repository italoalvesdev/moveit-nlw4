import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, CountdownButton } from './styles';

export const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButton disabled active={isActive}>
          Ciclo encerrado
          <span>
            <img src="icons/check.svg" alt="Ok" />
          </span>
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              type="button"
              onClick={resetCountdown}
              active={isActive}
            >
              Abandonar o ciclo
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#666666"
                  />
                </svg>
              </span>
            </CountdownButton>
          ) : (
            <CountdownButton
              type="button"
              onClick={startCountdown}
              active={isActive}
            >
              Iniciar um ciclo
              <span>
                <img src="icons/play.svg" alt="Play" />
              </span>
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
};
