import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Microscope, FlaskConical, TestTube, Scale, Mail, Phone } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      name: "Digital Microscope DM-500",
      price: "₹1,85,000",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      description: "High-resolution digital microscope with 4K imaging for chemical analysis",
      category: "Microscopy",
      features: ["4K Resolution", "USB Connectivity", "LED Illumination"]
    },
    {
      name: "Analytical Balance AB-220",
      price: "₹95,000",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      description: "Precision analytical balance with 0.1mg readability for chemical weighing",
      category: "Weighing",
      features: ["0.1mg Precision", "Internal Calibration", "Draft Shield"]
    },
    {
      name: "Laboratory Centrifuge LC-12",
      price: "₹2,35,000",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop",
      description: "High-speed benchtop centrifuge for chemical sample preparation",
      category: "Separation",
      features: ["12,000 RPM", "Refrigerated", "Safety Interlock"]
    },
    {
      name: "Rotary Evaporator RE-52",
      price: "₹4,50,000",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
      description: "Advanced rotary evaporator for solvent removal and concentration",
      category: "Distillation",
      features: ["Digital Display", "Vacuum Control", "Water Bath"]
    },
    {
      name: "pH Meter PH-700",
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=300&fit=crop",
      description: "Digital pH meter with automatic temperature compensation",
      category: "Analysis",
      features: ["ATC Function", "Data Logger", "Calibration Memory"]
    },
    {
      name: "Fume Hood FH-1500",
      price: "₹1,25,000",
      image: "https://images.unsplash.com/photo-1606844901531-51b2c1e66b75?w=400&h=300&fit=crop",
      description: "Chemical fume hood with variable air flow for safety",
      category: "Safety",
      features: ["Variable Airflow", "Sash Alarm", "Energy Efficient"]
    },
    {
      name: "Spectrophotometer SP-300",
      price: "₹3,75,000",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      description: "UV-Vis spectrophotometer for quantitative chemical analysis",
      category: "Analysis",
      features: ["UV-Vis Range", "Automatic Sampling", "PC Interface"]
    },
    {
      name: "Laboratory Incubator IN-250",
      price: "₹85,000",
      image: "https://images.unsplash.com/photo-1582719201952-c7f8e9c0b4e2?w=400&h=300&fit=crop",
      description: "Temperature controlled incubator for biological samples",
      category: "Incubation",
      features: ["±0.1°C Accuracy", "Digital Display", "Timer Function"]
    },
    {
      name: "Autoclave AC-100",
      price: "₹1,95,000",
      image: "https://images.unsplash.com/photo-1559757202-c3f28e6cd28e?w=400&h=300&fit=crop",
      description: "Steam sterilizer for laboratory equipment and glassware",
      category: "Sterilization",
      features: ["134°C Max Temp", "Pressure Gauge", "Safety Valve"]
    },
    {
      name: "Chemical Hood CH-180",
      price: "₹2,15,000",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      description: "Walk-in chemical fume hood for large equipment handling",
      category: "Safety",
      features: ["Large Work Area", "Variable Speed Fan", "Emergency Stop"]
    },
    {
      name: "Magnetic Stirrer MS-400",
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=300&fit=crop",
      description: "Digital magnetic stirrer with heating plate",
      category: "Mixing",
      features: ["Speed Control", "Heating Function", "Digital Display"]
    },
    {
      name: "Laboratory Freezer LF-80",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      description: "Ultra-low temperature freezer for sample storage",
      category: "Storage",
      features: ["-80°C Capability", "Alarm System", "Energy Efficient"]
    }
  ];

  const categories = [
    {
      title: "Chemical Analysis",
      description: "Analytical instruments for chemical testing",
      Icon: TestTube,
      color: "bg-blue-500",
      count: 85
    },
    {
      title: "Glassware & Plasticware",
      description: "Laboratory glassware and plastic consumables",
      Icon: FlaskConical,
      color: "bg-green-500",
      count: 200
    },
    {
      title: "Microscopy",
      description: "Microscopes and imaging equipment",
      Icon: Microscope,
      color: "bg-purple-500",
      count: 45
    },
    {
      title: "Weighing & Measuring",
      description: "Precision balances and measuring instruments",
      Icon: Scale,
      color: "bg-orange-500",
      count: 60
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Categories Section */}
      <section id="categories" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Simple Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <span>sales@balajitraders.com</span>
            </div>
            <div className="flex space-x-2 mt-6">
              <Input placeholder="Your email" className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700">Get Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FlaskConical className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold">Balaji Scientific Traders</span>
          </div>
          <p className="text-gray-400">&copy; 2024 Balaji Scientific Traders. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
