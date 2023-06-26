import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader/>  
      <div className="page">
        <Suspense fallback="loading">
          { useRoutes(routes) }
        </Suspense>
      </div>
      <AppFooter/>
    </div>
  )
})

export default App