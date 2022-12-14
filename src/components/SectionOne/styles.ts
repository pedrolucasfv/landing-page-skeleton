import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  background: linear-gradient(
    to left top,
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

export const Text = styled.h2`
  display: flex;
  grid-column: 2;
  grid-row: 2;
  justify-content: center;
  align-items: center;
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    height: 100%;
    grid-column: 4;
    grid-row: 2;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
  `}
`
