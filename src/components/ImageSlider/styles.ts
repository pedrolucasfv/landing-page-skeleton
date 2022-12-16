import styled, { css } from 'styled-components'

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src, theme }) => css`
    height: 30rem;
    width: 30rem;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    margin-bottom: 2rem;
    border: 0.2rem solid ${theme.colors.primary};
  `}
`

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;

      li {
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        transition: box-shadow '0.1s ease-in-out';

        &.slick-active {
          background: ${theme.colors.primary};
        }

        &:hover {
          box-shadow: 0 0 0 0.3rem ${theme.colors.secondary};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    .slick-slide {
      visibility: hidden;

      &.slick-active.slick-current {
        visibility: visible;
      }
    }
  `}
`
