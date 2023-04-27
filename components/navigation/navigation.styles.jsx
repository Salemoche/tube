import styled, { css } from 'styled-components';
import getFontSize from '../../utils/getFontSize';

export const NavigationStyles = styled('nav')`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.SR } ${({ theme }) => theme.spacing.XLR };

  /* ${ props => ( props.menuOpen && props.mode == 'mobile' && css`
    background: green;
    position: absolute;
    left: ${({ theme }) => theme.spacing.SR };
    top: ${({ theme }) => theme.spacing.SR };
    z-index: 1;
  `)} */

  .logo {
    user-select: none;
    font-size: 3.5vw;
    line-height: 1.2;
    width: calc(5 * var(--circle-width));
    pointer-events: all;

    &.mobile {
      display: inline-block;
      position: absolute;
      right: ${({ theme }) => theme.spacing.SR };
      top: ${({ theme }) => theme.spacing.SR };
      z-index: 100;
      width: unset;
      ${ props => getFontSize('S', props) };
    }


    /* Mobile Menu Open */

    ${ props => ( props.menuOpen && props.mode == 'mobile' && css`
    `)}
  }

  .menu {
    display: flex;  
    list-style-type: none;
    align-items: center;
    pointer-events: all;

    .menu-item {
      margin-right: ${({ theme }) => theme.spacing.LR };
      font-size: 2vw;

      &:last-of-type {
        margin-right: 0;
      }

      a { 
        color: ${({ theme }) => theme.colors.gray };
        transition: color ${props => props.theme.transitions.default};
        &:hover {
          color: black;
        }
      }

      &.menu-item-current {
        a { 
          color: black;
        }
      }

      ${ props => ( props.menuOpen && props.mode == 'mobile' && css`
      `)}
    }
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.M - 1 }px) {
    ${'' /* padding: ${({ theme }) => theme.spacing.SR } ${({ theme }) => theme.spacing.SR }; */}
    padding: 0;
    overflow: hidden;
    pointer-events: none;
    min-height: 60px;

    .menu {
      width: 100vw;
      height: 100vh;
      padding: ${({ theme }) => theme.spacing.SR };
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      max-height: 0;
      padding: 0;
      transition: ${ props => props.theme.transitions.default };
      background: white;
      pointer-events: none;
      ${'' /* transform: rotateY(90deg); */}
      

      .circle {
        border: 0.5px solid white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: ${ props => props.theme.transitions.default };
        width: calc( 100% - var(--circle-width));
        aspect-ratio: 1 / 1;
        border-radius: 50%;
      }

      ${ props => ( props.menuOpen && props.mode == 'mobile' && css`
        max-height: 100vh;
        pointer-events: all;
        ${'' /* transform: none; */}

        .circle {
          border: 0.5px solid black;
        }
      `)}

      .menu-item {
        text-align: center;
        margin: 0;
        font-size: 3vh;
        z-index: 1;
      }
    }
  }

`