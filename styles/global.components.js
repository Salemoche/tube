import styled, { css } from 'styled-components';

export const ContentStyles = styled('div')`
  margin-top: calc( var(--circle-width) * 4 );
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
    width: calc(var(--circle-width) * 8);
    padding-right: var(--circle-width);
    flex-shrink: 0;
  }

  .column-2 {
    flex-grow: 1;
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    flex-wrap: wrap;

    .column-1 {
      padding-right: 0;
      margin-bottom: var(--circle-width);
    }
    
    .column {
      width: 100%;
    }
  }

`

export const HomeContentStyles = styled(ContentStyles)`
  margin-top: 0;
`

export const DefaultContentStyles = styled(ContentStyles)`
`

export const DefaultPageStyles = styled(ContentStyles)`
  background: green;
`