import { Search, Filter, Radio, Wifi, Cpu, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HardwareCatalog = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: 'Industrial LoRaWAN Gateway',
      category: 'Gateway',
      description: 'High-performance outdoor gateway with dual-band WiFi and cellular backup',
      price: '$1,299',
      features: ['IP67 Rated', 'Dual SIM', '32GB Storage', 'PoE+']
    },
    {
      id: 2,
      name: 'LoRa Sensor Node',
      category: 'End Device',
      description: 'Multi-sensor node for temperature, humidity, and motion detection',
      price: '$89',
      features: ['2-year battery', 'IP65', 'Temperature', 'Humidity']
    },
    {
      id: 3,
      name: 'LoRa Development Kit',
      category: 'Development',
      description: 'Complete starter kit for LoRaWAN application development',
      price: '$299',
      features: ['Gateway', '3 Nodes', 'Dashboard', 'Documentation']
    },
    {
      id: 4,
      name: 'Industrial Antenna',
      category: 'Accessory',
      description: 'High-gain directional antenna for long-range communication',
      price: '$149',
      features: ['9dBi Gain', 'Weatherproof', 'N-Type', 'Mounting Kit']
    },
  ];

  const handleViewDetails = (category) => {
    const categoryMap = {
      'Gateway': '/lorawan-network-platforms/gateways-indoor-outdoor',
      'End Device': '/lorawan-core-hardware/end-devices-sensors',
      'Development': '/lorawan-core-hardware/development-boards-kits',
      'Accessory': '/lorawan-core-hardware/antennas-rf-accessories'
    };
    
    navigate(categoryMap[category] || '/hardware');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              LoRaWAN Core Hardware
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Industrial-grade hardware solutions designed for reliability, longevity, 
              and seamless integration in demanding environments.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search hardware products..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </button>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>All Categories</option>
                <option>Gateways</option>
                <option>End Devices</option>
                <option>Modules</option>
                <option>Accessories</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    {product.category === 'Gateway' && <Wifi className="w-12 h-12 text-blue-600 mb-3" />}
                    {product.category === 'End Device' && <Radio className="w-12 h-12 text-blue-600 mb-3" />}
                    {product.category === 'Development' && <Cpu className="w-12 h-12 text-blue-600 mb-3" />}
                    {product.category === 'Accessory' && <Package className="w-12 h-12 text-blue-600 mb-3" />}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <button 
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
                      onClick={() => handleViewDetails(product.category)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HardwareCatalog;