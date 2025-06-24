
import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Premium Chemical & Laboratory Equipment
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted partner for high-quality scientific instruments, chemicals, and laboratory supplies. 
            From analytical instruments to safety equipment - everything for your research needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Browse Products
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Get Quote
            </Button>
          </div>
          
          <div className="mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
              <FlaskConical className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">500+ Chemical & Lab Products Available</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
