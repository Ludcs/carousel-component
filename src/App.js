import styled, {createGlobalStyle} from 'styled-components';
import {Carousel} from './components/Carousel';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <h1>Carousel Slider</h1>
        <Carousel />
      </AppContainer>
    </>
  );
};
const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  body {
    background-color: #4b6584;
    font-family: 'Roboto Mono', monospace;    

  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100vh;

  h1 {
    color: #d1d8e0;
    font-weight: 500;
  }
`;
