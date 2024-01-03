import React from 'react'
import './App.css';
import Card from './components/Card';
function App() {
  

  return (
    <main className='min-h-screen grid place-items-center bg-bg-main p-[2rem]'>
      <div aria-hidden className='w-full fixed top-0 bg-main-mobile sm:bg-main-desk h-[20rem] max-h-[50vh] z-0'>
      </div>
      <Card />
    </main>
  )
}

export default App
