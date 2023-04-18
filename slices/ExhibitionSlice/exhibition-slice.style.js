import styled from 'styled-components';

export const ExhibitionSliceStyles = styled('div')`
  .exhibition-info {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100vh;
    font-size: 10vw;
    opacity: 0.1;
  }
`
export const ExhibitionTitleStyles = styled('h2')`
  position: absolute;
  width: calc( ${ props => props.width } * var(--circle-width));
  left: calc( ${ props => props.left } * var(--circle-width));
  top: calc( ${ props => props.top } * var(--circle-width));
`
export const ExhibitionDateStyles = styled('div')`
  position: absolute;
  width: calc( ${ props => props.width } * var(--circle-width));
  left: calc( ${ props => props.left } * var(--circle-width));
  top: calc( ${ props => props.top } * var(--circle-width));
`

export const ExhibitionContentStyles = styled('div')`
  width: calc( ${ props => props.width } * var(--circle-width));
  margin-left: calc( ${ props => props.spacingLeft } * var(--circle-width));
  margin-right: calc( ${ props => props.spacingRight } * var(--circle-width));
  margin-top: calc( ${ props => props.spacingTop } * var(--circle-width));

  @media screen and (max-width: ${ props => props.theme.breakpoints.L - 1 }px) {
    width: calc( ${ props => props.widthTablet } * var(--circle-width));
    margin-left: calc( ${ props => props.spacingLeftTablet } * var(--circle-width));
    margin-right: calc( ${ props => props.spacingRightTablet } * var(--circle-width));
    margin-top: calc( ${ props => props.spacingTopTablet } * var(--circle-width));
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.M - 1 }px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.XL };
  }
`