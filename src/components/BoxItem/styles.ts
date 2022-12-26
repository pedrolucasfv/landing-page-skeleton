import styled, { css } from 'styled-components'
import theme from 'styles/theme'
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
    h2 {
    }
  `,
  light: () => css`
    background: linear-gradient(
      to bottom left,
      #585858,
      #515151,
      #4a4a4a,
      #434343,
      #3a3a3a
    );
    color: white;
  `
}

export const Wrapper = styled.main<ColorProps>`
  ${({ color }) => css`
    padding: 2rem 1rem;
    border: 0.2rem solid ${theme.colors.primary};
    margin: 3rem 0;
    width: 40rem;
    height: 30rem;
    ${wrapperModifiers[color]()}
    display: flex;
    flex-direction: column;
  `}
`

const titleModifiers = {
  light: () => css`
    color: ${theme.colors.lightBg};
  `,
  dark: () => css`
    color: ${theme.colors.darkGray};
  `
}

export const Title = styled.h2<ColorProps>`
  ${({ color }) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: ${theme.spacings.xxsmall} solid ${theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 2rem;
    ${titleModifiers[color]()}
    margin-left: 2rem;
  `}
`

export const Text = styled.h4`
  font-size: 1.5rem;
  font-weight: 450;
  color: ${theme.colors.lightBg};
  margin: 0rem 1rem;
`
