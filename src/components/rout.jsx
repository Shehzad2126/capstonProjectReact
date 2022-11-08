import React from "react";
import Architect from './architectSection';
import DownloadApp from './downloadApp';
import FAQs from './faqs';
import Footer from './footer';
import FrontSection from './frontSection';
import Navbar from './navbar';
import NewsSection from './newsSection';
import Plan from './paymentPlan';
import Services from './services';
import Video from './video';
function Home(){
    return <div>
       <Navbar/>
       <FrontSection/>
       <NewsSection/>
       <Architect/>
       <Services/>
       <Video/>
       <Plan/>
       <FAQs/>
       <DownloadApp/>
       <Footer/>
     </div>

}
export default Home;