import React from 'react'
import {
  RiInstagramLine,
  RiWhatsappLine,
  RiShoppingBasket2Line,
  RiUser2Fill,
} from 'react-icons/ri'
import IconButtton from '@/components/IconButton'

import * as S from './styles'

const TopNav: React.FC = () => {
  return (
    <S.TopNav aria-label="top navigation bar">
      <div>
        <IconButtton
          icon={<RiWhatsappLine />}
          click={() => console.log('Whatsapp')}
          text="(19)999999999"
          hasDivisor
        />
        <IconButtton
          icon={<RiInstagramLine />}
          click={() => {}}
          text="@aquivaimeuinstag"
        />
      </div>

      <div>
        <IconButtton
          icon={<RiShoppingBasket2Line />}
          click={() => console.log('Whatsapp')}
          hasDivisor
        />
        <IconButtton
          icon={<RiUser2Fill />}
          click={() => console.log('Whatsapp')}
        />
      </div>
    </S.TopNav>
  )
}

export default TopNav
