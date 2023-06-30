import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
      <header>
        <p>mango@mail.com</p>
          <button>Logout</button>
      </header>

      <main>
        <Suspense fallback={<p>...Loading</p>}>
          <Outlet />
      </Suspense>
      </main>
    </>  
  )
}

export default SharedLayout