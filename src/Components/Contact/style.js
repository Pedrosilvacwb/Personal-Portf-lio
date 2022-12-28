import styled from 'styled-components';

export const Footer = styled.footer`
  background: var(--color-black);
  padding: 120px 0;
  color: var(--color-white);

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    max-width: 60%;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    opacity: 0;
    transform: translateX(-30%);
  }

  ul {
    list-style: none;
    opacity: 0;
    transform: translateX(20%);
  }
  ul li {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    position: relative;
  }

  ul li::before {
    content: '';
    height: 15px;
    width: 3px;
    background: var(--color-primary);
    position: absolute;
    top: 10px;
    left: -10px;
  }

  a {
    text-decoration: none;
    color: var(--color-white);
  }
`;
