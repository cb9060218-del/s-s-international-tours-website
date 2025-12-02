"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Globe, Info } from "lucide-react";
import Link from "next/link";

const internationalPackages = [
  { 
    id: "dubai",
    name: "Dubai", 
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop", 
    price: "₹45,999", 
    duration: "5D/4N",
    description: "Experience the luxury and modern marvels of Dubai",
    highlights: ["Burj Khalifa", "Desert safari", "Dubai Mall", "Luxury hotels"]
  },
  { 
    id: "singapore",
    name: "Singapore", 
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop", 
    price: "₹52,999", 
    duration: "5D/4N",
    description: "Discover the garden city with world-class attractions",
    highlights: ["Universal Studios", "Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"]
  },
  { 
    id: "thailand",
    name: "Thailand", 
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop", 
    price: "₹38,999", 
    duration: "6D/5N",
    description: "Explore beaches, temples, and vibrant street life",
    highlights: ["Bangkok temples", "Pattaya beaches", "Island hopping", "Thai cuisine"]
  },
  { 
    id: "maldives",
    name: "Maldives", 
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop", 
    price: "₹65,999", 
    duration: "4D/3N",
    description: "Luxury beach resort experience in tropical paradise",
    highlights: ["Water villas", "Snorkeling", "Private beaches", "Spa treatments"]
  },
  { 
    id: "bali",
    name: "Bali", 
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop", 
    price: "₹48,999", 
    duration: "5D/4N",
    description: "Island paradise with temples, rice terraces, and beaches",
    highlights: ["Temple visits", "Rice terraces", "Beach clubs", "Balinese culture"]
  },
  { 
    id: "europe",
    name: "Europe", 
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop", 
    price: "₹1,25,999", 
    duration: "10D/9N",
    description: "Multi-country European adventure covering iconic cities",
    highlights: ["Paris Eiffel Tower", "Swiss Alps", "Rome Colosseum", "Amsterdam canals"]
  },
];

export default function InternationalPackages() {
  const whatsappNumber = "916362673241";

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary">International Tour Packages</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the world with our premium international tour packages. 
              We handle flights, visas, hotels, and complete itineraries for a hassle-free experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {pkg.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    <span>{pkg.name}</span>
                    <span className="text-primary text-lg">{pkg.price}</span>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/packages/international/${pkg.id}`} className="flex-1">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Info className="mr-2 w-4 h-4" />
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in the ${pkg.name} package (${pkg.duration})`, '_blank')}
                    >
                      <MessageCircle className="mr-2 w-4 h-4" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Need a Custom International Package?</h3>
                <p className="text-muted-foreground mb-4">
                  Looking for a specific destination or custom itinerary? Contact us on WhatsApp and we'll create the perfect international tour package for you.
                </p>
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi, I'd like to inquire about a custom international tour package`, '_blank')}
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
