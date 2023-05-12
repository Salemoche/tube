import styled from 'styled-components';

export const FooterStyles = styled('footer')`
  margin-left: calc(var(--circle-width) * 7);
  padding: ${({ theme }) => theme.spacing.SR } 0;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    margin-left: var(--circle-width);
  }
`