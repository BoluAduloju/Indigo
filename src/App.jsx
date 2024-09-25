import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import Workflow from "./components/Workflow"
import Pricing from "./components/Pricing"
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <Hero />
        <Feature />
        <Workflow />
        <Pricing />
        <Testimonial />
      </div>
      
    </>
  )
}

export default App
