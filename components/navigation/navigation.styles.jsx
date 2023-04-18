import styled from 'styled-components';
import getFontSize from '../../utils/getFontSize';

export const NavigationStyles = styled('nav')`
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.SR } ${({ theme }) => theme.spacing.XLR };;

  .logo {
    user-select: none;
    font-size: 5vw;
    line-height: 1.2;
    margin-right: ${({ theme }) => theme.spacing.LR };

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

`