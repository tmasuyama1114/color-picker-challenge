import React, { useState } from 'react'
import { Alert } from './Alert'
import type { CopyButtonProps } from './types'

export const CopyButton: React.FC<CopyButtonProps> = ({ colorCode }) => {
  const [showAlert, setShowAlert] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(colorCode)
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 2000)
    } catch (err) {
      console.error('クリップボードへのコピーに失敗しました:', err)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="inline-flex items-center justify-center h-10 w-60 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        <span className="font-bold underline mr-1">{colorCode}</span>をコピー
      </button>

      {showAlert && (
        <div className="absolute top-full mt-2 right-0">
          <Alert className="bg-green-50 border-green-200">
            <p className="text-green-800">コピーしました</p>
          </Alert>
        </div>
      )}
    </div>
  )
}
