import '../styles/globals.css'
import { useEffect } from 'react'
import { Router,useRouter } from 'next/router'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: any) {
  

  return (
    <div>
      <Component {...pageProps} />
      <ToastContainer/>
    </div>
  )
}

export default MyApp
