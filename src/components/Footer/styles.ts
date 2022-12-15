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
    height: 50vh;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 80% 20%;

    border-top: 0.6rem solid ${theme.colors.primary};
    padding: 2rem 4rem;
  `}
`

export const Text = styled.h4`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
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
  justify-content: space-between;
  padding: 3rem 0;

  align-items: center;
`
type GridProps = {
  grid: 'grid1' | 'grid2' | 'grid3'
}

const contentModifiers = {
  grid1: () => css``,
  grid2: () => css``,
  grid3: () => css``
}
export const ContentInfo = styled.div<GridProps>`
  ${({ grid }) => css`
    ${contentModifiers[grid]}
  `}
  padding: 0 5rem
`

export const Copyright = styled.h2`
  grid-column: 1/3;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a2a2a2;
`
