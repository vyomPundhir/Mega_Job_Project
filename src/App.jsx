import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import {Footer, Header} from "./components"
import {Outlet} from "react-router-dom"

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  // Above is the process to access environment variables using create-react-app. https://create-react-app.dev/docs/adding-custom-environment-variables 
  
  // Here, we are using vite so the process will be completely different. 
  // https://vitejs.dev/guide/env-and-mode.html


  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO:{/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null}

export default App
