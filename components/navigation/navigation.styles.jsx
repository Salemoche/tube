import styled from 'styled-components';

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
    font-size: 72px;
    margin-right: ${({ theme }) => theme.spacing.LR };
  }

  .menu {
    display: flex;  
    list-style-type: none;
    align-items: center;

    .menu-item {
      margin-right: ${({ theme }) => theme.spacing.LR };

      a { 
        color: ${({ theme }) => theme.colors.gray };
        transition: ${props => props.theme.transitions.default};
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