import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">LoRaWANTech</h3>
            <p className="text-gray-400 mb-6">
              LoRaWAN Technology is revolutionizing how industries manage operations—offering long-range, 
              low-power communication networks that drive automation, enable remote monitoring, 
              and reduce infrastructure complexity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hardware */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">LoRaWANTech Hardware</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/lorawan-core-hardware/end-devices-sensors" className="hover:text-white">LoRaWAN End Devices</a></li>
              <li><a href="/lorawan-core-hardware/modules-chipsets" className="hover:text-white">LoRa Modules & Chipsets</a></li>
              <li><a href="/lorawan-core-hardware/development-boards-kits" className="hover:text-white">LoRaWAN Development Kits</a></li>
              <li><a href="/lorawan-core-hardware/antennas-rf-accessories" className="hover:text-white">LoRa Antennas</a></li>
              <li><a href="/lorawan-core-hardware/class-a-b-c-devices" className="hover:text-white">LoRaWAN Class A/B/C</a></li>
            </ul>
          </div>

          {/* Network */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">LoRaWANTech Network</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/lorawan-network-platforms/gateways-indoor-outdoor" className="hover:text-white">LoRaWAN Gateways</a></li>
              <li><a href="/lorawan-network-platforms/network-servers-lns" className="hover:text-white">LoRa Network Servers</a></li>
              <li><a href="/lorawan-network-platforms/join-application-servers" className="hover:text-white">LoRaWAN Join Servers</a></li>
              <li><a href="/lorawan-network-platforms/cloud-middleware" className="hover:text-white">LoRaWAN Cloud Platforms</a></li>
              <li><a href="/lorawan-network-platforms/private-network-solutions" className="hover:text-white">Private LoRaWAN Network</a></li>
            </ul>
          </div>

          {/* Applications & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">LoRaWANTech Application</h4>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li><a href="/lorawan-applications/smart-agriculture" className="hover:text-white">Smart Agriculture</a></li>
              <li><a href="/lorawan-applications/smart-cities-infrastructure-monitoring" className="hover:text-white">Smart Cities</a></li>
              <li><a href="/lorawan-applications/smart-utility-metering" className="hover:text-white">Smart Utility</a></li>
              <li><a href="/lorawan-applications/industrial-iot-predictive-maintenance" className="hover:text-white">Industrial IoT</a></li>
              <li><a href="/lorawan-applications/asset-vehicle-tracking" className="hover:text-white">Asset Tracking</a></li>
            </ul>

            <h4 className="font-semibold text-lg mb-4 text-blue-400">Location</h4>
            <div className="flex items-start mb-3">
              <MapPin className="w-5 h-5 mr-3 mt-1 text-gray-400" />
              <span className="text-gray-400">607 Shelby St Ste 700, Detroit, MI 48226</span>
            </div>
            
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.8335770952663!2d-83.05096732352297!3d42.32929453704416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d3aeb1d6cef%3A0x5cb331097060cfe4!2s607%20Shelby%20St%20Suite%20700%2C%20Detroit%2C%20MI%2048226%2C%20USA!5e1!3m2!1sen!2sbd!4v1761755712853!5m2!1sen!2sbd"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LoRaWANTech Location"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © {new Date().getFullYear()} lorawantech.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;