import '../styles/globals.css'
import '../styles/index.scss'
function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    
  </div> 
  
}

export default MyApp
