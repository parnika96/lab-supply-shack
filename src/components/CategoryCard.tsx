
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  count: number;
}

const CategoryCard = ({ title, description, Icon, color, count }: CategoryCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1">
      <CardContent className="p-6 text-center">
        <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <span className="text-sm text-blue-600 font-medium">{count} products</span>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
