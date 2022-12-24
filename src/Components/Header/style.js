import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  margin-bottom: 80px;

  h1 {
    font-size: 48px;
    font-weight: bold;
    color: var(--color-white);
  }
  h1 > span {
    color: var(--color-gray600);
  }
  ul {
    list-style: none;
    display: flex;
    gap: 40px;
  }
  ul li a {
    display: block;
    text-decoration: none;
    font-size: 20px;
    color: var(--color-white);
    font-weight: 600;
  }
  ul li a span {
    opacity: 0;
  }

  ul li a:hover {
    color: var(--color-primary);
    transition: 0.3s all;
  }
  ul li a:hover span {
    opacity: 1;
  }
`;
