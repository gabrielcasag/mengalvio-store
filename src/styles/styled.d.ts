import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      beige: string
      brown: string
      choco: string
      lightBrown: string
      black: string
      silver: string
    }
    sizes: {
      mobileS: string
      mobile: string
      tabletS: string
      tablet: string
      desktop: string
    }
    spaces: {
      gridMargin: string
      gridMaxWidth: string
    }
  }
}
