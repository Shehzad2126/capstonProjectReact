import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Architect from './components/architectSection';
import DownloadApp from './components/downloadApp';
import FAQs from './components/faqs';
import Footer from './components/footer';
import FrontSection from './components/frontSection';
import Navbar from './components/navbar';
import NewsSection from './components/newsSection';
import Plan from './components/paymentPlan';
import Services from './components/services';
import Video from './components/video';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route path="/home" element={<FrontSection />}/>
        <Route path="/news" element={<NewsSection />}/>
        <Route path="/architect" element={<Architect />}/>
        <Route path="/ser" element={<Services />}/>
        <Route path="/video" element={<Video />}/>
        <Route path="/plan" element={<Plan />}/>
        <Route path="/faqs" element={<FAQs />}/>
        <Route path="/app" element={<DownloadApp />}/>
        <Route path="/footer" element={<Footer />}/>
      </Routes> 
     </BrowserRouter>
    // <div>
    //   <Navbar/>
    //   <FrontSection/>
    //   <NewsSection/>
    //   <Architect/>
    //   <Services/>
    //   <Video/>
    //   <Plan/>
    //   <FAQs/>
    //   <DownloadApp/>
    //   <Footer/>
    // </div>
  );
}

export default App;
