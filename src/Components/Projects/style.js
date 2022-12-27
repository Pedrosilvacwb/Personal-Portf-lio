import { display } from '@mui/system';
import styled from 'styled-components';

export const ProjectsSection = styled.div`
  padding: 80px 0;
  text-align: center;
  opacity: 0;
  transform: translateY(30%);

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    color: #f5f5f5;
    margin-bottom: 40px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    list-style: none;
  }
  ul li {
    border: 2px solid var(--color-gray700);
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 40px;
  }

  ul li:hover {
    border-color: var(--color-primary);
  }

  ul li div {
    color: var(--color-white);
  }
  .projectDetails {
    opacity: 0;
    height: 0;
  }
  li.active .projectDetails {
    animation: slideDown 0.6s forwards;
  }

  img {
    display: block;
    object-fit: cover;
    max-width: 100%;
    height: 250px;
  }
  @keyframes slideDown {
    to {
      opacity: 1;
      height: initial;
    }
  }
`;
