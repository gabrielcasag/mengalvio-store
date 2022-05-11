import styled from 'styled-components'

export const Card = styled.a`
  margin: 40px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.brown};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 448px;
  max-width: 310px;
  border-radius: 24px;

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
export const ProductInfoWrapper = styled.div``

export const IconWrraper = styled.div``
