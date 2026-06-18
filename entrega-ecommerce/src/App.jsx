import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import FeaturedSection from "./components/FeaturedSection/FeaturedSection"

function App() {


  return (
    <>
      <div className="min-h-screen bg-base-100 text-white">
        <Navbar />
        <main className="space-y-24">
          <Routes>
            <Route path='/' element={
              <>
                <Hero />
                <FeaturedSection />
              </>
            } />
          </Routes>

          {/* <TrendingSection /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App