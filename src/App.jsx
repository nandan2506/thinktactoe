import Board from "./components/Board"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Header from "./components/Header"
import About from "./pages/About"


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/play" element={<Board/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  )
}

export default App
