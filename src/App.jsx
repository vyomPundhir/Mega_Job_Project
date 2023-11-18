
import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  // Above is the process to access environment variables using create-react-app. https://create-react-app.dev/docs/adding-custom-environment-variables 
  
  // Here, we are using vite so the process will be completely different. 
  // https://vitejs.dev/guide/env-and-mode.html

  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <h1>A blog App with Appwrite.</h1>
    </>
  )
}

export default App
