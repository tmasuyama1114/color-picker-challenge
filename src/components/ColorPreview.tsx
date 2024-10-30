import React from 'react'
import type { ColorPreviewProps } from './types'

export const ColorPreview: React.FC<ColorPreviewProps> = ({ rgb }) => (
  <div
    className="w-full h-32 rounded-lg mb-6"
    style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
  />
)
