import styled, { css } from 'styled-components'
import { ColorProps } from 'types/api'

const wrapperModifiers = {
  light: () => css`
    background: linear-gradient(
      to top left,
      #e3e3e3,
      #dedede,
      #e5e5e5,
      #ececec,
      #f5f5f5
    );
    color: #282828;
  `,
  dark: () => css`
    background: linear-gradient(
      to top left,
      #282828,
      #212121,
      #1a1a1a,
      #131313,
      #0a0a0a
    );
    color: white;
  `
}

export const Wrapper = styled.main<ColorProps>`
  ${({ color }) => css`
    height: calc(70vh - 5rem);
    display: grid;
    grid-template-rows: 20% 80%;
    grid-template-columns: 7% 38% 10% 38% 7%;
    ${wrapperModifiers[color]()}
  `}
`

export const Slider = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;
  display: flex;
  align-items: center;
`

export const Text = styled.h2`
  display: flex;
  grid-column: 2/5;
  grid-row: 1;
  justify-content: center;
  align-items: center;
`
