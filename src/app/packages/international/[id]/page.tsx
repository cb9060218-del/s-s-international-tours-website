"use client";

import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Globe, Calendar, Users, CheckCircle, ArrowLeft, Star, Plane } from "lucide-react";

const packageDetails: Record<string, any> = {
  "dubai": {
    name: "Dubai Luxury Experience",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=600&fit=crop",
    price: "₹45,999",
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 people",
    description: "Experience the epitome of luxury and modern marvels in Dubai. From towering skyscrapers to golden deserts, discover why Dubai is the world's most exciting destination.",
    highlights: [
      "Burj Khalifa At The Top experience",
      "Desert safari with BBQ dinner",
      "Dubai Mall and Gold Souk shopping",
      "Marina Dhow Cruise dinner",
      "Abu Dhabi city tour",
      "4-star hotel accommodation"
    ],
    itinerary: [
      { day: 1, title: "Arrival Dubai", activities: "Airport reception, hotel check-in, evening at Dubai Mall, Burj Khalifa visit, fountain show" },
      { day: 2, title: "Desert Safari", activities: "Leisure morning, afternoon desert safari, dune bashing, camel ride, BBQ dinner, cultural show" },
      { day: 3, title: "Abu Dhabi Tour", activities: "Full day Abu Dhabi tour, Sheikh Zayed Mosque, Ferrari World (photo stop), Emirates Palace" },
      { day: 4, title: "Dubai City Tour", activities: "Dubai Museum, Gold & Spice Souk, Jumeirah Beach, Atlantis, evening Marina Dhow Cruise" },
      { day: 5, title: "Departure", activities: "Free time for shopping or leisure, hotel check-out, airport transfer" }
    ],
    inclusions: [
      "Return flight tickets",
      "4-star hotel stay with breakfast",
      "All transfers in AC vehicle",
      "Desert safari with dinner",
      "Burj Khalifa tickets",
      "Abu Dhabi city tour",
      "Dhow cruise dinner",
      "Tourist visa processing"
    ],
    exclusions: [
      "Lunch and some dinners",
      "Optional activities",
      "Personal expenses",
      "Travel insurance"
    ]
  },
  "singapore": {
    name: "Singapore Garden City Delight",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=600&fit=crop",
    price: "₹52,999",
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 people",
    description: "Discover the perfect blend of nature, technology, and culture in Singapore. Experience world-class attractions and seamless urban living.",
    highlights: [
      "Universal Studios full day pass",
      "Gardens by the Bay with light show",
      "Sentosa Island adventure",
      "Marina Bay Sands SkyPark",
      "Singapore Zoo or Night Safari",
      "River Cruise experience"
    ],
    itinerary: [
      { day: 1, title: "Singapore Arrival", activities: "Airport transfer, hotel check-in, Marina Bay area, Gardens by the Bay, Supertree light show" },
      { day: 2, title: "Universal Studios", activities: "Full day at Universal Studios, evening at Sentosa Beaches" },
      { day: 3, title: "Sentosa Island", activities: "S.E.A Aquarium, Wings of Time show, Cable car ride, Merlion" },
      { day: 4, title: "City Tour", activities: "Singapore Zoo or Night Safari, Orchard Road shopping, Marina Bay Sands SkyPark" },
      { day: 5, title: "Departure", activities: "Last-minute shopping at Mustafa Centre, airport transfer" }
    ],
    inclusions: [
      "Round trip flights",
      "4-star hotel with breakfast",
      "Universal Studios tickets",
      "Gardens by the Bay tickets",
      "All transfers included",
      "Singapore visa assistance",
      "City tour with guide"
    ],
    exclusions: [
      "Lunch and dinner",
      "Optional attractions",
      "Shopping expenses",
      "Travel insurance"
    ]
  },
  "thailand": {
    name: "Thailand Beach & Temple Tour",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=600&fit=crop",
    price: "₹38,999",
    duration: "6 Days / 5 Nights",
    groupSize: "2-15 people",
    description: "Explore the land of smiles with stunning beaches, ornate temples, vibrant markets, and delicious cuisine. Perfect mix of culture and beach relaxation.",
    highlights: [
      "Bangkok temple tours",
      "Pattaya beach activities",
      "Coral Island water sports",
      "Alcazar Cabaret Show",
      "Floating market visit",
      "Thai massage experience"
    ],
    itinerary: [
      { day: 1, title: "Bangkok Arrival", activities: "Airport reception, hotel check-in, evening at Asiatique night market" },
      { day: 2, title: "Bangkok Temples", activities: "Grand Palace, Wat Pho, Wat Arun, evening at Khao San Road" },
      { day: 3, title: "Bangkok to Pattaya", activities: "Transfer to Pattaya, Nong Nooch Village, evening at Walking Street" },
      { day: 4, title: "Coral Island", activities: "Coral Island tour, water sports, beach activities, Alcazar Show evening" },
      { day: 5, title: "Pattaya Free Day", activities: "Leisure day, optional activities, shopping, Thai massage" },
      { day: 6, title: "Return to Bangkok", activities: "Transfer to Bangkok, last-minute shopping, airport drop" }
    ],
    inclusions: [
      "Return air tickets",
      "3-star hotels with breakfast",
      "Bangkok-Pattaya transfers",
      "Coral Island tour",
      "Temple entry tickets",
      "Alcazar Show tickets",
      "Thailand visa on arrival"
    ],
    exclusions: [
      "Lunch and dinner",
      "Optional water sports",
      "Personal shopping",
      "Tips and gratuities"
    ]
  },
  "maldives": {
    name: "Maldives Paradise Retreat",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=600&fit=crop",
    price: "₹65,999",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 people",
    description: "Escape to tropical paradise with crystal-clear waters, white sandy beaches, and luxury water villas. Perfect romantic getaway and honeymoon destination.",
    highlights: [
      "Water villa or beach villa stay",
      "Snorkeling in coral reefs",
      "Sunset fishing trip",
      "Island hopping tour",
      "Private beach access",
      "Spa and wellness treatments"
    ],
    itinerary: [
      { day: 1, title: "Maldives Arrival", activities: "Male airport arrival, speedboat/seaplane to resort, check-in, beach relaxation, sunset viewing" },
      { day: 2, title: "Water Activities", activities: "Snorkeling excursion, coral reef exploration, water sports, beach games, evening at leisure" },
      { day: 3, title: "Island Hopping", activities: "Local island visit, sandbank picnic, sunset fishing, cultural experience, beachside dinner" },
      { day: 4, title: "Departure", activities: "Final swim, check-out, transfer to Male, shopping in Male (if time), airport departure" }
    ],
    inclusions: [
      "Return flights",
      "4-star beach/water villa",
      "Full board meals (breakfast, lunch, dinner)",
      "Speedboat transfers",
      "Snorkeling equipment",
      "One excursion",
      "Maldives visa free"
    ],
    exclusions: [
      "Water sports charges",
      "Spa treatments",
      "Alcoholic beverages",
      "Additional excursions",
      "Travel insurance"
    ]
  },
  "bali": {
    name: "Bali Island Paradise",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=600&fit=crop",
    price: "₹48,999",
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 people",
    description: "Immerse yourself in Balinese culture, stunning rice terraces, ancient temples, and beautiful beaches. Perfect blend of spirituality and tropical paradise.",
    highlights: [
      "Ubud rice terraces and monkey forest",
      "Temple tours (Tanah Lot, Uluwatu)",
      "Kecak fire dance performance",
      "Balinese cooking class",
      "Beach clubs and water sports",
      "Traditional spa treatments"
    ],
    itinerary: [
      { day: 1, title: "Bali Arrival", activities: "Airport pickup, hotel check-in, Kuta Beach, evening at Seminyak beach clubs" },
      { day: 2, title: "Ubud Culture", activities: "Tegalalang Rice Terraces, Monkey Forest, Ubud Palace, art market, traditional dance" },
      { day: 3, title: "Temple Tour", activities: "Tanah Lot Temple, Uluwatu Temple, Kecak fire dance, Jimbaran seafood dinner" },
      { day: 4, title: "Water Sports", activities: "Nusa Dua water sports, beach relaxation, spa treatment, shopping" },
      { day: 5, title: "Departure", activities: "Free morning, souvenir shopping, airport transfer" }
    ],
    inclusions: [
      "Return flights",
      "4-star hotel accommodation",
      "Daily breakfast",
      "All transfers in AC vehicle",
      "Temple entry fees",
      "Kecak dance tickets",
      "Indonesia visa on arrival"
    ],
    exclusions: [
      "Lunch and dinner",
      "Water sports charges",
      "Spa treatments",
      "Personal expenses",
      "Travel insurance"
    ]
  },
  "europe": {
    name: "European Grand Tour",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=600&fit=crop",
    price: "₹1,25,999",
    duration: "10 Days / 9 Nights",
    groupSize: "15-30 people",
    description: "Experience the best of Europe with this multi-country tour covering iconic cities, historical landmarks, and breathtaking landscapes across 4-5 countries.",
    highlights: [
      "Eiffel Tower and Louvre Museum",
      "Swiss Alps and Jungfraujoch",
      "Venice canals gondola ride",
      "Rome Colosseum and Vatican",
      "Amsterdam canal cruise",
      "Brussels Grand Place"
    ],
    itinerary: [
      { day: 1, title: "India to Paris", activities: "Flight departure, arrival Paris, hotel check-in, evening Eiffel Tower, Seine River cruise" },
      { day: 2, title: "Paris Sightseeing", activities: "Louvre Museum, Arc de Triomphe, Champs-Élysées, Notre Dame, Montmartre" },
      { day: 3, title: "Paris to Switzerland", activities: "Drive to Switzerland, Zurich city tour, Lake Zurich, Swiss chocolate experience" },
      { day: 4, title: "Swiss Alps", activities: "Jungfraujoch excursion, Mt. Titlis cable car, Interlaken, Swiss village exploration" },
      { day: 5, title: "Switzerland to Italy", activities: "Drive to Venice via scenic Alps, Venice arrival, evening gondola ride" },
      { day: 6, title: "Venice to Rome", activities: "Venice walking tour, St. Mark's Square, drive to Rome via Florence (photo stop)" },
      { day: 7, title: "Rome Vatican", activities: "Vatican Museum, Sistine Chapel, St. Peter's Basilica, Roman Forum, Trevi Fountain" },
      { day: 8, title: "Rome to Amsterdam", activities: "Flight to Amsterdam, canal cruise, Red Light District, Dam Square" },
      { day: 9, title: "Amsterdam to Brussels", activities: "Zaanse Schans windmills, drive to Brussels, Grand Place, Manneken Pis, Belgian chocolates" },
      { day: 10, title: "Departure", activities: "Brussels city tour, last-minute shopping, airport transfer, flight back to India" }
    ],
    inclusions: [
      "Return international flights",
      "3-4 star hotels throughout",
      "Daily breakfast and most dinners",
      "Luxury coach transportation",
      "Schengen visa assistance",
      "Entry to major attractions",
      "English-speaking tour guide",
      "All inter-country transfers"
    ],
    exclusions: [
      "Some lunches and dinners",
      "Optional excursions",
      "City taxes (if applicable)",
      "Personal shopping",
      "Travel insurance (recommended)",
      "Tips for guide and driver"
    ]
  }
};

export default function InternationalPackageDetail() {
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
          <Button onClick={() => router.push("/packages/international")}>
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
              onClick={() => router.push("/packages/international")}
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
                <Plane className="w-5 h-5" />
                <span>Flights Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-secondary text-secondary" />
                <span>4.9/5 Rating</span>
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
                    <h3 className="text-xl font-bold mb-4 text-primary">Package Includes</h3>
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
                      <Plane className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">Flights</p>
                        <p className="text-muted-foreground">Included</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Globe className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">Visa</p>
                        <p className="text-muted-foreground">Assistance provided</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-center text-muted-foreground">
                      💬 Questions about visas, flights, or customization? Chat with us now!
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
