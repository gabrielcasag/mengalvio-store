import React, { useState, useRef } from 'react'

import { RiStarLine, RiStarFill } from 'react-icons/ri'

interface DivProps {
  [key: string]: any
}

const Rating = ({
  precision = 1,
  totalStars = 5,
  actualRate = 0,
  canRating = false,
  emptyIcon = RiStarLine,
  filledIcon = RiStarFill,
  iconSize = 24,
}) => {
  const rating = actualRate > 0 ? actualRate : -1
  const [activeStar, setActiveStar] = useState(rating)
  const [hoverActiveStar, setHoverActiveStar] = useState(-1)
  const [isHovered, setIsHovered] = useState(false)
  const ratingContainerRef = useRef<HTMLDivElement>(null)

  const calculateRating = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width, left } =
      ratingContainerRef?.current?.getBoundingClientRect() as DOMRect
    let percent = (e.clientX - left) / width
    const numberInStars = percent * totalStars
    const nearestNumber =
      Math.round((numberInStars + precision / 2) / precision) * precision

    return Number(
      nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0)
    )
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false)
    setActiveStar(calculateRating(e))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true)
    setHoverActiveStar(calculateRating(e))
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setHoverActiveStar(-1) // Reset to default state
    setIsHovered(false)
  }
  const EmptyIcon = emptyIcon
  const FilledIcon = filledIcon

  let opts: DivProps = []

  if (canRating) {
    opts['onClick'] = handleClick
    opts['onMouseMove'] = handleMouseMove
    opts['onMouseLeave'] = handleMouseLeave
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        position: 'relative',
        cursor: 'pointer',
        textAlign: 'left',
      }}
      {...opts}
      ref={ratingContainerRef}
    >
      {[...new Array(totalStars)].map((arr, index) => {
        const activeState = isHovered ? hoverActiveStar : activeStar

        const showEmptyIcon = activeState === -1 || activeState < index + 1

        const isActiveRating = activeState !== 1
        const isRatingWithPrecision = activeState % 1 !== 0
        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1
        const showRatingWithPrecision =
          isActiveRating && isRatingWithPrecision && isRatingEqualToIndex

        return (
          <div
            style={{
              position: 'relative',
              cursor: 'pointer',
            }}
            key={index}
          >
            <div
              style={{
                width: showRatingWithPrecision
                  ? `${(activeState % 1) * 100}%`
                  : '0%',
                overflow: 'hidden',
                position: 'absolute',
              }}
            >
              <FilledIcon size={iconSize} />
            </div>
            {/*Note here */}
            <div
              style={{
                color: showEmptyIcon ? '#86776F' : 'inherit',
              }}
            >
              {showEmptyIcon ? (
                <EmptyIcon size={iconSize} />
              ) : (
                <FilledIcon size={iconSize} color="//#endregion251605" />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Rating
