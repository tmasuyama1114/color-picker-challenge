import React from 'react'
import { ColorPicker } from './components/ColorPicker'

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <ColorPicker />
    </div>
  )
}

export default App
