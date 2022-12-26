import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Titillium Web', sans-serif;
  }
  :root{
    --color-black:#141414;
    --color-white: #f5f5f5;
    --color-primary: #47D974;
    --color-gray900: #292929;
    --color-gray800: #3D3D3D;
    --color-gray700: #666666;
    --color-gray600: #B8B8B8;
  }
  
  .AppBody{
    background: var(--color-gray800)
  }
  .green{
    color:var(--color-primary)
  }
  
  @keyframes appearTop {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes appearRight {
    to{
      opacity: 1;
      transform: translateX(0);
    }
  }
  `;
