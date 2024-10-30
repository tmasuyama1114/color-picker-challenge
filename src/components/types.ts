export type RGB = {
  r: number
  g: number
  b: number
}

export type ColorFormat = 'hex' | 'rgb'

export type RGBSliderProps = {
  color: keyof RGB
  value: number
  onChange: (value: number) => void
  label: string
}

export type ColorPreviewProps = {
  rgb: RGB
}

export type ColorFormatSelectorProps = {
  format: ColorFormat
  onFormatChange: (format: ColorFormat) => void
}

export type CopyButtonProps = {
  colorCode: string
}
