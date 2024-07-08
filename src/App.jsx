import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header"
import Mission from "./components/Mission"
import Footer from "./components/Footer"
import starlink from "./assets/starlink.jpg"
import nrol from "./assets/nrol-186.jpg"
import goes from "./assets/goes-u.jpg"
import advancedHuman from "./assets/advancing-human.jpg"
import multiplanetary from "./assets/multiplanetary.jpg"

function App() {
  return (
    <>
      <Header />
      <Mission backgroundImage={starlink} description="Recent Launch" title="Starlink Mission" buttonText="Rewatch" />
      <Mission backgroundImage={nrol} description="Recent Launch" title="NROL-186 Mission" buttonText="Rewatch" />
      <Mission backgroundImage={goes} description="Recent Launch" title="Goes-U Mission" buttonText="Rewatch" />
      <Mission backgroundImage={advancedHuman} title="Advancing Human Spaceflight" buttonText="Learn More" />
      <Mission backgroundImage={multiplanetary} title="To Make Life Multiplanetary" buttonText="Learn More" />
      <Footer />
    </>
  )
}

export default App
