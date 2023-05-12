import styled from 'styled-components';

export const NewsStyles = styled('article')`

  width: calc( ${ props => props.width } * var(--circle-width) );
  margin-right: calc( ${ props => props.spacingRight } * var(--circle-width) );
  margin-top: calc( ${ props => props.spacingTop } * var(--circle-width) );
  margin-bottom: var(--circle-width);

  .thumbnail {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.MR };

    img {
      width: 100%;
      height: auto;
    }
  }

  .title {
    text-decoration: underline;
    margin-bottom: ${({ theme }) => theme.spacing.XSR };
  }

  .date {
    margin-bottom: ${({ theme }) => theme.spacing.XSR };
  }


  @media screen and (max-width: ${ props => props.theme.breakpoints.L - 1 }px) {
    /* margin-top: 0; */
    margin-bottom: var(--circle-width);
    margin-right: var(--circle-width);
    width: calc( 4 * var(--circle-width) - 3px);
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.M - 1 }px) {
    width: 100%;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: ${({ theme }) => theme.spacing.XL };
  }
`