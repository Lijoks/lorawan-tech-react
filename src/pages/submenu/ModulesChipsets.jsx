import { ArrowRight } from 'lucide-react';
import React from 'react';

const ModulesChipsets = () => {
  const modules = [
    {
      title: "SX1276/78 LoRa Transceivers",
      description: "Industry-standard Semtech LoRa transceivers providing robust long-range communication capabilities.",
      specs: [
        "Frequency range: 137 MHz to 1020 MHz",
        "High sensitivity: down to -148 dBm",
        "Transmit power: up to +20 dBm",
        "Low RX current: 10 mA typical"
      ],
      applications: ["IoT sensor nodes", "Smart metering systems", "Asset tracking devices", "Environmental monitors"],
      certification: "CE, FCC, IC Certified",
      icon: "transceiver"
    },
    {
      title: "RAK3172 LoRaWAN Module",
      description: "Complete LoRaWAN module featuring STM32WLE5JC SoC with integrated ARM Cortex-M0+ processor.",
      specs: [
        "Processor: STM32WLE5JC (Arm® Cortex®-M0+)",
        "Memory: 256KB Flash, 64KB RAM",
        "Integrated RF front-end",
        "LoRaWAN 1.0.3 certified"
      ],
      applications: ["Industrial IoT solutions", "Agricultural monitoring", "Smart city applications", "Logistics tracking"],
      certification: "LoRaWAN Certified",
      icon: "module"
    },
    {
      title: "RN2483 LoRa Module",
      description: "Low-power LoRa technology module with pre-loaded certified LoRaWAN stack for rapid deployment.",
      specs: [
        "Frequency bands: 433/868/915 MHz",
        "Protocol: LoRaWAN 1.0.2 compliant",
        "Interface: UART with AT commands",
        "GPIO: 14 configurable pins"
      ],
      applications: ["Battery-powered devices", "Remote monitoring sensors", "Wireless alarm systems", "Utility metering"],
      certification: "Regional Certifications",
      icon: "chip"
    },
    {
      title: "Custom Module Solutions",
      description: "Bespoke LoRa module designs tailored to specific application requirements and environmental conditions.",
      specs: [
        "Custom frequency configurations",
        "Specialized antenna designs",
        "Extended temperature ranges",
        "Enhanced security features"
      ],
      applications: ["Military communications", "Medical devices", "Automotive telematics", "Aerospace systems"],
      certification: "Custom Certifications",
      icon: "custom"
    }
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'transceiver':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
      case 'module':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
      case 'chip':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
      case 'custom':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
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

  return (
    <>
      {/* Hero & Description Section */}
      <div className="w-full">
        {/* 1. Hero Section (Image Background) */}
        <section 
          className="relative min-h-[550px] flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/LoRa-Modules-Chipsets.webp')" }}
        >
          {/* Dark Blue/Purple Overlay to match modules.jpg */}
          <div className="absolute inset-0 bg-slate-900/70"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Smart Wireless Performance<br /> with Advanced LoRa<br /> Modules & Chipsets
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 font-medium leading-relaxed">
                Boost IoT efficiency with LoRaWANTech's high-performance LoRa 
                Modules & Chipsets built for scalable industrial applications
              </p>
              
              {/* Contact Us Button - Dark Style to match screenshot */}
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
            <div className="max-w-5xl text-gray-800 text-lg leading-relaxed">
              <p>
                LoRa Modules and Chipsets enable low-power, long-range wireless connectivity critical to modern IoT ecosystems.
                These modules support robust device-to-gateway communications across smart cities, agriculture, logistics, 
                energy, and more. Designed for minimal energy consumption and excellent signal penetration,
                they support reliable data transmission over long distances—even in dense environments.
                LoRa (Long Range) technology is known for its cost-effectiveness, 
                making it ideal for battery-operated devices in large-scale deployments.

                LoRaWANTech delivers expertly engineered LoRa modules and chipsets, helping B2B organizations across North America build scalable and efficient solutions. Our focus on reliability, product quality, and technical support ensures that your networks operate seamlessly while staying future-ready.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Module Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components of LoRaWAN End Devices (Nodes/Sensors)</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              In addition to offering products and systems developed by our team and trusted partners for LoRa Modules & Chipsets,
              we are proud to carry top-tier technologies from Global Advanced Operations Tek Inc. (GAO Tek Inc.) and
              Global Advanced Operations RFID Inc. (GAO RFID Inc.). These reliable, high-quality products and systems enhance our ability to deliver comprehensive technologies, integrations, and services you can trust. Where relevant, we have provided direct links to select products and systems from GAO Tek Inc. and GAO RFID Inc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    {getIcon(module.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                    <p className="text-gray-600 mb-3">{module.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {module.certification}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Key Specifications:</h4>
                  <ul className="space-y-2">
                    {module.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Ideal Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {module.applications.map((app, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
                  View Datasheet
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Development & Integration Support</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Comprehensive support services to accelerate your LoRa module integration and product development
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SDK & Documentation</h3>
                <p className="text-gray-600">
                  Complete software development kits, API documentation, and code examples for rapid integration.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Consulting</h3>
                <p className="text-gray-600">
                  Expert guidance on module selection, RF design, certification, and deployment best practices.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Certification Support</h3>
                <p className="text-gray-600">
                  Assistance with regional certifications (FCC, CE, IC) and LoRaWAN certification processes.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Need Custom Module Development?</h3>
                  <p className="text-gray-700">
                    Contact our engineering team for custom module solutions tailored to your specific requirements.
                  </p>
                </div>
                <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                  Request Consultation
                </button>
              </div>
            </div>
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

export default ModulesChipsets;