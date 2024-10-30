import React from 'react'
import type { ColorFormatSelectorProps } from './types'

export const ColorFormatSelector: React.FC<ColorFormatSelectorProps> = ({
  format,
  onFormatChange,
}) => (
  <div className="flex items-center gap-4">
    <button
      onClick={() => onFormatChange('hex')}
      className={`px-3 py-1 rounded-md ${
        format === 'hex'
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-700'
      }`}
    >
      HEX
    </button>
    <button
      onClick={() => onFormatChange('rgb')}
      className={`px-3 py-1 rounded-md ${
        format === 'rgb'
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-700'
      }`}
    >
      RGB
    </button>
  </div>
)
