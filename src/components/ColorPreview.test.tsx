import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { ColorPreview } from './ColorPreview'

describe('ColorPreview', () => {
  it('指定されたRGB値で背景色が設定されること', () => {
    const rgb = { r: 255, g: 0, b: 0 }
    const { container } = render(<ColorPreview rgb={rgb} />)

    const preview = container.firstChild as HTMLElement
    expect(preview).toHaveStyle({
      backgroundColor: 'rgb(255, 0, 0)',
    })
  })
})
