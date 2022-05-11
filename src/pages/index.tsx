import { useState } from 'react'

import Header from '@/layouts/Header'
import MenuMobile from '@/layouts/MenuMobile'
import SEO from '@/layouts/SEO'
import Banner from '@/layouts/Banner'

import * as S from '../styles/pages/Home/styles'
import Card from '@/components/Card'

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

        <section>
          <S.SectionTitle>Conheça nossos produtos</S.SectionTitle>
          <Card />
        </section>
      </main>
    </>
  )
}
