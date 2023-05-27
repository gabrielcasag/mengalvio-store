import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { RiHammerLine, RiShoppingBag2Line, RiUser3Line } from 'react-icons/ri'
import IconButtton from '@/components/IconButton'
import TopNav from '@/layouts/TopNav'

import * as S from './styles'

import logo from '~/logo1.svg'

interface HeaderProps {
  toggleMenu: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      window.scrollY > 40 ? setIsSticky(true) : setIsSticky(false)
    })
  }, [])

  return (
    <S.Header isSticky={isSticky}>
      <TopNav />

      <S.Nav>
        <S.MenuList position="start">
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Produtos</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </S.MenuList>

        <h2 id="logo">
          <Image
            src={logo}
            objectFit="cover"
            alt="Logomarca da Mengalvio Calçados"
          />
        </h2>

        <S.MenuList position="end">
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Produtos</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </S.MenuList>

        <S.MenuMobile>
          <IconButtton icon={<RiHammerLine />} click={() => toggleMenu()} />
          <div>
            <IconButtton icon={<RiUser3Line />} click={() => alert('oi')} />
            <IconButtton
              icon={<RiShoppingBag2Line />}
              click={() => alert('oi')}
            />
          </div>
        </S.MenuMobile>
      </S.Nav>
    </S.Header>
  )
}

export default Header
