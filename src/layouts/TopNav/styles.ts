import styled from 'styled-components'

export const TopNav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.brown};
  box-shadow: 0px 2px 4px rgba(91, 83, 73, 0.4);

  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 0.2rem ${props => props.theme.spaces.gridMargin};

  > div {
    display: flex;
    align-items: center;

    width: 100%;
    column-gap: 1rem;
    max-width: ${props => props.theme.spaces.gridMaxWidth};
    margin: 0 auto;

    &:first-child {
      justify-content: flex-start;
    }

    &:last-child {
      justify-content: flex-end;
    }
  }
`
