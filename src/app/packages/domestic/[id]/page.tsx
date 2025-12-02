"use client";

import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Calendar, Users, CheckCircle, ArrowLeft, Star } from "lucide-react";

const packageDetails: Record<string, any> = {
  "goa": {
    name: "Goa Beach Paradise",
    image: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=1200&h=600&fit=crop",
    price: "₹15,999",
    duration: "4 Days / 3 Nights",
    groupSize: "2-10 people",
    description: "Experience the perfect blend of sun, sand, and Portuguese heritage in India's favorite beach destination. Relax on pristine beaches, explore historic forts, and enjoy vibrant nightlife.",
    highlights: [
      "Visit famous beaches - Calangute, Baga, Anjuna",
      "Explore Portuguese architecture and churches",
      "Water sports activities included",
      "Sunset cruise on Mandovi River",
      "Visit to spice plantations",
      "Casino experience (optional)"
    ],
    itinerary: [
      { day: 1, title: "Arrival & Beach Time", activities: "Airport pickup, hotel check-in, evening at Calangute Beach, beach shack dinner" },
      { day: 2, title: "North Goa Exploration", activities: "Fort Aguada, Anjuna Beach, flea market visit, water sports, evening at Baga Beach" },
      { day: 3, title: "South Goa & Culture", activities: "Old Goa churches, spice plantation tour, Palolem Beach, sunset cruise" },
      { day: 4, title: "Departure", activities: "Leisure morning, local market shopping, airport drop" }
    ],
    inclusions: [
      "Accommodation in 3-star hotel",
      "Daily breakfast",
      "AC transportation",
      "Sightseeing as per itinerary",
      "Airport transfers"
    ],
    exclusions: [
      "Lunch and dinner",
      "Entry fees to monuments",
      "Water sports charges",
      "Personal expenses"
    ]
  },
  "kerala": {
    name: "Kerala Backwaters & Hills",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=600&fit=crop",
    price: "₹18,999",
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 people",
    description: "Discover God's Own Country with its serene backwaters, lush tea plantations, and pristine beaches. Experience traditional houseboat stays and ayurvedic wellness.",
    highlights: [
      "Houseboat stay in Alleppey backwaters",
      "Munnar tea plantation visit",
      "Thekkady wildlife sanctuary",
      "Kathakali cultural performance",
      "Ayurvedic spa session",
      "Beach resort experience"
    ],
    itinerary: [
      { day: 1, title: "Arrival Cochin", activities: "Airport pickup, transfer to Munnar, evening at leisure, hill station views" },
      { day: 2, title: "Munnar Exploration", activities: "Tea plantations, Mattupetty Dam, Echo Point, Eravikulam National Park" },
      { day: 3, title: "Thekkady Wildlife", activities: "Drive to Thekkady, spice plantation tour, Periyar wildlife boat safari, Kathakali show" },
      { day: 4, title: "Alleppey Houseboat", activities: "Transfer to Alleppey, houseboat check-in, backwater cruise, overnight on houseboat" },
      { day: 5, title: "Beach & Departure", activities: "Kovalam Beach, ayurvedic spa (optional), airport transfer" }
    ],
    inclusions: [
      "4-star hotel accommodation",
      "1-night houseboat stay",
      "All meals on houseboat",
      "Daily breakfast at hotels",
      "AC vehicle throughout",
      "All transfers and sightseeing"
    ],
    exclusions: [
      "Lunch and dinner at hotels",
      "Entry fees",
      "Ayurvedic treatments",
      "Personal expenses"
    ]
  },
  "ooty": {
    name: "Ooty Hill Station Escape",
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e9990a72?w=1200&h=600&fit=crop",
    price: "₹12,999",
    duration: "3 Days / 2 Nights",
    groupSize: "2-8 people",
    description: "Escape to the Queen of Hill Stations with scenic landscapes, colonial charm, and pleasant weather. Perfect for a quick weekend getaway.",
    highlights: [
      "Nilgiri Mountain Railway toy train ride",
      "Botanical Gardens visit",
      "Ooty Lake boating",
      "Tea factory and museum tour",
      "Doddabetta Peak viewpoint",
      "Rose Garden exploration"
    ],
    itinerary: [
      { day: 1, title: "Arrival & Local Sightseeing", activities: "Pickup, hotel check-in, Botanical Gardens, Ooty Lake, Rose Garden, evening shopping" },
      { day: 2, title: "Coonoor & Surroundings", activities: "Toy train ride, Doddabetta Peak, tea factory visit, Sim's Park in Coonoor, Lamb's Rock" },
      { day: 3, title: "Departure", activities: "Leisure morning, local market, check-out and drop" }
    ],
    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Transportation in AC vehicle",
      "All sightseeing as per itinerary",
      "Pick-up and drop"
    ],
    exclusions: [
      "Meals other than breakfast",
      "Toy train tickets",
      "Entry fees",
      "Personal expenses"
    ]
  },
  "shimla": {
    name: "Shimla Manali Adventure",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=600&fit=crop",
    price: "₹16,999",
    duration: "4 Days / 3 Nights",
    groupSize: "2-10 people",
    description: "Experience the colonial charm of Shimla and adventure activities in Manali. Perfect blend of heritage, nature, and thrill.",
    highlights: [
      "Mall Road and Ridge walking",
      "Kufri adventure activities",
      "Solang Valley adventure sports",
      "Rohtang Pass visit (seasonal)",
      "Hadimba Temple visit",
      "Old Manali exploration"
    ],
    itinerary: [
      { day: 1, title: "Arrival Shimla", activities: "Pickup, hotel check-in, Mall Road, Ridge, Lakkar Bazaar, Christ Church" },
      { day: 2, title: "Shimla to Manali", activities: "Kufri visit, scenic drive to Manali, check-in, evening at leisure" },
      { day: 3, title: "Manali Sightseeing", activities: "Hadimba Temple, Vashisht hot springs, Old Manali, Tibetan Monastery, Mall Road" },
      { day: 4, title: "Solang Valley & Departure", activities: "Solang Valley adventure activities, scenic views, return and departure" }
    ],
    inclusions: [
      "3-star hotel stays",
      "Daily breakfast",
      "AC transportation",
      "All sightseeing transfers",
      "Pick-up and drop services"
    ],
    exclusions: [
      "Meals other than breakfast",
      "Adventure activity charges",
      "Rohtang Pass permit and vehicle",
      "Entry fees"
    ]
  },
  "rajasthan": {
    name: "Royal Rajasthan Heritage Tour",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=600&fit=crop",
    price: "₹22,999",
    duration: "6 Days / 5 Nights",
    groupSize: "2-15 people",
    description: "Immerse yourself in royal heritage with magnificent forts, palaces, and desert landscapes. Experience the vibrant culture and cuisine of Rajasthan.",
    highlights: [
      "Amber Fort and Palace of Winds",
      "City Palace and Lake Palace views",
      "Mehrangarh Fort exploration",
      "Camel safari in Thar Desert",
      "Cultural folk performances",
      "Traditional Rajasthani cuisine"
    ],
    itinerary: [
      { day: 1, title: "Jaipur Arrival", activities: "Airport pickup, hotel check-in, City Palace, Jantar Mantar, evening at Chokhi Dhani" },
      { day: 2, title: "Jaipur Sightseeing", activities: "Amber Fort, Hawa Mahal, Jal Mahal, Nahargarh Fort, local markets" },
      { day: 3, title: "Jaipur to Jodhpur", activities: "Drive to Jodhpur, check-in, Mehrangarh Fort, Jaswant Thada, Clock Tower market" },
      { day: 4, title: "Jodhpur to Jaisalmer", activities: "Drive to Jaisalmer, check-in, Jaisalmer Fort, Patwon Ki Haveli, evening at leisure" },
      { day: 5, title: "Jaisalmer Desert", activities: "Sam Sand Dunes, camel safari, desert camp, cultural program, overnight in camp" },
      { day: 6, title: "Departure", activities: "Morning leisure, local shopping, transfer to Jaisalmer railway station/airport" }
    ],
    inclusions: [
      "Heritage hotel accommodation",
      "1-night desert camp stay",
      "Daily breakfast",
      "Desert camp dinner",
      "AC vehicle for all transfers",
      "Camel safari included"
    ],
    exclusions: [
      "Lunch and most dinners",
      "Monument entry fees",
      "Camera charges at forts",
      "Personal expenses"
    ]
  },
  "andaman": {
    name: "Andaman Island Paradise",
    image: "https://images.unsplash.com/photo-1589197331516-7e2eef331f26?w=1200&h=600&fit=crop",
    price: "₹28,999",
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 people",
    description: "Discover pristine beaches, crystal-clear waters, and vibrant coral reefs in India's tropical paradise. Perfect for adventure and relaxation.",
    highlights: [
      "Cellular Jail light & sound show",
      "Scuba diving and snorkeling",
      "Havelock Island beaches",
      "Neil Island exploration",
      "Water sports activities",
      "Beach hopping experience"
    ],
    itinerary: [
      { day: 1, title: "Port Blair Arrival", activities: "Airport pickup, hotel check-in, Cellular Jail visit, Light & Sound Show, Corbyn's Cove Beach" },
      { day: 2, title: "Port Blair to Havelock", activities: "Ferry to Havelock, Radhanagar Beach (Asia's best beach), water sports, sunset views" },
      { day: 3, title: "Havelock Adventure", activities: "Scuba diving/snorkeling at Elephant Beach, beach activities, leisure time" },
      { day: 4, title: "Neil Island Day Trip", activities: "Ferry to Neil Island, Natural Bridge, Laxmanpur Beach, Bharatpur Beach, return to Port Blair" },
      { day: 5, title: "Departure", activities: "Last-minute shopping, Ross Island visit (if time permits), airport transfer" }
    ],
    inclusions: [
      "Beach resort accommodation",
      "Daily breakfast",
      "All ferry tickets",
      "AC airport transfers",
      "Port Blair local sightseeing"
    ],
    exclusions: [
      "Lunch and dinner",
      "Scuba diving charges",
      "Water sports fees",
      "Entry permits and fees",
      "Personal expenses"
    ]
  }
};

