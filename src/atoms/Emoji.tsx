import React from 'react'

interface Props {
  className?: string
  symbol: string
}

export default function Emoji({ className, symbol }: Props) {
  return (
    <span className={className} role="img">
      {symbol}
    </span>
  )
}
