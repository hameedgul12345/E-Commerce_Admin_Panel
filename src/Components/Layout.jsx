import React from 'react'

function Layout() {
  return (
    <div className='w-full h-screensss '>
     <aside className='fixed top-0 left-0 bg-blue-600 h-screen' style={{width:'15%'}}>aside</aside>
      <section className='h-full' style={{width:'85%',marginLeft:'15%'}}>
        <nav className='rounded-xl p-4 flex justify-between item-center'>
            <div className='flex gap-2'>
            <h1 >icon</h1>
            <h1>Brand</h1>
            </div>
            <div>
                <h1>Profile</h1>
            </div>
        </nav>
      </section>
    </div>
  )
}

export default Layout