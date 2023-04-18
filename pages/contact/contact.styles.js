import styled from 'styled-components';
import { ContentStyles } from '../../styles/global.components';
import getFontSize from '../../utils/getFontSize';

export const ContactContentStyles = styled(ContentStyles)`
  display: flex;

  .address-column {
    width: 37.5%;
  }

  .newsletter-column {
    width: 62.5%;

    .newsletter-form {

      * {
        ${ props => getFontSize( 'M', props )};
      }

      .newsletter-intro {
        margin-bottom: ${({ theme }) => theme.spacing.L };
      }

      .newsletter-input {
        width: 100%;
        margin-bottom: ${({ theme }) => theme.spacing.L };
        background: none;
      }
    }
  }
`