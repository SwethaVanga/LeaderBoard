import React from 'react'
import elena from '../assets/images/elena.svg'
import grace from '../assets/images/grace.svg'
import fred from '../assets/images/fred.svg'
import alice from '../assets/images/alice.svg'
import dom from '../assets/images/dom.svg'
import harriet from '../assets/images/harriet.svg'
import bob from '../assets/images/bob.svg'
import chris from '../assets/images/chris.svg'

export const getUserAvatar = (name) => {
  switch (name) {
  case 'elena':
    return <img src={elena} alt={name} />
  case 'grace':
    return <img src={grace} alt={name} />
  case 'fred':
    return <img src={fred} alt={name} />
  case 'alice':
    return <img src={alice} alt={name} />
  case 'dom':
    return <img src={dom} alt={name} />
  case 'harriet':
    return <img src={harriet} alt={name} />
  case 'bob':
    return <img src={bob} alt={name} />
  case 'chris':
    return <img src={chris} alt={name} />
  default:
    return <img src={chris} alt={name} />
  }
}

export function checkPlayers(array) {
  if (array.length > 0) {
    return array
      .map((item) => {
        if (!item.score) {
          return { ...item, score: 0 }
        } else {
          return item
        }
      })
      .sort((a, b) => b.score - a.score)
  }
}
