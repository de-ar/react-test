import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FiltersPage from './components/FiltersPage'
import './index.css'
import ThemeProvider from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <FiltersPage /> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
