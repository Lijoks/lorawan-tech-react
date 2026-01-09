import { ArrowRight} from "lucide-react";
import React from 'react';

const EndDevicesSensors = () => {
  const devices = [
    {
      title: "Temperature & Humidity Sensors",
      description: "Precision environmental monitoring sensors for industrial and commercial applications.",
      features: [
        "Wide temperature range: -40°C to +85°C",
        "High accuracy: ±0.5°C temperature, ±2% RH humidity",
        "Extended battery life: 2-5 years operation",
        "IP67 rated for harsh environments"
      ],
      applications: ["Cold chain monitoring", "HVAC optimization", "Industrial process control", "Agricultural management"],
      icon: "thermometer",
      color: "red"
    },
    {
      title: "Battery-Powered Sensor Nodes",
      description: "Ultra-low-power wireless nodes for remote monitoring and long-term deployments.",
      features: [
        "Ultra-low power consumption: <5µA sleep current",
        "Extended battery life: 5-10 years typical",
        "Solar charging capability integrated",
        "Self-diagnostic and reporting features"
      ],
      applications: ["Remote asset tracking", "Environmental sensing", "Infrastructure monitoring", "Wildlife research"],
      icon: "battery",
      color: "green"
    },
    {
      title: "Motion & Presence Detection",
      description: "Advanced motion detection sensors using PIR and radar technologies.",
      features: [
        "Dual-technology detection (PIR + Radar)",
        "Adjustable range: 1-15 meters",
        "360° coverage with configurable zones",
        "Tamper detection and anti-masking"
      ],
      applications: ["Occupancy monitoring", "Security systems", "Smart lighting control", "Space utilization analytics"],
      icon: "motion",
      color: "blue"
    },
    {
      title: "Air Quality & Environmental Sensors",
      description: "Comprehensive air quality monitoring for indoor and outdoor environments.",
      features: [
        "Multi-parameter: CO2, VOC, PM2.5, PM10",
        "Professional-grade accuracy and calibration",
        "Real-time data streaming capability",
        "Weatherproof outdoor enclosures"
      ],
      applications: ["Smart building management", "Industrial safety", "Urban air quality", "Healthcare facilities"],
      icon: "air",
      color: "purple"
    }
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'thermometer':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        );
      case 'battery':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.5 2H15a1 1 0 010 2H5a1 1 0 010-2h1.72l.5-2H5a2 2 0 01-2-2V5zm5.5 2a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5zM7 8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1V8z" clipRule="evenodd" />
          </svg>
        );
      case 'motion':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        );
      case 'air':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const getColorClasses = (color) => {
    switch(color) {
      case 'red': return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' };
      case 'green': return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' };
      case 'blue': return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' };
      case 'purple': return { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' };
    }
  };

  return (
    <>
      {/* Hero & Description Section */}
      <div className="w-full">
        {/* 1. Hero Section (Image Background) */}
        <section 
          className="relative min-h-[500px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/LoRaWAN-End-Devices.webp')" }}
        >
          {/* Dark Blue/Purple Overlay to match sens1.jpg */}
          <div className="absolute inset-0 bg-slate-900/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Enable Smarter IoT<br /> Deployments with<br /> LoRaWAN End Devices
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 font-medium">
                Empower industrial and commercial systems with LoRaWANTech's ultra-reliable 
                LoRaWAN end devices for long-range, low-power IoT applications
              </p>
              
              {/* Contact Us Button - Dark Style */}
              <a 
                href="/contact" 
                className="inline-flex items-center bg-[#0f172a] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-black transition-all group"
              >
                Contact Us
                <div className="ml-3 border border-white/50 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 2. Description Section (White Background) */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
              <p>
                LoRaWAN end devices are integral to long-range, low-power wireless communication systems 
                that drive modern Internet of Things (IoT) applications. These nodes, often equipped 
                with environmental or asset-tracking sensors, are deployed across diverse environments 
                to enable remote monitoring, predictive maintenance, and real-time data collection. 
                Operating on low bandwidth while delivering reliable, wide-area coverage, LoRaWAN end 
                devices are a preferred solution for scalable, cost-efficient industrial connectivity.
              </p>
              <p>
                LoRaWANTech, a B2B innovator serving North America, supports businesses with a growing 
                portfolio of high-performance LoRaWAN solutions. As a trusted provider headquartered in 
                Detroit, Michigan, we combine rigorous quality control, cutting-edge R&D, and reliable 
                customer support to help clients build robust wireless infrastructures for critical 
                data flow and remote management. Our LoRaWAN end devices power essential connectivity 
                in agriculture, utilities, smart cities, and beyond.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Sensor Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of LoRaWAN End Devices (Nodes/Sensors)</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              In addition to offering products and systems developed by our team and trusted partners for LoRaWAN End Devices (Nodes/Sensors), 
              we are proud to carry top-tier technologies from Global Advanced Operations Tek Inc. (GAO Tek Inc.) and Global Advanced Operations RFID Inc.
               (GAO RFID Inc.). These reliable, high-quality products and systems enhance our ability to deliver comprehensive technologies,
                integrations, and services you can trust. Where relevant, we have provided direct links to select products and systems from GAO Tek Inc. and GAO RFID Inc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {devices.map((device, index) => {
              const colors = getColorClasses(device.color);
              return (
                <div key={index} className={`rounded-xl p-6 border ${colors.border} hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 rounded-lg ${colors.bg} flex items-center justify-center mr-4 flex-shrink-0`}>
                      {getIcon(device.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{device.title}</h3>
                      <p className="text-gray-600">{device.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Technical Features:</h4>
                    <ul className="space-y-2">
                      {device.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Typical Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {device.applications.map((app, idx) => (
                        <span key={idx} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm`}>
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications Comparison</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Detailed technical specifications for our most popular sensor categories
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Parameter</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-red-700 uppercase tracking-wider">Temperature Sensors</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-green-700 uppercase tracking-wider">Battery Nodes</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-700 uppercase tracking-wider">Motion Sensors</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-purple-700 uppercase tracking-wider">Air Quality Sensors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Operating Range", "-40°C to +85°C", "-30°C to +60°C", "-20°C to +70°C", "-10°C to +50°C"],
                  ["Measurement Accuracy", "±0.5°C", "N/A", "Detection reliability: 99%", "±5% of reading"],
                  ["Battery Life", "2-5 years", "5-10 years", "3-7 years", "1-3 years"],
                  ["Communication Range", "Up to 10 km urban", "Up to 15 km rural", "Up to 8 km", "Up to 5 km"],
                  ["IP Rating", "IP67", "IP68", "IP65", "IP54"],
                  ["Data Interval", "1 min to 24 hrs", "15 min to 24 hrs", "Real-time event", "5 min to 1 hr"],
                  ["Power Consumption", "Average 50µA", "Average 10µA", "Average 100µA", "Average 200µA"],
                  ["Enclosure Material", "Stainless Steel", "ABS Plastic", "Polycarbonate", "Aluminum"]
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row[0]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row[1]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row[2]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row[3]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies & CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Case Studies Header */}
          <h2 className="text-3xl font-bold text-[#1a639b] mb-10">Case Studies</h2>

          {/* Case Study Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium">
              Case Study 1 – USA: Smart Agriculture Deployment (Iowa)
            </button>
            <button className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium">
              Case Study 2 – USA: Utility Monitoring System (Colorado)
            </button>
            <button className="bg-[#1a639b] text-white px-6 py-2.5 rounded-sm text-sm font-medium">
              Case Study 3 – Canada: Cold Chain Monitoring (British Columbia)
            </button>
          </div>

          {/* Case Study Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-20">
            A large-scale agribusiness in Iowa implemented LoRaWANTech's LoRaWAN end devices to monitor soil 
            moisture and crop health over 1,200 acres. The system, powered by solar-assisted nodes and 
            GAO Tek Inc. sensors, resulted in a 30% water savings and significantly improved crop 
            yield forecasting.
          </p>

          {/* Bottom CTA Card */}
          <div 
            className="relative rounded-[2.5rem] overflow-hidden bg-cover bg-center min-h-[380px] flex items-center"
            style={{ backgroundImage: "url('/images/lorawan-cta.webp')" }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 p-8 md:p-16 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Looking to upgrade or deploy LoRaWAN<br /> End Devices for your IoT strategy?
              </h2>
              
              <p className="text-lg text-gray-200 mb-10 max-w-2xl">
                Contact LoRaWANTech to speak with our technical specialists, request quotes, 
                or explore customized deployment solutions.
              </p>

              {/* Contact Us Button - White Style */}
              <a 
                href="/contact" 
                className="inline-flex items-center bg-white text-gray-900 px-7 py-3 rounded-md font-bold text-base hover:bg-gray-100 transition-all group"
              >
                Contact Us
                <div className="ml-3 border border-gray-900 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EndDevicesSensors;