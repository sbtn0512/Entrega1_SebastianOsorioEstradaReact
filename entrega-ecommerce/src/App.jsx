import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import FeaturedSection from "./components/FeaturedSection/FeaturedSection"
import CategoriesSection from "./components/Categories/CategoriesSection";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ScrollToTop from "./components/Utils/ScrollToTop";
import NotFound from "./components/NotFound/NotFound";

function App() {


  return (
    <>
      <ScrollToTop/>
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
            <Route path='/categories/*' element={ <CategoriesSection/> } />
            <Route path='/items/:id' element={ <ItemDetailContainer/> } />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* <TrendingSection /> */}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App