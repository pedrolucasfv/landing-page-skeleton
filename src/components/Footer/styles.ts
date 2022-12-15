import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: linear-gradient(
      to left top,
      #e3e3e3,
      #dedede,
      #e5e5e5,
      #ececec,
      #f5f5f5
    );
    color: #131313;
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 0.6rem solid ${theme.colors.primary};
  `}
`

export const Text = styled.h2`
  display: flex;

  justify-content: center;
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
  display: grid;
  grid-template-columns: 40% 20% 40%;
  grid-template-rows: 40% 20% 40%;
`
type GridProps = {
  grid: 'grid1' | 'grid2' | 'grid3' | 'grid4'
}

const contentModifiers = {
  grid1: () => css`
    grid-column: 1;
    grid-row: 1;
  `,
  grid2: () => css`
    grid-column: 1;
    grid-row: 3;
  `,
  grid3: () => css`
    grid-column: 3;
    grid-row: 1;
  `,
  grid4: () => css`
    grid-column: 3;
    grid-row: 3;
  `
}
export const ContentInfo = styled.div<GridProps>`
  ${({ grid }) => css`
    ${contentModifiers[grid]}
  `}
`
