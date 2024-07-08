import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'

const styles = {
  global:(props) => ({
    body: {
      bg:mode("#000", "gray.100")(props),
      color:mode("whiteAlpha.900", "gray.800")(props)
    }
  })
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)