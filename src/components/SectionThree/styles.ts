import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'
import { ColorProps } from 'types/api'
const wrapperModifiers = {
  light: () => css`
    background: linear-gradient(
      to left bottom,
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
    ${media.greaterThan('medium')`
    padding: 3rem 10rem;
    height: max(calc(100vh - 5rem), 100rem);
    `}

    ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    padding: 3rem 3rem;
    `}
    ${wrapperModifiers[color]()}
  `}
`
export const HeadingContent = styled.div`
  margin-bottom: 3rem;
`

export const Heading = styled.h2`
  position: relative;
  font-size: 4rem;
  &::after {
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    content: '';
    width: 6rem;
    border-bottom: 0.5rem solid ${theme.colors.primary};
  }
`
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
