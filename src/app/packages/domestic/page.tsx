"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Calendar, Users, Info } from "lucide-react";
import Link from "next/link";

const domesticPackages = [
  { 
    id: "goa",
    name: "Goa", 
    image: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800&h=600&fit=crop", 
    price: "₹15,999", 
    duration: "4D/3N",
    description: "Experience the beaches, nightlife, and Portuguese heritage of Goa",
    highlights: ["Beach activities", "Water sports", "Fort visits", "Casino experience"]
  },
  { 
    id: "kerala",
    name: "Kerala", 
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop", 
    price: "₹18,999", 
    duration: "5D/4N",
    description: "Explore God's Own Country with backwaters, hills, and beaches",
    highlights: ["Houseboat cruise", "Tea plantations", "Ayurvedic spa", "Beach resorts"]
  },
  { 
    id: "ooty",
    name: "Ooty", 
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e9990a72?w=800&h=600&fit=crop", 
    price: "₹12,999", 
    duration: "3D/2N",
    description: "Discover the Queen of Hill Stations with scenic landscapes",
    highlights: ["Botanical gardens", "Toy train ride", "Ooty Lake", "Tea estates"]
  },
  { 
    id: "shimla",
    name: "Shimla", 
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop", 
    price: "₹16,999", 
    duration: "4D/3N",
    description: "Experience the colonial charm and snow-capped mountains",
    highlights: ["Mall Road", "Kufri adventure", "Jakhu Temple", "Ridge walking"]
  },
  { 
    id: "rajasthan",
    name: "Rajasthan", 
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop", 
    price: "₹22,999", 
    duration: "6D/5N",
    description: "Immerse in royal heritage, forts, and desert landscapes",
    highlights: ["Palace tours", "Desert safari", "Cultural shows", "Local cuisine"]
  },
  { 
    id: "andaman",
    name: "Andaman", 
    image: "https://images.unsplash.com/photo-1589197331516-7e2eef331f26?w=800&h=600&fit=crop", 
    price: "₹28,999", 
    duration: "5D/4N",
    description: "Paradise islands with pristine beaches and coral reefs",
    highlights: ["Scuba diving", "Beach hopping", "Cellular Jail", "Water activities"]
  },
];

export default function DomesticPackages() {
  const whatsappNumber = "916362673241";

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary">Domestic Tour Packages</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the incredible diversity of India with our carefully curated domestic tour packages. 
              From beaches to mountains, we have something for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domesticPackages.map((pkg) => (
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
                    <Link href={`/packages/domestic/${pkg.id}`} className="flex-1">
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
                <h3 className="text-xl font-semibold mb-3">Need a Custom Package?</h3>
                <p className="text-muted-foreground mb-4">
                  Can't find what you're looking for? Contact us on WhatsApp for customized domestic tour packages tailored to your preferences.
                </p>
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi, I'd like to inquire about a custom domestic tour package`, '_blank')}
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
