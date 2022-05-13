import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import * as S from './styles'

import img from '@/assets/product.png'
import { Product } from '@/types/product'
import Rating from '../Rating'

const Card = () => {
  const product: Product = {
    id: '1234',
    name: 'Product name',
    description: 'Product description',
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

  return (
    <Link href="#" passHref>
      <S.Card>
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
          <Rating precision={0.5} actualRate={product.rating} />
          <h1>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: product.price.currencyCode,
            }).format(product.price.value)}
          </h1>
          <h2>{product.name}</h2>
        </S.ProductInfoWrapper>

        {/* <S.IconWrraper>
          <RiArrowRightLine />
        </S.IconWrraper> */}
      </S.Card>
    </Link>
  )
}

export default Card
