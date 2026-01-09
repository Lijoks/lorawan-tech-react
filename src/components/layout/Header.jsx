import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Exact menu structure from original HTML
  const menuItems = [
    {
      title: "LoRaWAN Core Hardware",
      href: "/lorawan-core-hardware",
      submenu: [
        { title: "LoRaWAN End Devices (Nodes/Sensors)", href: "/lorawan-core-hardware/end-devices-sensors" },
        { title: "LoRa Modules & Chipsets", href: "/lorawan-core-hardware/modules-chipsets" },
        { title: "LoRaWAN Development Boards & Kits", href: "/lorawan-core-hardware/development-boards-kits" },
        { title: "LoRa Antennas & RF Accessories", href: "/lorawan-core-hardware/antennas-rf-accessories" },
        { title: "LoRaWAN Class A/B/C Device Types", href: "/lorawan-core-hardware/class-a-b-c-devices" },
      ]
    },
    {
      title: "LoRaWAN Network Platforms",
      href: "/lorawan-network-platforms",
      submenu: [
        { title: "LoRaWAN Gateways (Indoor/Outdoor)", href: "/lorawan-network-platforms/gateways-indoor-outdoor" },
        { title: "LoRa Network Servers (LNS)", href: "/lorawan-network-platforms/network-servers-lns" },
        { title: "LoRaWAN Join Servers & Application Servers", href: "/lorawan-network-platforms/join-application-servers" },
        { title: "LoRaWAN Cloud & Middleware Platforms", href: "/lorawan-network-platforms/cloud-middleware" },
        { title: "Private LoRaWAN Network Solutions", href: "/lorawan-network-platforms/private-network-solutions" },
      ]
    },
    {
      title: "LoRaWAN Applications",
      href: "/lorawan-applications",
      submenu: [
        { title: "Smart Agriculture", href: "/lorawan-applications/smart-agriculture" },
        { title: "Smart Cities & Infrastructure Monitoring", href: "/lorawan-applications/smart-cities-infrastructure-monitoring" },
        { title: "Smart Utility Metering", href: "/lorawan-applications/smart-utility-metering" },
        { title: "Industrial IoT & Predictive Maintenance", href: "/lorawan-applications/industrial-iot-predictive-maintenance" },
        { title: "Asset & Vehicle Tracking", href: "/lorawan-applications/asset-vehicle-tracking" },
      ]
    },
    {
      title: "About Us",
      href: "/about-us",
      submenu: []
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDesktopDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - matches original */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://lorawantech.com/wp-content/uploads/2025/10/LoRaWANTech-logo.webp"
                alt="LoRaWANTech"
                className="h-10"
              />
            </a>
          </div>

          {/* Desktop Navigation - Exact match to original */}
          <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDesktopDropdown(index)}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                {/* Main menu item with dropdown toggle */}
                <div className="flex items-center">
                  <a 
                    href={item.href}
                    className="flex items-center text-gray-800 hover:text-blue-700 font-medium text-sm uppercase tracking-wide py-2"
                  >
                    {item.title}
                    {item.submenu.length > 0 && (
                      <ChevronDown className="ml-1 w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>
                  
                  {/* Hidden button for accessibility - matches original */}
                  {item.submenu.length > 0 && (
                    <button 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      aria-label={`Expand ${item.title} dropdown`}
                      aria-haspopup="true"
                      aria-expanded={openDesktopDropdown === index}
                      onClick={() => setOpenDesktopDropdown(openDesktopDropdown === index ? null : index)}
                    />
                  )}
                </div>
                
                {/* Dropdown menu - matches original styling */}
                {item.submenu.length > 0 && (
                  <div 
                    className={`absolute left-0 mt-0 w-64 bg-white rounded-md shadow-xl border border-gray-200 transition-all duration-200 origin-top ${
                      openDesktopDropdown === index 
                        ? 'opacity-100 visible scale-100 translate-y-0' 
                        : 'opacity-0 invisible scale-95 -translate-y-2'
                    }`}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                          onClick={() => setOpenDesktopDropdown(null)}
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Contact button - matches original */}
            <a 
              href="/contact-us" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button - matches original */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Exact match to original mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="py-4">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  {/* Mobile menu item with expandable submenu */}
                  <div className="flex items-center justify-between px-4 py-3">
                    <a 
                      href={item.href}
                      className="text-gray-800 font-medium text-sm uppercase"
                      onClick={() => {
                        if (item.submenu.length === 0) {
                          setIsMobileMenuOpen(false);
                        } else {
                          setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);
                        }
                      }}
                    >
                      {item.title}
                    </a>
                    {item.submenu.length > 0 && (
                      <button 
                        className="p-1"
                        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === index ? null : index)}
                        aria-label={`Expand ${item.title} submenu`}
                      >
                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                          openMobileSubmenu === index ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile submenu - matches original */}
                  {item.submenu.length > 0 && openMobileSubmenu === index && (
                    <div className="bg-gray-50 ml-6 border-l-2 border-blue-200">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-6 py-3 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile contact button */}
              <div className="px-4 pt-4">
                <a 
                  href="/contact-us" 
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded text-center text-sm font-medium uppercase tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;