export default function DomesticPackageDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const pkg = packageDetails[id];
  const whatsappNumber = "916362673241";

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
          <Button onClick={() => router.push("/packages/domestic")}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Packages
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <img 
          src={pkg.image} 
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <Button 
              variant="outline" 
              className="mb-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => router.push("/packages/domestic")}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Packages
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pkg.name}</h1>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{pkg.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-secondary text-secondary" />
                <span>4.8/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Tour Highlights</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {pkg.highlights.map((highlight: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Day-wise Itinerary</h2>
                  <div className="space-y-4">
                    {pkg.itinerary.map((day: any, idx: number) => (
                      <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                        <h3 className="font-semibold text-lg mb-1">
                          Day {day.day}: {day.title}
                        </h3>
                        <p className="text-muted-foreground">{day.activities}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Inclusions & Exclusions */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">Included</h3>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 text-destructive">Not Included</h3>
                    <ul className="space-y-2">
                      {pkg.exclusions.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Starting from</p>
                    <p className="text-4xl font-bold text-primary">{pkg.price}</p>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full mb-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi, I'd like to book the ${pkg.name} package (${pkg.duration}) for ${pkg.price}`, '_blank')}
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Book on WhatsApp
                  </Button>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">Duration</p>
                        <p className="text-muted-foreground">{pkg.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">Group Size</p>
                        <p className="text-muted-foreground">{pkg.groupSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">Pick-up</p>
                        <p className="text-muted-foreground">Available</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-center text-muted-foreground">
                      💬 Have questions? Chat with us on WhatsApp for instant responses!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
