import styled from 'styled-components'

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  /* top: 0; */
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.beige};
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  z-index: 99;
  opacity: ${({ isOpen: isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen: isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 3rem;
  left: 1.5rem;
`
