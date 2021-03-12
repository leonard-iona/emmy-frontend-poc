import styled from '@emotion/styled'

import { breakpoints as bp } from 'lib/utils/layout'

export default styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: ${bp.mobileMax}) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}
`
