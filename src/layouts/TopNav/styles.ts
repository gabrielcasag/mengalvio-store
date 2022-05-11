import styled from 'styled-components'

export const TopNav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.brown};
  box-shadow: 0px 2px 4px rgba(91, 83, 73, 0.4);

  display: grid;
  grid-template-columns: 1fr 1fr;

  > div {
    align-items: center;
    display: flex;
    width: 100%;
    padding: 0.25rem 2rem;
    column-gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;

    &:first-child {
      justify-content: flex-start;
    }

    &:last-child {
      justify-content: flex-end;
    }
  }
`
