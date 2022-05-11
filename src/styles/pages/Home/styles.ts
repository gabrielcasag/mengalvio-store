import styled from 'styled-components'

export const SectionTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  font-weight: 600;

  &::after {
    content: '';

    width: 100px;
    height: 1px;
    margin-top: 12px;
    background-color: ${({ theme }) => theme.colors.brown};
  }
`
