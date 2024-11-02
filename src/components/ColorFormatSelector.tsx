import React from 'react'
import type { ColorFormatSelectorProps } from './types'

export const ColorFormatSelector: React.FC<ColorFormatSelectorProps> = ({
  format,
  onFormatChange,
}) => (
  <div className="flex items-center gap-4">
    <button
      onClick={() => onFormatChange('hex')}
      className={`h-10 px-3 py-1 rounded-md ${
        format === 'hex'
          ? 'bg-gray-600 text-white'
          : 'bg-gray-200 text-gray-700'
      }`}
    >
      HEX
    </button>
    <button
      onClick={() => onFormatChange('rgb')}
      className={`h-10 px-3 py-1 rounded-md ${
        format === 'rgb'
          ? 'bg-gray-600 text-white'
          : 'bg-gray-200 text-gray-700'
      }`}
    >
      RGB
    </button>
  </div>
)
