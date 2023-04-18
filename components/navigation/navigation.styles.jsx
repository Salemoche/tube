import styled from 'styled-components';
import getFontSize from '../../utils/getFontSize';

export const NavigationStyles = styled('nav')`
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.SR } ${({ theme }) => theme.spacing.XLR };

  .logo {
    user-select: none;
    font-size: 3.5vw;
    line-height: 1.2;
    width: calc(5 * var(--circle-width));

    /* transition: color ${props => props.theme.transitions.default};
    &:hover {
      color: black;
    } */
  }

  .menu {
    display: flex;  
    list-style-type: none;
    align-items: center;

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
    }
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.M - 1 }px) {
    padding: ${({ theme }) => theme.spacing.SR } ${({ theme }) => theme.spacing.SR };
  }

`