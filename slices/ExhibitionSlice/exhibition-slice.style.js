import styled from 'styled-components';
import css from 'styled-jsx/css';

export const ExhibitionSliceStyles = styled('div')`

  display: flex;
  flex-wrap: wrap;
  position: relative;

  &:first-child {
    padding-top: calc( var(--circle-width) * 4);
  }

  .exhibition-info {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100vh;
    font-size: 8vw;
    display: flex;
    pointer-events: none;
    ${'' /* top: 100vh; */}
    top: 0;
    ${'' /* top: calc( ${ props => props.index } * 100vh); */}
    /* opacity: 0.1; */

    * {
      line-height: calc( var(--circle-width) * 2);
    }
  }

  ${'' /* @media screen and (max-width: ${ props => props.theme.breakpoints.M }px) {

    .exhibition-info {
      font-size: 12vw;
    }
  } */}

  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    &:first-child {
      padding-top: ${({ theme }) => theme.spacing.XL };
    }

    .exhibition-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      font-size: 15vw;
    }
  }
`
export const ExhibitionTitleStyles = styled('h2')`
  transform: translateY(12%);
  position: absolute;
  width: calc( ${ props => props.width } * var(--circle-width));
  left: calc( ${ props => props.left } * var(--circle-width));
  bottom: calc( ${ props => props.top } * var(--circle-width));
  hyphens: auto;
  /* word-break: break-word; */
  margin-bottom: var(--circle-width);

  @media screen and (max-width: ${ props => props.theme.breakpoints.L - 1 }px) {
    width: calc( ${ props => props.width * props.theme.tabletMultiplier } * var(--circle-width));
    left: calc( ${ props => props.left * props.theme.tabletMultiplier } * var(--circle-width));
    bottom: calc( ${ props => props.top * props.theme.tabletMultiplier } * var(--circle-width));
  }


  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.SR };
    position: static;
    ${'' /* position: sticky;
    top: 50vh; */}
  }
`
export const ExhibitionDateStyles = styled('div')`
  transform: translateY(12%);
  position: absolute;
  width: calc( ${ props => props.width } * var(--circle-width));
  left: calc( ${ props => props.left } * var(--circle-width));
  bottom: calc( ${ props => props.top } * var(--circle-width));
  word-break: break-word;
  margin-bottom: var(--circle-width);

  @media screen and (max-width: ${ props => props.theme.breakpoints.L - 1 }px) {
    width: calc( ${ props => props.width * props.theme.tabletMultiplier } * var(--circle-width));
    left: calc( ${ props => props.left * props.theme.tabletMultiplier } * var(--circle-width));
    bottom: calc( ${ props => props.top * props.theme.tabletMultiplier } * var(--circle-width));
  }


  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.SR };
    position: static;
    ${'' /* position: sticky;
    top: 50vh; */}
  }
`

export const ExhibitionContentStyles = styled('div')`
  width: calc( ${ props => props.width } * var(--circle-width));
  margin-left: calc( ${ props => props.spacingLeft } * var(--circle-width));
  margin-right: calc(${ props => props.spacingRight > 0 ? props.spacingRight : 1 } * var(--circle-width));
  margin-top: calc( ${ props => props.spacingTop } * var(--circle-width));
  margin-bottom: var(--circle-width);

  .image-container {
    width: calc( ${ props => props.width } * var(--circle-width));
    height: calc( ${ props => props.height } * var(--circle-width));

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
      height: 100%
    }
  }
`