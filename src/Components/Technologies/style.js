import styled from 'styled-components';

export const Techs = styled.div`
  padding: 40px 0;
  opacity: 0;
  transform: translateY(30%);

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: #f5f5f5;
    margin-bottom: 20px;
  }

  .techsBtn {
    width: 50%;
    height: 100px;
    color: var(--color-black);
    border: 1px solid var(--color-gray-);
  }

  .techList {
    margin-top: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 80px;
    position: relative;
  }
  .techList li {
    opacity: 0;
    transform: translateX(-30%);
  }
  .techList li img {
    width: 80px;
    height: 80px;
  }
  hr {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 3px;
    background: var(--color-primary);
    border: none;
  }
`;
