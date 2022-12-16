import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  padding: 3rem 10rem;
  background: linear-gradient(
    to left top,
    #282828,
    #212121,
    #1a1a1a,
    #131313,
    #0a0a0a
  );
  height: max(calc(100vh - 5rem), 100rem);
`
export const HeadingContent = styled.div`
  margin-bottom: 3rem;
`

export const Heading = styled.h2`
  position: relative;
  color: ${theme.colors.lightBg};
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
