import styled, { css } from 'styled-components'
import media from 'styled-media-query'
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
    height: max(calc(80vh - 5rem), 80rem);
    width: 100%;
    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      padding: 2rem;
      height: 70rem;
    `}
    ${media.greaterThan('medium')`
    display: grid;
    grid-template-rows: 80% 20%;
    grid-template-columns: 7% 38% 10% 38% 7%;
    `}
    ${media.greaterThan('huge')`
        padding: 0 29rem;
    `}
    ${wrapperModifiers[color]()}
  `}
`

export const Slider = styled.div`
  grid-column: 2/3;
  grid-row: 1;
  display: flex;
  align-items: center;
`

export const Text = styled.h2`
  ${media.lessThan('medium')`
    margin: 5rem 0;
  `}
`

export const Info = styled.div`
  grid-column: 4;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const Title = styled.h2`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    font-size: 3rem;
    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `}
`
