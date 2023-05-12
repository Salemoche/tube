import styled from 'styled-components';
import { ColumnContentComponent } from '../../styles/global.components';
import getFontSize from '../../utils/getFontSize';

export const ContactContentStyles = styled(ColumnContentComponent)`
  display: flex;

  .newsletter-column {

    .newsletter-form {

      * {
        ${ props => getFontSize( 'M', props )};
      }

      .newsletter-intro {
        margin-bottom: ${({ theme }) => theme.spacing.LR};
      }

      .newsletter-input {
        width: 100%;
        margin-bottom: ${({ theme }) => theme.spacing.LR };
        background: none;
      }
    }
  }
`
export default ContactContentStyles