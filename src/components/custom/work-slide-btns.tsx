'use client'
import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
type WorkSlideBtnProps = {
  containerStyles: string
  btnStyles: string
  iconStyles: string
}
export default function WorkSlideBtns({ containerStyles, btnStyles, iconStyles }: WorkSlideBtnProps) {
  const swiper = useSwiper()
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={event => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles}></PiCaretLeftBold>
      </button>
      <button className={btnStyles} onClick={event => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles}></PiCaretRightBold>
      </button>
    </div>
  )
}
