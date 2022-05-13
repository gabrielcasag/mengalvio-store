import styled, { css } from 'styled-components'

export const Card = styled.a`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.brown};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 448px;
  max-width: 310px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;

  padding: 1rem;

  cursor: pointer;

  transition: all 0.3s ease;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px, rgba(0, 0, 0, 0.18) 0px 3px 6px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px,
      rgba(0, 0, 0, 0.2) 0px 6px 6px;

    .productImage {
      transform: scale(1.12);
    }
  }
`
export const ImageWrapper = styled.div`
  transition: transform 0.3s ease;
  border-radius: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .productImage {
    transition: transform 0.3s;
  }
`
export const ProductInfoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.brown};
  /* background: ${({ theme }) => theme.colors.beige}; */
  padding: 1rem;
  border-radius: 0 0 24px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;

  > h2 {
    font-weight: 500;
  }
`

interface IconWrapperProps {
  isCardHovered: boolean
}

export const IconWrraper = styled.div<IconWrapperProps>`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  background-color: ${({ theme }) => theme.colors.choco};
  color: white;
  padding: 1rem;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateY(300%);
  transition: transform 0.3s;

  ${({ isCardHovered }) =>
    isCardHovered &&
    css`
      transform: translateY(0);
    `}
`
