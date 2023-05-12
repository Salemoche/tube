import styled, { css } from 'styled-components';
import getFontSize from '../../utils/getFontSize';

export const NavigationStyles = styled('nav')`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: flex-end;
  z-index: 100;
  padding: 0 ${({ theme }) => theme.spacing.XLR };
  height: calc(var(--circle-width));

  /* ${ props => ( props.menuOpen && props.mode == 'mobile' && css`
    background: green;
    position: absolute;
    left: ${({ theme }) => theme.spacing.SR };
    top: ${({ theme }) => theme.spacing.SR };
    z-index: 1;
  `)} */

  .logo {
    user-select: none;
    font-size: 3vw;
    line-height: var(--circle-width);
    width: calc(6 * var(--circle-width));
    pointer-events: all;
    height: var(--circle-width);
    transform: translateY(22%) translateX(-1%);
  }

  .logo-mobile {
    height: var(--circle-width);
    width: var(--circle-width);
    display: inline-block;
    position: absolute;
    right: ${({ theme }) => theme.spacing.SR };
    top: ${({ theme }) => theme.spacing.SR };
    right: 0;
    top: 0;
    z-index: 100;
    ${ props => getFontSize('S', props) };
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: all;

    img {
      width: 70%;
      height: 70%;
      transform: translateY(10%);
    }
  }


    /* Mobile Menu Open */

    ${ props => ( props.menuOpen && props.mode == 'mobile' && css`
    `)}
  }

  .menu {
    transform: translateY(22%);

    ul {
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
          ${'' /* color: ${({ theme }) => theme.colors.gray }; */}
          color: inherit;
          transition: color ${props => props.theme.transitions.default};
          &:hover {
            color: var(--random-color);
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
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.S }px) {
    ${'' /* padding: ${({ theme }) => theme.spacing.SR } ${({ theme }) => theme.spacing.SR }; */}
    padding: 0;
    overflow: hidden;
    pointer-events: none;
    height: 100vh;
    align-items: flex-start;

    .menu {
      width: 100vw;
      height: 100vh;
      padding: ${({ theme }) => theme.spacing.SR };
      overflow: hidden;
      max-height: 0;
      padding: 0;
      transition: ${ props => props.theme.transitions.default };
      background: white;
      pointer-events: none;
      transform: none;
      display: grid;
      grid-template-rows: 1fr auto;
      opacity: 0;
      ${'' /* transform: rotateY(90deg); */}

      ${ props => ( props.menuOpen && props.mode == 'mobile' && css`
        max-height: 100vh;
        pointer-events: all;
        opacity: 1;
        ${'' /* transform: none; */}

      `)}

      ul {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        .circle {
          border: 0.5px solid black;
        }

        .menu-item {
          text-align: center;
          margin: 0;
          font-size: 3vh;
          z-index: 1;
        }
      }
      

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

      .menu-footer {
        margin-top: auto;
        padding: ${({ theme }) => theme.spacing.SR };
        text-align: center;
      }
    }
  }

`