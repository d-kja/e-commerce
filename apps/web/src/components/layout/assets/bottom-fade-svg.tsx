import { FC } from 'react'

export const BottomFadeSvg: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1004"
      height="292"
      fill="none"
      viewBox="0 0 1004 292"
      className="absolute bottom-0 inset-x-0 pointer-events-none"
    >
      <path fill="url(#paint0_linear_465_814)" d="M0 0H1004V360H0z"></path>
      <defs>
        <linearGradient
          id="paint0_linear_465_814"
          x1="502"
          x2="502"
          y1="0"
          y2="360"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#fff"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
