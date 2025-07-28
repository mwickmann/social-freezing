import { ImageResponse } from 'next/og'

export const size = {
  width: 48,
  height: 48,
}
export const contentType = 'image/png'

export default async function Icon() {
  return new ImageResponse(
    (
      <img
        src="https://social-freezing.vercel.app/icon.png"
        width={48}
        height={48}
        alt="Favicon"
      />
    ),
    {
      ...size,
    }
  )
}
