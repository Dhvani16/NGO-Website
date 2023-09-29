import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import  FundraisingProgressBar  from './components/FundraisingProgressBar'
import { About } from './components/about'
import { Services } from './components/services'
import { Contact } from './components/contact'



import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import GalleryPage from './GalleryPage'




export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  
    
  
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
 

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <h1><center>Fundraising Campaigns</center></h1><br></br>

      <div style={{ marginLeft: '20px' }}>
        <h3>Vaccination Campaign</h3>
      </div>
      <FundraisingProgressBar raisedAmount={8000} goalAmount={10000} />
      <div style={{ marginLeft: '20px' }}>
        <h3>Livestock and Agriculture Campaign</h3>
      </div>
      <FundraisingProgressBar raisedAmount={7500} goalAmount={15000} />
      <div style={{ marginLeft: '20px' }}>
        <h3>Nutrition and Food Security</h3>
      </div>
      <FundraisingProgressBar raisedAmount={3000} goalAmount={8000} />
      <div style={{ marginLeft: '20px' }}>
        <h3>Direct Aid Programs</h3>
      </div>
      <FundraisingProgressBar raisedAmount={2000} goalAmount={5000} />
      <div style={{ marginLeft: '20px' }}>
        <h3>Microenterprise Development</h3>
      </div>
      <FundraisingProgressBar raisedAmount={4000} goalAmount={15000} /><br></br>
      
      <GalleryPage data={landingPageData.GalleryPage} />
      <Contact data={landingPageData.Contact} /> 
    </div>
  
  )
  }

export default App
