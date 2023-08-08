import { Route, Routes, useRoutes  } from 'react-router-dom'
import Login from './components/Login.jsx'
import {navigationroutes }from './routes/Routes'
import './App.css'

function App() {
const route=useRoutes(navigationroutes);

  return route
}

export default App
