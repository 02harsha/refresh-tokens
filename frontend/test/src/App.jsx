

import './App.css'

import {Routes,Route} from 'react-router-dom'
import Protected from './protected'
import Login from './Login'
function App() {
  
    return(<Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Protected/>}/>
    </Routes>)
    
    
  
}

export default App
