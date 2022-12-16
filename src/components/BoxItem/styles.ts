import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  background: linear-gradient(
    to left top,
    #e3e3e3,
    #dedede,
    #e5e5e5,
    #ececec,
    #f5f5f5
  );
  padding: 3rem;
  border: 0.2rem solid ${theme.colors.primary};
  margin: 5rem;
  width: 40rem;
  height: 30rem;
`

export const Title = styled.h2`
  padding-left: ${theme.spacings.xxsmall};
  border-left: ${theme.spacings.xxsmall} solid ${theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${theme.colors.darkGray};
`

export const Text = styled.h4`
  font-size: 1.5rem;
  font-weight: 450;
  color: ${theme.colors.gray};
`
