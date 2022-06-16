// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, style, ...props}) => (
  <div
    className={`box ${size ? `box--${size}` : ``}`}
    style={{...style, fontStyle: 'italic'}}
    {...props}
  />
)

const App = () => (
  <div>
    <Box size="small" style={{backgroundColor: 'lightblue'}}>
      small lightblue box
    </Box>
    <Box size="medium" style={{backgroundColor: 'pink'}}>
      medium pink box
    </Box>
    <Box size="large" style={{backgroundColor: 'orange'}}>
      large orange box
    </Box>
  </div>
)

export default App
