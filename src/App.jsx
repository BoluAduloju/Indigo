import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Feature from "./components/Feature"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <Hero />
        <Feature />
      </div>
      
    </>
  )
}

export default App
