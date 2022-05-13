import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import IconRating from '@/components/IconRating'
import { Product } from '@/types/product'

import * as S from './styles'
import { RiArrowRightLine } from 'react-icons/ri'

const product: Product = {
  id: '1234',
  name: 'Camiseta preta',
  description: 'Camiseta de algodão 100% algodão',
  rating: 3.5,
  images: [
    {
      url: '/assets/product.png',
      altText: 'Shirt',
      width: 1000,
      height: 1000,
    },
  ],
  price: {
    value: 1000.0,
    currencyCode: 'BRL',
  },
  slug: 'product-name',
}

const ProductCard = () => {
  const [isCardHovered, setIsCardHovered] = useState(false)

  return (
    <Link href="#" passHref>
      <S.Card
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
      >
        <S.ImageWrapper id="cardImage">
          <Image
            alt={product.images[0].altText}
            className="productImage"
            src={product.images[0].url}
            layout="intrinsic"
            height={256}
            width={256}
          />
        </S.ImageWrapper>

        <S.ProductInfoWrapper>
          <h1>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: product.price.currencyCode,
            }).format(product.price.value)}
          </h1>
          <h2>{product.name}</h2>
          <IconRating
            precision={0.5}
            actualRate={product.rating}
            iconSize={18}
          />
        </S.ProductInfoWrapper>

        <S.IconWrraper isCardHovered={isCardHovered}>
          <RiArrowRightLine />
        </S.IconWrraper>
      </S.Card>
    </Link>
  )
}

export default ProductCard
