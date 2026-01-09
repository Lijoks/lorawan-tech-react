import React from 'react';
import { ArrowRight, Sprout, Building, Zap, Factory, Truck } from "lucide-react";

const LoRaWANApplications = () => {
  const applications = [
    {
      icon: Sprout,
      title: "Smart Agriculture",
      description: "Precision farming, irrigation control, and crop monitoring",
      link: "/lorawan-applications/smart-agriculture"
    },
    {
      icon: Building,
      title: "Smart Cities",
      description: "Infrastructure monitoring, waste management, and public services",
      link: "/lorawan-applications/smart-cities-infrastructure-monitoring"
    },
    {
      icon: Zap,
      title: "Smart Utility Metering",
      description: "Water, gas, and electricity consumption monitoring",
      link: "/lorawan-applications/smart-utility-metering"
    },
    {
      icon: Factory,
      title: "Industrial IoT",
      description: "Predictive maintenance, asset tracking, and process optimization",
      link: "/lorawan-applications/industrial-iot-predictive-maintenance"
    },
    {
      icon: Truck,
      title: "Asset Tracking",
      description: "Vehicle tracking, logistics, and supply chain management",
      link: "/lorawan-applications/asset-vehicle-tracking"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">LoRaWAN Applications</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Custom IoT solutions for various industries and use cases.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              LoRaWANTech delivers customized LoRaWAN applications to meet the needs of various industries, 
              including agriculture, logistics, smart cities, utilities, and industrial automation. With low 
              power requirements and wide coverage, our systems operate in remote or hard-to-reach locations 
              where traditional connectivity falls short.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <app.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{app.title}</h3>
                    <p className="text-gray-600 text-sm">{app.description}</p>
                  </div>
                </div>
                
                <a 
                  href={app.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  View Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Benefits of LoRaWAN Applications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Long Range",
                description: "Communicate over distances up to 15km in rural areas"
              },
              {
                title: "Low Power",
                description: "Battery life of 5-10 years for most sensor applications"
              },
              {
                title: "Low Cost",
                description: "Reduced infrastructure and maintenance costs"
              },
              {
                title: "Scalable",
                description: "Support for thousands of devices per gateway"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LoRaWANApplications;