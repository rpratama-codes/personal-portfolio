import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.sass'
import AnimatedCursor from "react-animated-cursor"

import { RouterProvider } from "react-router-dom";
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatedCursor
        color="0,0,0"
        innerSize={30}
        outerSize={40}
        innerScale={1}
        outerScale={4}
        outerAlpha={1}
        hasBlendMode={true}
        trailingSpeed={1}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#fff',
          mixBlendMode: 'exclusion'
        }}
      />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
