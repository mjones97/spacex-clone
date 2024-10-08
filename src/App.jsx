import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header"
import Mission from "./components/Mission"
import Footer from "./components/Footer"
import flight5 from "./assets/Flight_5.jpg"
import hera from "./assets/Hera_pad.jpg"
import crew from "./assets/Crew_9.jpg"
import pdcrew from "./assets/PD_Crew.jpg"
import advancedHuman from "./assets/advancing-human.jpg"
import multiplanetary from "./assets/multiplanetary.jpg"

function App() {
  return (
    <>
      <Header />
      <Mission backgroundImage={flight5} description="Upcoming Launch" title="Starship's Fifth Flight Test" buttonText="Learn more" />
      <Mission backgroundImage={hera} description="Recent Launch" title="Hera Mission" buttonText="Rewatch" />
      <Mission backgroundImage={crew} description="Current Mission" title="Crew-9 Mission" buttonText="Rewatch" />
      <Mission backgroundImage={pdcrew} description="Recent Launch" title="Polaris Dawn" buttonText="Rewatch" />
      <Mission backgroundImage={advancedHuman} title="Advancing Human Spaceflight" buttonText="Learn More" />
      <Mission backgroundImage={multiplanetary} title="To Make Life Multiplanetary" buttonText="Learn More" />
      <Footer />
    </>
  )
}

export default App
