import '../styles/index.css'

function App({ Component, pageProps }) {
  return (
    <div className="bg-white min-h-screen">
      <div className="min-container container max-w-lg mx-auto bg-black opacity-75 relative overflow-hidden">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App
