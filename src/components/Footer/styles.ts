import styled, { css } from 'styled-components'
import { ColorProps } from 'types/api'

const wrapperModifiers = {
  dark: () => css`
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
  light: () => css`
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
  ${({ theme, color }) => css`
    color: #131313;
    height: 50vh;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 80% 20%;

    border-top: 0.6rem solid ${theme.colors.primary};
    padding: 2rem 4rem;
    ${wrapperModifiers[color]()}
  `}
`

export const Text = styled.h4`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: flex-start;
  align-items: center;
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    height: 20rem;
    width: 20rem;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    margin: 0 5rem;
  `}
`

export const ContentImage = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
`

export const ContentInfo = styled.div`
  margin-right: 10rem;
`

export const Copyright = styled.h2`
  grid-column: 1/3;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a2a2a2;
`
