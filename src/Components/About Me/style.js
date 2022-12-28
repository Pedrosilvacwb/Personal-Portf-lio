import styled from 'styled-components';

export const About = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 80px 0;
  opacity: 0;
  transform: translateY(30%);

  img {
    width: 450px;
    height: 450px;
    object-fit: cover;
    border: 3px solid var(--color-gray700);
    border-radius: 5px;
  }

  .textArea h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: #f5f5f5;
    margin-bottom: 20px;
  }

  .textArea p {
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: var(--color-gray600);
    margin-bottom: 40px;
  }
  .cvDownload {
    display: block;
    padding: 25px 50px;
    text-transform: uppercase;
    background: var(--color-primary);
    width: max-content;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: var(--color-black);
  }
`;
