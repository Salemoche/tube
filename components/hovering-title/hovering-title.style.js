import getFontSize from '@/utils/getFontSize';
import styled from 'styled-components';

export const HoveringTitleStyles = styled('div')`

  z-index: 1;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  ${ props => getFontSize( 'XL', props )};
  display: flex;
  pointer-events: none;
  ${'' /* top: 100vh; */}
  top: 0;
  ${'' /* top: calc( ${ props => props.index } * 100vh); */}
  /* opacity: 0.1; */

  * {
    line-height: calc( var(--circle-width) * 3);
  }

  .options-info {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    * {
      margin-bottom: ${({ theme }) => theme.spacing.XL };
      font-size: 14vw;
      line-height: 1;
    }

  }
`

export const ContentOneStyles = styled('h2')`
  transform: translateY(-5%);
  position: absolute;
  width: ${ props => props.width ? `calc(  ${ props.width } * var(--circle-width))` : 'auto'};
  left: calc( ${ props => props.left } * var(--circle-width));
  ${'' /* bottom: calc( ${ props => props.top } * var(--circle-width)); */}
  top: calc( ${ props => props.top } * var(--circle-width));
  hyphens: ${props => props.hyphens };
  /* word-break: break-word; */
  margin-bottom: var(--circle-width);

  @media screen and (max-width: ${ props => props.theme.breakpoints.L - 1 }px) {
    width: calc( ${ props => props.width * props.theme.tabletMultiplier } * var(--circle-width));
    left: calc( ${ props => props.left * props.theme.tabletMultiplier } * var(--circle-width));
    ${'' /* bottom: calc( ${ props => props.top * props.theme.tabletMultiplier } * var(--circle-width)); */}
    top: calc( ${ props => props.top * props.theme.tabletMultiplier } * var(--circle-width));
  }


  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.SR };
    padding-left: ${({ theme }) => theme.spacing.SR };
    padding-right: ${({ theme }) => theme.spacing.SR };
    position: relative;
    top: calc( ${props => props.mobileTop } * var(--circle-width));
    left: 0;
    ${'' /* position: sticky;
    top: 50vh; */}
  }
`
export const ContentTwoStyles = styled('div')`
  transform: translateY(-5%);
  position: absolute;
  width: ${ props => props.width ? `calc(  ${ props.width } * var(--circle-width))` : 'auto'};
  left: calc( ${ props => props.left } * var(--circle-width));
  ${'' /* bottom: calc( ${ props => props.top } * var(--circle-width)); */}
  top: calc( ${ props => props.top } * var(--circle-width));
  word-break: break-word;
  margin-bottom: var(--circle-width);

  @media screen and (max-width: ${ props => props.theme.breakpoints.L - 1 }px) {
    ${'' /* width: calc( ${ props => props.width * props.theme.tabletMultiplier } * var(--circle-width)); */}
    width: ${ props => props.width ? `calc(  ${ props.width * props.theme.tabletMultiplier } * var(--circle-width))` : 'auto'};
    left: calc( ${ props => props.left * props.theme.tabletMultiplier } * var(--circle-width));
    ${'' /* bottom: calc( ${ props => props.top * props.theme.tabletMultiplier } * var(--circle-width)); */}
    top: calc( ${ props => props.top * props.theme.tabletMultiplier } * var(--circle-width));
  }


  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.SR };
    padding-left: ${({ theme }) => theme.spacing.SR };
    padding-right: ${({ theme }) => theme.spacing.SR };
    position: relative;
    top: 0;
    left: 0;
    ${'' /* position: sticky;
    top: 50vh; */}
  }
`