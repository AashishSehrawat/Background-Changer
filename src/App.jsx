import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#414141")

  function bgChange(col){
    document.body.className = '';
    document.body.classList.add(col);
  }

  return (
    <>
      <div className='container bg-white p-4 rounded-xl flex flex-wrap justify-center gap-2'>
        <button onClick={() => bgChange('bg-red-600')} className='bg-red-600'>Red</button>
        <button onClick={() => bgChange('bg-green-500')} className='bg-green-500'>Green</button>
        <button onClick={() => bgChange('bg-blue-600')} className='bg-blue-600'>Blue</button>
        <button onClick={() => bgChange('bg-lime-400')} className='bg-lime-400'>Olive</button>
        <button onClick={() => bgChange('bg-gray-600')} className='bg-gray-600'>Gray</button>
        <button onClick={() => bgChange('bg-yellow-400')} className='bg-yellow-400'>Yellow</button>
        <button onClick={() => bgChange('bg-pink-500')} className='bg-pink-500'>Pink</button>
        <button onClick={() => bgChange('bg-purple-600')} className='bg-purple-600'>Purple</button>
        <button onClick={() => bgChange('bg-slate-300')} className='bg-slate-300'>Lanvender</button>
        <button onClick={() => bgChange('bg-white')} className='bg-slate-200'>White</button>
        <button onClick={() => bgChange('bg-black')} className='bg-black'>Black</button>
      </div>
    </>
  )
}

export default App
