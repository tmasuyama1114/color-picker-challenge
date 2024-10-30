import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { RGBSlider } from './RGBSlider'

describe('RGBSlider', () => {
  it('スライダーの値を変更できること', () => {
    const onChange = vi.fn()
    const { getByLabelText } = render(
      <RGBSlider color="r" value={128} onChange={onChange} label="Red" />
    )

    const slider = getByLabelText(/^Red/) as HTMLInputElement
    fireEvent.change(slider, { target: { value: '200' } })

    expect(onChange).toHaveBeenCalledWith(200)
  })

  it('現在の値が表示されること', () => {
    const { getByText } = render(
      <RGBSlider color="r" value={128} onChange={() => {}} label="Red" />
    )

    expect(getByText('Red (128)')).toBeInTheDocument()
  })
})
