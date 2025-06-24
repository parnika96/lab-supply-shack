
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Contact from "@/components/Contact";
import { Microscope, FlaskConical, TestTube, Scale, Thermometer, Zap } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      name: "Digital Microscope DM-500",
      price: "$2,499",
      image: "🔬",
      description: "High-resolution digital microscope with 4K imaging capabilities",
      category: "Microscopy",
      features: ["4K Resolution", "USB Connectivity", "LED Illumination", "Software Included"]
    },
    {
      name: "Analytical Balance AB-220",
      price: "$1,299",
      image: "⚖️",
      description: "Precision analytical balance with 0.1mg readability",
      category: "Weighing",
      features: ["0.1mg Precision", "Internal Calibration", "Draft Shield", "Data Logging"]
    },
    {
      name: "Laboratory Centrifuge LC-12",
      price: "$3,199",
      image: "🌀",
      description: "High-speed benchtop centrifuge for sample preparation",
      category: "Separation",
      features: ["12,000 RPM", "Refrigerated", "Safety Interlock", "Multiple Rotors"]
    },
    {
      name: "pH Meter PM-100",
      price: "$599",
      image: "📊",
      description: "Portable pH meter with automatic temperature compensation",
      category: "Analysis",
      features: ["Auto Calibration", "ATC Function", "Waterproof", "Data Storage"]
    },
    {
      name: "Laboratory Incubator LI-75",
      price: "$1,899",
      image: "🔥",
      description: "Temperature-controlled incubator for biological applications",
      category: "Environmental",
      features: ["±0.1°C Accuracy", "75L Capacity", "Digital Display", "Over-temp Protection"]
    },
    {
      name: "Spectrophotometer SP-200",
      price: "$4,599",
      image: "📈",
      description: "UV-Vis spectrophotometer for quantitative analysis",
      category: "Analysis",
      features: ["UV-Vis Range", "1nm Bandwidth", "PC Software", "Cuvette Holder"]
    }
  ];

  const categories = [
    {
      title: "Microscopy",
      description: "Advanced imaging and observation equipment",
      Icon: Microscope,
      color: "bg-blue-500",
      count: 45
    },
    {
      title: "Glassware",
      description: "Laboratory glassware and consumables",
      Icon: FlaskConical,
      color: "bg-green-500",
      count: 120
    },
    {
      title: "Analysis",
      description: "Analytical instruments and testing equipment",
      Icon: TestTube,
      color: "bg-purple-500",
      count: 78
    },
    {
      title: "Weighing",
      description: "Precision balances and weighing solutions",
      Icon: Scale,
      color: "bg-orange-500",
      count: 32
    },
    {
      title: "Temperature",
      description: "Heating, cooling, and temperature control",
      Icon: Thermometer,
      color: "bg-red-500",
      count: 56
    },
    {
      title: "Electrical",
      description: "Power supplies and electrical equipment",
      Icon: Zap,
      color: "bg-yellow-500",
      count: 29
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Categories Section */}
      <section id="categories" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of laboratory equipment across multiple categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular laboratory equipment, trusted by researchers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Products Available</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">1,000+</h3>
              <p className="text-blue-100">Satisfied Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p className="text-blue-100">Technical Support</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Microscope className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">LabEquip Pro</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for high-quality laboratory equipment and scientific instruments.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Microscopes</li>
                <li>Analytical Instruments</li>
                <li>Laboratory Furniture</li>
                <li>Safety Equipment</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Installation</li>
                <li>Maintenance</li>
                <li>Training</li>
                <li>Technical Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>News</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LabEquip Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
