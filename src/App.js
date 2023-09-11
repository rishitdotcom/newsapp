

import ResponsiveAppBar from "./Component/NavBar";
import MediaCard from "./Component/NewsItem";
import {   Routes , Route  } from "react-router-dom";
import ResponsiveDrawer from "./Component/SideBar";

import ClockBox from "./Component/NavBarTop";


import News from "./Component/News";


function App() {
  return (
    <>
  
    <ClockBox/>
   <ResponsiveAppBar  />  
     <ResponsiveDrawer/>
    <News/>
  
   <Routes>
      <Route path="/business" element={<MediaCard country="in" category="buisness" />} />
      <Route path="/entertainment" element={<MediaCard country="in" category="entertainment" />} />
      <Route path="/" element={<MediaCard country="in" category="general" /> } />
      <Route path="/health" element={<MediaCard country="in" category="health" />} />
      <Route path="/science" element={<MediaCard country="in" category="science" />} />
      <Route path="/sports" element={<MediaCard country="in" category="sports" />} />
      <Route path="/technology" element={<MediaCard country="in" category="technology" />} /> 
         </Routes>

  
   
   
       
    


       

    </>
  );
}

export default App;
