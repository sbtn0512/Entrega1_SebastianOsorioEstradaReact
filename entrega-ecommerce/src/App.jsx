import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {


  return (
    <>
      <main className="min-h-screen bg-base-100 text-base-content">
         <Navbar />
        {/* <Hero />  */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
            {/* <SideBar /> */}
            <div className="flex flex-col gap-6">
              {/* <QuickFilters />
              <VehicleGrid /> */}
            </div>
          </div>
        </section>
        {/* <CompareBar />*/}
        <Footer />
      </main>
    </>
  )
}

export default App