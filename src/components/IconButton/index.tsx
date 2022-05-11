import React from 'react'

import * as S from './styles'

interface IconButtonProps {
  icon: React.ReactNode
  click: () => void
  disabled?: boolean
  size?: string
  text?: string
  hasDivisor?: boolean
}

const IconButtton: React.FC<IconButtonProps> = ({
  icon,
  click,
  disabled,
  size,
  text,
  hasDivisor,
}) => {
  return (
    <S.Container hasDivisor={hasDivisor}>
      <S.IconButton onClick={click} disabled={disabled} size={size}>
        {icon}
      </S.IconButton>
      <span>{text}</span>
    </S.Container>
  )
}

export default IconButtton
