import styled, { css } from 'styled-components';

export const ContentStyles = styled('div')`
  margin-top: 256px;

  padding: 0 var(--circle-width);
`

export const ColumnContentComponent = styled(ContentStyles)`
  
  display: flex;

  .column-1 {
    width: 37.5%;
  }

  .column-2 {
    width: 62.5%;
  }
`