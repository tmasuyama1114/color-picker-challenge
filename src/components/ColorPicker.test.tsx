import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColorPicker } from './ColorPicker'

describe('ColorPicker', () => {
  it('すべてのコンポーネントが正しくレンダリングされること', () => {
    render(<ColorPicker />)

    expect(screen.getByText('Color Picker')).toBeInTheDocument()
    expect(screen.getByLabelText(/^Red/)).toBeInTheDocument()
    expect(screen.getByLabelText(/^Green/)).toBeInTheDocument()
    expect(screen.getByLabelText(/^Blue/)).toBeInTheDocument()
    expect(screen.getByText('HEX')).toBeInTheDocument()
    expect(screen.getByText('RGB')).toBeInTheDocument()
  })
})
