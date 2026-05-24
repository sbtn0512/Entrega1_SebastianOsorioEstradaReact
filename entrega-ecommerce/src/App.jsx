import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"

function App() {


  return (
    <>
      <div className="min-h-screen bg-base-100 text-white">
        <Navbar />
        <main className="space-y-24">
        <Hero />
        {/*<FeaturedSection />
        <TrendingSection /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App