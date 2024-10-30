import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { ColorFormatSelector } from './ColorFormatSelector'

describe('ColorFormatSelector', () => {
  it('フォーマットを切り替えられること', () => {
    const onFormatChange = vi.fn()
    const { getByText } = render(
      <ColorFormatSelector format="hex" onFormatChange={onFormatChange} />
    )

    fireEvent.click(getByText('RGB'))
    expect(onFormatChange).toHaveBeenCalledWith('rgb')
  })

  it('現在のフォーマットが強調表示されること', () => {
    const { getByText } = render(
      <ColorFormatSelector format="hex" onFormatChange={() => {}} />
    )

    const hexButton = getByText('HEX')
    expect(hexButton).toHaveClass('bg-blue-600', 'text-white')
  })
})
