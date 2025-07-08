"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, X } from "lucide-react";
import Image from "next/image";

interface Tour {
  id: string;
  title: string;
  duration: string;
  route: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  category: string[];
  isBestSeller?: boolean;
  uptoDiscount?: string;
}

const tours: Tour[] = [
  {
    id: "1",
    title: "Bali Community Trip",
    duration: "7 Days",
    route: "Ngurah Rai Intl Airport to Ngurah Rai Intl Airport",
    originalPrice: 41000,
    discountedPrice: 38000,
    image: "/placeholder.svg?height=300&width=400",
    category: ["International Group Trips", "Best Sellers"],
    uptoDiscount: "Upto ₹ 3,000 OFF",
  },
  {
    id: "2",
    title: "All Girls Ladakh Trip",
    duration: "11 Days",
    route: "Delhi to Delhi",
    originalPrice: 36500,
    discountedPrice: 34500,
    image: "/placeholder.svg?height=300&width=400",
    category: ["All Girls Trips", "Ladakh"],
    uptoDiscount: "Upto ₹ 5,000 OFF",
  },
  {
    id: "3",
    title: "Leh to Leh Bike Trip with Hanle Umling La Tso Moriri",
    duration: "9 Days",
    route: "Leh to Leh",
    originalPrice: 34000,
    discountedPrice: 31500,
    image: "/placeholder.svg?height=300&width=400",
    category: ["Ladakh", "Best Sellers"],
    isBestSeller: true,
    uptoDiscount: "Upto ₹ 2,500 OFF",
  },
  {
    id: "4",
    title: "All Girls Road Trip to Spiti Valley",
    duration: "9 Days",
    route: "Delhi to Delhi",
    originalPrice: 27000,
    discountedPrice: 25000,
    image: "/placeholder.svg?height=300&width=400",
    category: ["All Girls Trips", "Spiti"],
    uptoDiscount: "Upto ₹ 2,500 OFF",
  },
  {
    id: "5",
    title: "Himalayan Trek Adventure",
    duration: "12 Days",
    route: "Dehradun to Dehradun",
    originalPrice: 28000,
    discountedPrice: 25500,
    image: "/placeholder.svg?height=300&width=400",
    category: ["Himalayan Treks", "Upcoming Trips"],
  },
  {
    id: "6",
    title: "Weekend Getaway to Goa",
    duration: "3 Days",
    route: "Mumbai to Mumbai",
    originalPrice: 15000,
    discountedPrice: 12500,
    image: "/placeholder.svg?height=300&width=400",
    category: ["Weekend Getaways", "Domestic Customize"],
  },
];

const filterOptions = [
  { id: "independence-day", label: "Independence Day", defaultChecked: true },
  { id: "ladakh", label: "Ladakh" },
  { id: "spiti", label: "Spiti" },
  { id: "himalayan-treks", label: "Himalayan Treks" },
  { id: "international-group-trips", label: "International Group Trips" },
  { id: "backpacking-trips", label: "Backpacking Trips" },
  { id: "international-customize", label: "International Customize" },
  { id: "upcoming-trips", label: "Upcoming Trips" },
  { id: "domestic-customize", label: "Domestic Customize" },
  { id: "best-sellers", label: "Best Sellers" },
  { id: "all-girls-trips", label: "All Girls Trips" },
  { id: "new-launches", label: "New Launches" },
  { id: "weekend-getaways", label: "Weekend Getaways" },
];

export default function ToursTravel() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["independence-day"]);

  const handleFilterChange = (filterId: string, checked: boolean) => {
    setSelectedFilters((prev) =>
      checked ? [...prev, filterId] : prev.filter((id) => id !== filterId)
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const filteredTours = tours.filter((tour) => {
    if (selectedFilters.length === 0) return true;
    if (selectedFilters.includes("independence-day")) return true; // Special case: show all tours
    return selectedFilters.some((filter) => {
      const filterLabel = filterOptions.find((opt) => opt.id === filter)?.label;
      return filterLabel && tour.category.includes(filterLabel);
    });
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Filter Tours</h2>
                 <Button
  variant="ghost"
  className="text-blue-600 text-sm p-0 hover:underline"
>
  View All →
</Button>

                </div>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                  {filterOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={option.id}
                        checked={selectedFilters.includes(option.id)}
                        onCheckedChange={(checked) =>
                          handleFilterChange(option.id, checked as boolean)
                        }
                        className="data-[state=checked]:bg-blue-600"
                      />
                      <label
                        htmlFor={option.id}
                        className="text-sm text-gray-700 cursor-pointer hover:text-gray-900"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>

                {selectedFilters.length > 0 && (
                  <Button
                    variant="outline"
                    className="mt-6 w-full bg-transparent border-gray-300 hover:bg-gray-100"
                    onClick={clearFilters}
                  >
                    Clear All
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Tours Grid */}
          <div className="lg:col-span-3">
            {/* Filter Summary */}
            {selectedFilters.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {selectedFilters.map((filter) => {
                    const filterLabel = filterOptions.find((opt) => opt.id === filter)?.label;
                    return filterLabel ? (
                      <Badge
                        key={filter}
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {filterLabel}
                        <X
                          className="w-3 h-3 ml-1 cursor-pointer"
                          onClick={() => handleFilterChange(filter, false)}
                        />
                      </Badge>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Holy Trails Banner */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-xl p-6 text-center relative overflow-hidden shadow-lg">
                <div className="relative z-10">
                  <h2 className="text-3xl font-extrabold text-white mb-2 drop-shadow-md">
                    HOLY TRAILS
                  </h2>
                  <h3 className="text-2xl font-bold text-red-900 mb-4 drop-shadow-md">
                    HIMALAYAN SOULS
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <Badge className="bg-blue-700 text-white">CHAR DHAM YATRA</Badge>
                    <Badge className="bg-blue-700 text-white">TEEN DHAM YATRA</Badge>
                    <Badge className="bg-blue-700 text-white">DO DHAM</Badge>
                  </div>
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold">
                    EXPLORE NOW
                  </Button>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>

            {/* Tours Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredTours.map((tour) => (
                <Card
                  key={tour.id}
                  className="overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Duration Badge */}
                    <Badge
                      className="absolute top-4 right-4 bg-black/70 text-white"
                      icon={<Calendar className="w-3 h-3 mr-1" />}
                    >
                      {tour.duration}
                    </Badge>

                    {/* Best Seller Badge */}
                    {tour.isBestSeller && (
                      <Badge className="absolute top-4 left-4 bg-orange-500 text-white font-medium">
                        Best Seller
                      </Badge>
                    )}

                    {/* Title and Route */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1 drop-shadow-md">
                        {tour.title}
                      </h3>
                      <div className="flex items-center text-white/80 text-sm drop-shadow-md">
                        <MapPin className="w-3 h-3 mr-1" />
                        {tour.route}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 line-through text-base">
                          ₹{tour.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-2xl font-bold text-gray-900">
                          ₹{tour.discountedPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {tour.uptoDiscount && (
                      <p className="text-green-600 text-sm font-semibold mb-4">
                        {tour.uptoDiscount}
                      </p>
                    )}

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2">
                      More Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg font-medium">No tours found for the selected filters.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent border-gray-300 hover:bg-gray-100"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}