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
      box-shadow: 0px 2px 6px rgba(91, 83, 73, 0.4);
    `}
`

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  max-width: ${props => props.theme.spaces.gridMaxWidth};
  padding: 0 ${props => props.theme.spaces.gridMargin};

  margin: 0 auto;

  #logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -25%);
    width: 132px;

    z-index: 9;
  }
`

interface MenuProps {
  position: 'start' | 'end'
}

export const MenuList = styled.ul<MenuProps>`
  list-style: none;
  display: flex;

  width: 100%;
  gap: 2rem;
  justify-content: ${props => `flex-${props.position}`};

  > li a {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 1.2rem 0;
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
