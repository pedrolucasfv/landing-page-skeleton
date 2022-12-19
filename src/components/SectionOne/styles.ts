import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { ColorProps } from 'types/api'

const wrapperModifiers = {
  light: () => css`
    background: linear-gradient(
      to bottom left,
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
      to bottom left,
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
    height: calc(100vh - 5rem);
    ${media.greaterThan('medium')`
     display: grid;
     grid-template-rows: 15% 65% 20%;
     grid-template-columns: 7% 38% 10% 38% 7%;
    `}
    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      padding: 2rem;
    `}

    ${wrapperModifiers[color]()}
  `}
`

export const Text = styled.h2``

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    height: 100%;
    width: 40rem;
    ${media.lessThan('medium')`
      width: 35rem;
    `}
    grid-column: 4;
    grid-row: 2;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
  `}
`
export const Heading = styled.h2`
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
export const Info = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
