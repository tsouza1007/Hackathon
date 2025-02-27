// import { Button } from "./components/ui/button"
// import microscopeImage from '@/assets/images/microscope_illustration.png';
import Navbar from "./components/ui/navbar";
import Hero from "./components/ui/hero";

function App() {
  return (
    <main className="mx-20 grid grid-cols-12 gap-10 !min-h-screen">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
