import React from 'react'
import type { RGBSliderProps } from './types'

export const RGBSlider: React.FC<RGBSliderProps> = ({
  value,
  onChange,
  label,
}) => {
  const sliderId = `${label.toLowerCase()}-slider`

  return (
    <div>
      <label
        htmlFor={sliderId}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label} ({value})
      </label>
      <input
        id={sliderId}
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  )
}
