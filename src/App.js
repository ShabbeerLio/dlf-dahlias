import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Location from "./Pages/Location/Location";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";

function App() {

  const title = "DLF The Dahlias Golf Course Road: Luxury Living at DLF The Dahlias Golf Course Road"
  const descriptions = "DLF The Dahlias Golf Course Road offers luxury living in a prime location. Experience the best of amenities and a prestigious address at DLF The Dahlias Golf Course Road."

  // remove inspect and copy element
  //  useEffect(() => {
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   document.addEventListener('selectstart', handleSelect);
  //   document.addEventListener('contextmenu', handleRightClick);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleRightClick);
  //     document.removeEventListener('selectstart', handleSelect);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home title={title} descriptions={descriptions} />} />
          <Route
            path="/gallery"
            exact
            element={
              <Gallery title={title} descriptions={descriptions} />} />
          <Route
            path="/price-list"
            exact
            element={
              <PriceList title={title} descriptions={descriptions} />} />
          <Route
            path="/master-plan"
            exact
            element={
              <MasterPlan title={title} descriptions={descriptions} />} />
          <Route
            path="/floor-plan"
            exact
            element={
              <FloorPlan title={title} descriptions={descriptions} />} />
          <Route
            path="/location"
            exact
            element={
              <Location title={title} descriptions={descriptions} />} />
          <Route
            path="/site-visit"
            exact
            element={
              <SiteVisit title={title} descriptions={descriptions} />} />
          <Route
            path="/disclaimer"
            exact
            element={
              <Disclaimer title={title} descriptions={descriptions} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
