import { useState } from 'react'

import Header from '@/layouts/Header'
import MenuMobile from '@/layouts/MenuMobile'
import SEO from '@/layouts/SEO'
import Banner from '@/layouts/Banner'

import * as S from '../styles/pages/Home/styles'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false)

  const toggleMenuMobile = () => {
    setIsMenuMobileOpen(prev => !prev)
  }

  return (
    <>
      <SEO title="Home" />

      <Header toggleMenu={toggleMenuMobile} />
      <MenuMobile isOpen={isMenuMobileOpen} toggleMenu={toggleMenuMobile} />

      <main>
        <Banner />

        <S.SectionTitle>Conheça nossos produtos</S.SectionTitle>
        <section
          style={{
            display: 'grid',
            maxWidth: '1216px',
            margin: '0 auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            rowGap: '2rem',
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </main>
    </>
  )
}
