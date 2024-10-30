import React, { useState } from 'react'
import { Card } from './Card'
import { ColorPreview } from './ColorPreview'
import { RGBSlider } from './RGBSlider'
import { ColorFormatSelector } from './ColorFormatSelector'
import { CopyButton } from './CopyButton'
import type { RGB, ColorFormat } from './types'

export const ColorPicker: React.FC = () => {
  const [rgb, setRgb] = useState<RGB>({ r: 255, g: 0, b: 0 })
  const [format, setFormat] = useState<ColorFormat>('hex')

  const rgbToHex = (r: number, g: number, b: number) => {
    return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')
  }

  const getColorCode = () => {
    return format === 'hex'
      ? rgbToHex(rgb.r, rgb.g, rgb.b)
      : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  }

  const handleRgbChange = (color: keyof RGB, value: number) => {
    setRgb((prev) => ({ ...prev, [color]: value }))
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card>
          <div className="py-12 px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Color Picker
            </h2>

            <ColorPreview rgb={rgb} />

            <div className="space-y-4 mb-6">
              <RGBSlider
                color="r"
                value={rgb.r}
                onChange={(value) => handleRgbChange('r', value)}
                label="Red"
              />
              <RGBSlider
                color="g"
                value={rgb.g}
                onChange={(value) => handleRgbChange('g', value)}
                label="Green"
              />
              <RGBSlider
                color="b"
                value={rgb.b}
                onChange={(value) => handleRgbChange('b', value)}
                label="Blue"
              />
            </div>

            <div className="flex items-center space-x-4">
              <ColorFormatSelector format={format} onFormatChange={setFormat} />
              <CopyButton colorCode={getColorCode()} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
