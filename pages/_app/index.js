import '../styles/globals.css'

const context = { message: "hello world" }

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} context={context} />
  )
}

export default MyApp
