import styled from 'styled-components';
import css from 'styled-jsx/css';
import getFontSize from '../../utils/getFontSize';

export const ExhibitionSliceStyles = styled('a')`

  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  padding: 0 var(--circle-width);

  &:first-child {
    padding-top: calc( var(--circle-width) * 4);
  }

  &:hover {
    .image-container {
      ${'' /* filter: grayscale(100%); */}
      ${'' /* mix-blend-mode: exclusion; */}
      transform: scale(1.01);
    }
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    &:first-child {
      margin-top: ${({ theme }) => theme.spacing.XL };
    }

    height: 80vh;
    align-items: center;

  }
`

export const ExhibitionContentStyles = styled('div')`
  width: calc( ${ props => props.width } * var(--circle-width));
  margin-left: calc( ${ props => props.spacingLeft } * var(--circle-width));
  margin-right: calc(${ props => props.spacingRight > 0 ? props.spacingRight : 1 } * var(--circle-width));
  margin-top: calc( ${ props => props.spacingTop } * var(--circle-width));
  margin-bottom: var(--circle-width);
  display: inline-block;
  vertical-align: top;

  .image-container {
    width: calc( ${ props => props.width } * var(--circle-width));
    height: calc( ${ props => props.height } * var(--circle-width));
    max-width: 100%;
    transition: all 1s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .image-caption {
    height: var(--circle-width);
    display: flex;
    align-content: flex-end;
    flex-wrap: wrap;
    margin-top: 0.3vw;

    .name, 
    .info {
      width: 100%;
    }
  }

  .description {
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.L - 1 }px) {
    width: calc( ${ props => props.width * props.theme.tabletMultiplier } * var(--circle-width));
    margin-left: calc( ${ props => props.spacingLeft * props.theme.tabletMultiplier } * var(--circle-width));
    margin-right: calc(${ props => props.spacingRight * props.theme.tabletMultiplier > 0 ? props.spacingRight : 1 } * var(--circle-width));
    margin-top: calc( ${ props => props.spacingTop * props.theme.tabletMultiplier } * var(--circle-width));

    .image-container {
      height: calc( ${ props => props.height * props.theme.tabletMultiplier } * var(--circle-width));
      width: calc( ${ props => props.width * props.theme.tabletMultiplier } * var(--circle-width));

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.XL };

    .image-container {
      width: 100%;
      height: auto;
    }

    .image-caption {
      height: auto;
    }
  }
`