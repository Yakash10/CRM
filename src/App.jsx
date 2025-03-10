



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Admin Dashboard Components
import Sidebar from "./Components/AdminDashboard/Sidebar";
import Navbar from "./Components/AdminDashboard/Navbar";
import Card from "./Components/AdminDashboard/Card";
import Chart from "./Components/AdminDashboard/Chart";
import NewProperties from "./Components/AdminDashboard/NewProperties";
import VendorStatus from "./Components/AdminDashboard/VendorStatus";
import NewEnquiries from "./Components/AdminDashboard/NewEnquiries";

// Landing Page Components
import Header from "./Components/HomePage/Header";
import PropertyHighlights from "./Components/HomePage/PropertyHighlights";
import Apartments from "./Components/HomePage/Apartments";
import Whoweare from "./Components/HomePage/Whoweare";
import TopAppartmentProject from "./Components/HomePage/TopAppartmentProject";
import FeatureProperties from "./Components/HomePage/FeatureProperties";
import FloorPlan from "./Components/HomePage/FloorPlan";
import Review from "./Components/HomePage/Review";
import Footer from "./Components/HomePage/Footer";

// Property Inner Page Components
import PropertyNavbar from "./Components/PropertyInnerPage/PropertyNavbar";
import Aboutus from "./Components/PropertyInnerPage/Aboutus";
import KeyAmenities from "./Components/PropertyInnerPage/KeyAmenities";
import Map from "./Components/PropertyInnerPage/Map";
import MoreProperties from "./Components/PropertyInnerPage/MoreProperties";
import PropertyFooter from "./Components/PropertyInnerPage/PropertyFooter";

// Booking Inner Page Components
import BookingNavbar from "./Components/BookingInnerPage/BookingNavbar";
import BookingDetails from "./Components/BookingInnerPage/BookingDetails";
import BookingFooter from "./Components/BookingInnerPage/BookingFooter";

// Admin Dashboard Layout
function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card />
        </div>
        <div className="flex gap-2 mt-4">
          <Chart />
          <NewProperties />
        </div>
        <div className="flex gap-2 mt-4">
          <VendorStatus />
          <NewEnquiries />
        </div>
      </div>
    </div>
  );
}

// Main Landing Page Layout
function LandingPage() {
  return (
    <>
      <Header />
      <PropertyHighlights />
      <Apartments />
      <Whoweare />
      <TopAppartmentProject />
      <FeatureProperties />
      <FloorPlan />
      <Review />
      <Footer />
    </>
  );
}

// Property Inner Page Layout
function PropertyPage() {
  return (
    <>
      <PropertyNavbar />
      <Aboutus/>
      <KeyAmenities />
      <Map />
      <MoreProperties />
      <PropertyFooter />
    </>
  );
}

// Booking Inner Page Layout
function BookingPage() {
  return (
    <>
      <BookingNavbar />
      <BookingDetails />
      <BookingFooter/>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/booking" element={<BookingPage />} />{" "}
        {/* Added route for booking page */}
      </Routes>
    </Router>
  );
}

export default App;
