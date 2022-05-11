import Image from 'next/image'
import React from 'react'

import * as S from './styles'

import banner from '~/banner-img1.png'

const Banner: React.FC = () => {
  return (
    <S.Container>
      <Image src={banner} objectFit="cover" />
      <Image src={banner} objectFit="cover" />
    </S.Container>
  )
}

export default Banner
