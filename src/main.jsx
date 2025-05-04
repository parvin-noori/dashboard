import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ConfigProvider } from 'antd'
import theme from './theme.js'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={theme} direction="rtl">
     <RouterProvider router={router}/>
    </ConfigProvider>
  </StrictMode>,
)
