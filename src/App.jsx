




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

// User Dashboard Components
import UserNavbar from "./Components/UserDashboard/UserNavbar";
import CardSection from "./Components/UserDashboard/CardSection";
import Bookings from "./Components/UserDashboard/Bookings";
import Enquiries from "./Components/UserDashboard/Enquiries";

// Property Management Dashboard Components
import PropertyManagementNavbar from "./Components/PropertyManagementDashboard/Navbar";
import PropertyCard from "./Components/PropertyManagementDashboard/PropertyCard";
import TotalIncome from "./Components/PropertyManagementDashboard/TotalIncome";
import Expenses from "./Components/PropertyManagementDashboard/Expenses";
import PropertStatus from "./Components/PropertyManagementDashboard/PropertStatus";
import RecentTransaction from "./Components/PropertyManagementDashboard/RecentTransaction"; 

// Builder Inner Page Components
import BuilderNavbar from "./Components/BuilderInnerPage/BuilderNavbar";
import BuilderHighlights from "./Components/BuilderInnerPage/BuilderHighlights";
import BuilderProperty from "./Components/BuilderInnerPage/BuilderProperty";
import BuilderFooter from "./Components/BuilderInnerPage/BuilderFooter";

// client page components
import ClientNavbar from "./Components/ClientBookingPage/ClientNavbar";
// import ClientHighlights from "./Components/ClientBookingPage/ClientHighlights";
import MainContent from "./Components/ClientBookingPage/MainContent";
import ClientFooter from "./Components/ClientBookingPage/ClientFooter";




// Admin Dashboard Layout
function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <Card className="flex flex-col md:flex-col gap-2 lg:flex-row" />
        <div className="flex flex-col md:flex-col lg:flex-row gap-2 mt-4">
          <Chart />
            <NewProperties />
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-2 mt-4">
          <VendorStatus />
          <NewEnquiries />
        </div>
      </div>
    </div>
  );
}





// Builder Inner Page Layout
function BuilderInnerPage() {
  return (
    <>
      <BuilderNavbar />
      <BuilderHighlights />
      <BuilderProperty />
      <BuilderFooter/>
    </>
  );
}


// client booking Layout
function ClientBookingPage() { 
  return (
    <div className="h-screen overflow-auto scrollbar-hide bg-gray-100">
      <ClientNavbar />
      {/* <ClientHighlights /> */}
      <MainContent />
      <ClientFooter/>
    </div>
  );
}



// User Dashboard Layout
function UserDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <UserNavbar />
        <CardSection />
        <div className="flex flex-col md:flex-col lg:flex-row gap-4 mt-4 h-full">
          <div className="w-full md:w-full  h-full">
            <Bookings />
          </div>
          <div className="w-full md:w-1/3 h-full">
            <Enquiries />
          </div>
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
      <Aboutus />
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
      <BookingFooter />
    </>
  );
}

// Property Management Dashboard
function PropertyManagementDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <PropertyManagementNavbar />
        <PropertyCard />
        <div className="flex flex-col md:flex-col gap-2 lg:flex-row">
          <TotalIncome />
          <Expenses className=" w-full md:w-full" />
          <PropertStatus />
        </div>
        <RecentTransaction />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/builder" element={<BuilderInnerPage />} />
        <Route path="/clientbooking" element={<ClientBookingPage />} />

        <Route
          path="/propertymanagement"
          element={<PropertyManagementDashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;


