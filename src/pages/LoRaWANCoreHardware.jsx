import React from 'react';
import { ArrowRight, Radio, Cpu, Antenna, Server } from "lucide-react";

const LoRaWANCoreHardware = () => {
  const categories = [
    {
      icon: Radio,
      title: "End Devices & Sensors",
      description: "Complete range of LoRaWAN sensors and nodes for various monitoring applications",
      link: "/lorawan-core-hardware/end-devices-sensors"
    },
    {
      icon: Microchip,
      title: "Modules & Chipsets",
      description: "LoRa modules and chipsets for custom hardware development and integration",
      link: "/lorawan-core-hardware/modules-chipsets"
    },
    {
      icon: Cpu,
      title: "Development Boards & Kits",
      description: "Complete development kits for rapid prototyping and testing",
      link: "/lorawan-core-hardware/development-boards-kits"
    },
    {
      icon: Antenna,
      title: "Antennas & RF Accessories",
      description: "High-performance antennas and RF components for optimal network coverage",
      link: "/lorawan-core-hardware/antennas-rf-accessories"
    },
    {
      icon: Server,
      title: "Class A/B/C Device Types",
      description: "Different device classes for various power and latency requirements",
      link: "/lorawan-core-hardware/class-a-b-c-devices"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">LoRaWAN Core Hardware</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Industrial-grade hardware solutions designed for reliability, longevity, and seamless integration in demanding environments.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              LoRaWANTech's LoRaWAN Core Hardware forms the backbone of any reliable IoT infrastructure. 
              Our product suite includes industrial-grade gateways, base stations, and transceivers that 
              support long-range connectivity with minimal power usage. Each hardware component is designed 
              for specific application requirements and environmental conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <category.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <a 
                  href={category.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LoRaWANCoreHardware;