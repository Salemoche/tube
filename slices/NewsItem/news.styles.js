import styled from 'styled-components';

export const NewsStyles = styled('article')`

  width: calc( ${ props => props.width } * var(--circle-width) );
  margin-right: calc( ${ props => props.spacingRight } * var(--circle-width) );
  margin-top: calc( ${ props => props.spacingTop } * var(--circle-width) );

  .thumbnail {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.M };

    img {
      width: 100%;
      height: auto;
    }
  }

  .title {
    text-decoration: underline;
    margin-bottom: ${({ theme }) => theme.spacing.XS };
  }
`