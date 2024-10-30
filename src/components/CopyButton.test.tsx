import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { CopyButton } from './CopyButton'

describe('CopyButton', () => {
  beforeEach(() => {
    const mockClipboard = {
      writeText: vi.fn().mockImplementation(() => Promise.resolve()),
    }
    Object.assign(navigator, { clipboard: mockClipboard })
  })

  it('クリップボードにコピーされ、アラートが表示されること', async () => {
    const { getByText, queryByText } = render(
      <CopyButton colorCode="#ff0000" />
    )

    await fireEvent.click(getByText(/#ff0000をコピー/))

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('#ff0000')

    await waitFor(() => {
      expect(getByText('コピーしました')).toBeInTheDocument()
    })

    await waitFor(
      () => {
        expect(queryByText('コピーしました')).not.toBeInTheDocument()
      },
      { timeout: 2500 }
    )
  })

  it('クリップボードへのコピーが失敗した場合にエラーがコンソールに出力されること', async () => {
    // クリップボードAPIのモックを失敗するように設定
    const mockClipboard = {
      writeText: vi
        .fn()
        .mockImplementation(() => Promise.reject(new Error('Clipboard error'))),
    }
    Object.assign(navigator, { clipboard: mockClipboard })

    // コンソールエラーのモック
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const { getByText } = render(<CopyButton colorCode="#ff0000" />)

    // コピーボタンをクリック
    fireEvent.click(getByText(/#ff0000をコピー/))

    // エラーがコンソールに出力されることを確認
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled()
    })

    consoleSpy.mockRestore()
  })
})
