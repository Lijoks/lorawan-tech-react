import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HardwareCatalog from "./pages/HardwareCatalog";
import Infrastructure from "./pages/Infrastructure";
import ContactPage from "./pages/ContactPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Import detailed submenu pages
import LoRaWANCoreHardware from "./pages/LoRaWANCoreHardware";
import LoRaWANNetworkPlatforms from "./pages/LoRaWANNetworkPlatforms";
import LoRaWANApplications from "./pages/LoRaWANApplications";
import AboutUs from "./pages/AboutUs";

// Import specific submenu pages - Core Hardware
import EndDevicesSensors from "./pages/submenu/EndDevicesSensors";
import ModulesChipsets from "./pages/submenu/ModulesChipsets";
import DevelopmentBoardsKits from "./pages/submenu/DevelopmentBoardsKits";
import AntennasRFAccessories from "./pages/submenu/AntennasRFAccessories";
import ClassABCDevices from "./pages/submenu/ClassABCDevices";

// Import specific submenu pages - Network Platforms
import GatewaysIndoorOutdoor from "./pages/submenu/GatewaysIndoorOutdoor";
import NetworkServersLNS from "./pages/submenu/NetworkServersLNS";
import JoinApplicationServers from "./pages/submenu/JoinApplicationServers";
import CloudMiddleware from "./pages/submenu/CloudMiddleware";
import PrivateNetworkSolutions from "./pages/submenu/PrivateNetworkSolutions";

// Import specific submenu pages - Applications
import SmartAgriculture from "./pages/submenu/SmartAgriculture";
import SmartCitiesInfrastructureMonitoring from "./pages/submenu/SmartCitiesInfrastructureMonitoring";
import SmartUtilityMetering from "./pages/submenu/SmartUtilityMetering";
import IndustrialIoTPredictiveMaintenance from "./pages/submenu/IndustrialIoTPredictiveMaintenance";
import AssetVehicleTracking from "./pages/submenu/AssetVehicleTracking";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Homepage />} />
          <Route path="/hardware" element={<HardwareCatalog />} />
          <Route path="/network" element={<Infrastructure />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Main Menu Routes */}
          <Route path="/lorawan-core-hardware" element={<LoRaWANCoreHardware />} />
          <Route path="/lorawan-network-platforms" element={<LoRaWANNetworkPlatforms />} />
          <Route path="/lorawan-applications" element={<LoRaWANApplications />} />
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* Submenu Routes - Core Hardware */}
          <Route path="/lorawan-core-hardware/end-devices-sensors" element={<EndDevicesSensors />} />
          <Route path="/lorawan-core-hardware/modules-chipsets" element={<ModulesChipsets />} />
          <Route path="/lorawan-core-hardware/development-boards-kits" element={<DevelopmentBoardsKits />} />
          <Route path="/lorawan-core-hardware/antennas-rf-accessories" element={<AntennasRFAccessories />} />
          <Route path="/lorawan-core-hardware/class-a-b-c-devices" element={<ClassABCDevices />} />
          
          {/* Submenu Routes - Network Platforms */}
          <Route path="/lorawan-network-platforms/gateways-indoor-outdoor" element={<GatewaysIndoorOutdoor />} />
          <Route path="/lorawan-network-platforms/network-servers-lns" element={<NetworkServersLNS />} />
          <Route path="/lorawan-network-platforms/join-application-servers" element={<JoinApplicationServers />} />
          <Route path="/lorawan-network-platforms/cloud-middleware" element={<CloudMiddleware />} />
          <Route path="/lorawan-network-platforms/private-network-solutions" element={<PrivateNetworkSolutions />} />
          
          {/* Submenu Routes - Applications */}
          <Route path="/lorawan-applications/smart-agriculture" element={<SmartAgriculture />} />
          <Route path="/lorawan-applications/smart-cities-infrastructure-monitoring" element={<SmartCitiesInfrastructureMonitoring />} />
          <Route path="/lorawan-applications/smart-utility-metering" element={<SmartUtilityMetering />} />
          <Route path="/lorawan-applications/industrial-iot-predictive-maintenance" element={<IndustrialIoTPredictiveMaintenance />} />
          <Route path="/lorawan-applications/asset-vehicle-tracking" element={<AssetVehicleTracking />} />
          
          {/* Contact routes */}
          <Route path="/contact-us" element={<ContactPage />} />
          
          {/* 404 Page */}
          <Route path="*" element={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center p-8">
                <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  Go back home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;