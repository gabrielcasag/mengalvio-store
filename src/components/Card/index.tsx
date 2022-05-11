import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

import * as S from './styles'

import img from '@/assets/product.png'
import { Product } from '@/types/product'

const Card = () => {
  const product: Product = {
    id: '1234',
    name: 'Product name',
    description: 'Product description',
    images: [
      {
        url: '/assets/drop-shirt-0.png',
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
            className="productImage"
            src={img}
            layout="intrinsic"
            height={256}
            width={256}
          />
        </S.ImageWrapper>

        <S.ProductInfoWrapper>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: product.price.currencyCode,
            }).format(product.price.value)}
          </span>
        </S.ProductInfoWrapper>

        <S.IconWrraper>
          <RiArrowRightLine />
        </S.IconWrraper>
      </S.Card>
    </Link>
  )
}

export default Card
