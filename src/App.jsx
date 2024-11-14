import './App.css'
import { Route, Routes } from 'react-router-dom'
import Solution from './Solution'
import Footer from './Footer'
import Advice from './Advice'
import Post from './Post'
import Home from './Home'
import Header from './Header'
function App() {

  return (
    <>
   
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/advice' element={<Advice/>}/>
        <Route path='/solution' element={<Solution/>}/>
        <Route path='/post' element={<Post/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App



//1. rasam ga joylash contrysayd
//2.donat znka, svetofor, cameras,
//3/4. reason
