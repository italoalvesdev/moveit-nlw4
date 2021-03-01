import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: var(--white);

  width: 100%;
  max-width: 400px;

  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  text-align: center;
  position: relative;

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    color: var(--text);

    margin-top: 0.25rem;
  }

  button {
    background: transparent;

    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    border: 0;
    font-size: 0px;
  }
`;

export const Header = styled.header`
  font-size: 8.75rem;
  font-weight: 600;
  color: var(--blue);

  background: url('/icons/levelup.svg') no-repeat center;
  background-size: contain;
`;
