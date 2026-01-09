import React from 'react';
import { ArrowRight, Server, Cloud, Shield, Database, Wifi } from "lucide-react";

const LoRaWANNetworkPlatforms = () => {
  const platforms = [
    {
      icon: Wifi,
      title: "Gateways",
      description: "Indoor and outdoor gateways for LoRa to IP conversion",
      link: "/lorawan-network-platforms/gateways-indoor-outdoor"
    },
    {
      icon: Server,
      title: "Network Servers (LNS)",
      description: "Centralized servers for device management and data routing",
      link: "/lorawan-network-platforms/network-servers-lns"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      description: "Scalable cloud infrastructure for data storage and analytics",
      link: "/lorawan-network-platforms/cloud-middleware"
    },
    {
      icon: Shield,
      title: "Security Layer",
      description: "End-to-end encryption and secure join procedures",
      link: "/lorawan-network-platforms/join-application-servers"
    },
    {
      icon: Database,
      title: "Private Networks",
      description: "Complete private network solutions for enterprise use",
      link: "/lorawan-network-platforms/private-network-solutions"
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">LoRaWAN Network Platforms</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complete network solutions for reliable, secure, and scalable IoT deployments.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our network platforms enable businesses to manage, monitor, and scale their 
              LoRaWAN-based deployments with ease. LoRaWANTech offers private and public 
              network options with intuitive dashboards, seamless device provisioning, 
              and advanced security protocols. These platforms ensure reliable data routing, 
              device authentication, and over-the-air updates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <platform.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.title}</h3>
                    <p className="text-gray-600 text-sm">{platform.description}</p>
                  </div>
                </div>
                
                <a 
                  href={platform.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Architecture Diagram */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Network Architecture</h2>
          
          <div className="bg-gray-900 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* End Devices */}
              <div className="text-center">
                <div className="bg-blue-800 rounded-lg p-6 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">End Devices</h3>
                  <p className="text-blue-200 text-sm">Sensors & Actuators</p>
                </div>
                <div className="text-gray-400 text-2xl">↓</div>
              </div>

              {/* Gateway */}
              <div className="text-center">
                <div className="bg-green-800 rounded-lg p-6 mb-4">
                  <Wifi className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-white font-semibold">Gateways</h3>
                  <p className="text-green-200 text-sm">LoRa to IP Conversion</p>
                </div>
                <div className="text-gray-400 text-2xl">↓</div>
              </div>

              {/* Cloud */}
              <div className="text-center">
                <div className="bg-purple-800 rounded-lg p-6">
                  <Cloud className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-white font-semibold">Network Server</h3>
                  <p className="text-purple-200 text-sm">Data Processing & Routing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoRaWANNetworkPlatforms;