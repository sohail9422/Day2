import React from 'react'
import Navbar from './Components/Navbar'
import MyData from './Components/MyData'

const App = () => {
  return (
    <div>
      <h1>This the Main Component</h1>
      <Navbar />
      <MyData name ="Sohail" age="18" />
      <MyData name ="Chacah" age ="50" />
    </div>
  )
}

export default App