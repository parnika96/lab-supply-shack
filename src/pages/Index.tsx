
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
      price: "$2,499",
      image: "🔬",
      description: "High-resolution digital microscope with 4K imaging",
      category: "Microscopy",
      features: ["4K Resolution", "USB Connectivity", "LED Illumination"]
    },
    {
      name: "Analytical Balance AB-220",
      price: "$1,299",
      image: "⚖️",
      description: "Precision analytical balance with 0.1mg readability",
      category: "Weighing",
      features: ["0.1mg Precision", "Internal Calibration", "Draft Shield"]
    },
    {
      name: "Laboratory Centrifuge LC-12",
      price: "$3,199",
      image: "🌀",
      description: "High-speed benchtop centrifuge for sample preparation",
      category: "Separation",
      features: ["12,000 RPM", "Refrigerated", "Safety Interlock"]
    }
  ];

  const categories = [
    {
      title: "Microscopy",
      description: "Advanced imaging equipment",
      Icon: Microscope,
      color: "bg-blue-500",
      count: 45
    },
    {
      title: "Glassware",
      description: "Laboratory glassware",
      Icon: FlaskConical,
      color: "bg-green-500",
      count: 120
    },
    {
      title: "Analysis",
      description: "Testing equipment",
      Icon: TestTube,
      color: "bg-purple-500",
      count: 78
    },
    {
      title: "Weighing",
      description: "Precision balances",
      Icon: Scale,
      color: "bg-orange-500",
      count: 32
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <span>sales@labequippro.com</span>
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
            <Microscope className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold">LabEquip Pro</span>
          </div>
          <p className="text-gray-400">&copy; 2024 LabEquip Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
