import styled, { css } from 'styled-components';

export const ContentStyles = styled('div')`
  margin-top: 11vw;
  margin-bottom: ${({ theme }) => theme.spacing.XLR };

  padding: 0 var(--circle-width);


  @media screen and (max-width: ${ props => props.theme.breakpoints.L - 1 }px) {
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    margin-top: ${({ theme }) => theme.spacing.XL };
    padding: 0 ${({ theme }) => theme.spacing.SR };
  }
`

export const ColumnContentComponent = styled(ContentStyles)`
  
  display: flex;

  .column-1 {
    width: 37.5%;
  }

  .column-2 {
    width: 62.5%;
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    flex-wrap: wrap;
    
    .column {
      width: 100%;
    }
  }
`

export const HomeContentStyles = styled(ContentStyles)`
  margin-top: 0;
`