import styled from 'styled-components';

export const Hero = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: flex-start;
  padding: 40px 0;

  .text-area {
    opacity: 0;
    transform: translateX(-30%);
    animation: appearRight 0.6s forwards;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .tag {
    display: block;
    padding: 10px 24px;
    background-color: var(--color-primary);
    width: max-content;
    border-radius: 5px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: #f5f5f5;
  }

  .bottomHero {
    display: flex;
    gap: 80px;
  }
  .bottomHero > div {
    display: flex;
    gap: 8px;
    color: var(--color-gray600);
  }
  h2 {
    font-weight: 700;
    font-size: 60px;
    line-height: 55px;
  }
  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
  }

  img {
    width: 350px;
    border: 3px solid var(--color-gray700);
    border-radius: 50%;
  }
`;
