import styled, { css } from 'styled-components'

interface HeaderProps {
  isSticky: boolean
}

export const Header = styled.header<HeaderProps>`
  width: 100%;
  z-index: 99999;

  transition: all 0.2s ease-in;

  ${props =>
    props.isSticky &&
    css`
      position: sticky;
      top: 0;
      left: 0;
      background-color: ${props.theme.colors.white};
    `}
`

export const Nav = styled.nav`
  padding: 0.25rem 1rem;
  flex: 1;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  #logo {
    /* position: absolute; 
    left: 50%;
    transform: translate(-50%, -20%);
    */
    width: 200px;
    z-index: 9999;
  }
`

interface MenuProps {
  position: 'start' | 'end'
}

export const MenuList = styled.ul<MenuProps>`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  justify-content: ${props => `flex-${props.position}`};

  > li a {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 1rem;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.75);
    }
  }

  @media (max-width: ${props => props.theme.sizes.tablet}) {
    display: none;
  }
`

export const MenuMobile = styled.ul`
  display: none;
  list-style: none;

  @media (max-width: ${props => props.theme.sizes.tablet}) {
    display: flex;
    width: 100%;
    justify-content: space-between;

    > div {
      display: flex;
      column-gap: 1.25rem;
    }
  }
`
