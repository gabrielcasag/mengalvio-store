import styled, { css } from 'styled-components'

interface ContainerProps {
  hasDivisor?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  align-items: center;

  span {
    display: flex;
    margin-left: 12px;
    cursor: text;
    height: 100%;
    font-weight: 500;
  }

  ${({ hasDivisor }) =>
    hasDivisor &&
    css`
      span::after {
        content: '';
        margin-left: 20px;
        display: inline-flex;
        align-items: flex-end;
        border-right: 1px solid black;
        background: ${({ theme }) => theme.colors.brown};
      }
    `}
`

interface IconButtonProps {
  size?: string
}

export const IconButton = styled.button<IconButtonProps>`
  background-color: transparent;
  border: none;
  font-size: 0;

  transition: filter 0.2s;

  > svg {
    font-size: ${({ size }) => size || '1.6rem'};
  }

  &:hover {
    filter: opacity(0.7);
  }
`
