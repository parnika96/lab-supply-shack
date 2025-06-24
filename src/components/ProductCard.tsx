
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  category: string;
  features: string[];
}

const ProductCard = ({ name, price, image, description, category, features }: ProductCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-6xl">{image}</span>
          </div>
          <Badge className="absolute top-4 left-4 bg-blue-600">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2">{name}</CardTitle>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-1 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-500 flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-600">{price}</span>
        <Button className="bg-blue-600 hover:bg-blue-700">Add to Quote</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
