import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import IconButtton from '@/components/IconButton'

import * as S from './styles'

interface MenuMobileProps {
  toggleMenu: () => void
  isOpen: boolean
}

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, toggleMenu }) => {
  return (
    <S.Container isOpen={isOpen}>
      <S.CloseIconContainer>
        <IconButtton
          icon={<RiCloseLine />}
          click={() => toggleMenu()}
          size="2.75rem"
        />
      </S.CloseIconContainer>
    </S.Container>
  )
}

export default MenuMobile
