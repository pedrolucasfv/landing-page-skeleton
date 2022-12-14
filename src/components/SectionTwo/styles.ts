import styled from 'styled-components'

export const Wrapper = styled.main`
  background: linear-gradient(
    to bottom left,
    #282828,
    #212121,
    #1a1a1a,
    #131313,
    #0a0a0a
  );
  color: white;
  height: calc(100vh - 5rem);
  display: grid;
  grid-template-rows: 15% 65% 20%;
  grid-template-columns: 7% 38% 10% 38% 7%;
`

export const Slider = styled.div`
  grid-column: 2/3;
  grid-row: 2;
  display: flex;
  align-items: center;
`

export const Text = styled.h2`
  display: flex;
  grid-column: 4/5;
  grid-row: 2;
  justify-content: center;
  align-items: center;
`
