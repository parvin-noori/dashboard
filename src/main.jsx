import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { router } from './router.jsx'
import theme from './theme.js'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={theme} direction="rtl">
     <RouterProvider router={router}/>
    </ConfigProvider>
  </StrictMode>,
)
