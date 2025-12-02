"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Car, 
  MapPin, 
  Star, 
  Phone, 
  MessageCircle,
  Globe,
  Palmtree,
  Mountain,
  Ship,
  Bus,
  Users,
  CheckCircle2,
  ArrowRight,
  Info
} from "lucide-react";
import Link from "next/link";

const domesticPackages = [
  { id: "goa", name: "Goa", image: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800&h=600&fit=crop", price: "₹15,999", duration: "4D/3N" },
  { id: "kerala", name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop", price: "₹18,999", duration: "5D/4N" },
  { id: "ooty", name: "Ooty", image: "https://images.unsplash.com/photo-1587974928442-77dc3e9990a72?w=800&h=600&fit=crop", price: "₹12,999", duration: "3D/2N" },
  { id: "shimla", name: "Shimla", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop", price: "₹16,999", duration: "4D/3N" },
  { id: "rajasthan", name: "Rajasthan", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop", price: "₹22,999", duration: "6D/5N" },
  { id: "andaman", name: "Andaman", image: "https://images.unsplash.com/photo-1589197331516-7e2eef331f26?w=800&h=600&fit=crop", price: "₹28,999", duration: "5D/4N" },
];

const internationalPackages = [
  { id: "dubai", name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop", price: "₹45,999", duration: "5D/4N" },
  { id: "singapore", name: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop", price: "₹52,999", duration: "5D/4N" },
  { id: "thailand", name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop", price: "₹38,999", duration: "6D/5N" },
  { id: "maldives", name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop", price: "₹65,999", duration: "4D/3N" },
  { id: "bali", name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop", price: "₹48,999", duration: "5D/4N" },
  { id: "europe", name: "Europe", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop", price: "₹1,25,999", duration: "10D/9N" },
];

const vehicles = [
  { name: "Sedan", icon: Car, capacity: "4 Seater", price: "₹12/km" },
  { name: "SUV", icon: Car, capacity: "6 Seater", price: "₹15/km" },
  { name: "Innova", icon: Car, capacity: "7 Seater", price: "₹18/km" },
  { name: "Tempo Traveller", icon: Bus, capacity: "12-17 Seater", price: "₹25/km" },
  { name: "Mini Bus", icon: Bus, capacity: "20-27 Seater", price: "₹35/km" },
  { name: "Tourist Bus", icon: Bus, capacity: "35-45 Seater", price: "₹50/km" },
];

const testimonials = [
  { name: "Rajesh Kumar", rating: 5, text: "Excellent service! Our Kerala trip was perfectly organized. Highly recommend S S International Tours." },
  { name: "Priya Sharma", rating: 5, text: "Amazing experience with Dubai tour. Everything was well-planned and the team was very supportive." },
  { name: "Amit Patel", rating: 5, text: "Booked a tempo traveller for our family trip. Clean vehicle and professional driver. Great service!" },
];

export default function Home() {
  const whatsappNumber = "916362673241";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Plan Your Perfect Trip<br />With One Click
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Explore domestic and international destinations with our curated tour packages, 
            comfortable car rentals, and personalized travel services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Packages
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white hover:bg-white/90 text-primary border-white font-semibold text-lg px-8 py-6"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Book on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              About S S International Tours & Travels
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience in the travel industry, we are committed to creating 
              unforgettable journeys for our clients. From exotic international destinations 
              to serene domestic getaways, we handle every detail with care and professionalism.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
                <p className="text-muted-foreground">Reliable and professional travel solutions</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">Experienced travel consultants at your service</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Value</h3>
                <p className="text-muted-foreground">Competitive prices with premium quality</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Domestic Packages */}
      <section id="packages" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Domestic Tour Packages</h2>
            </div>
            <p className="text-muted-foreground text-lg">Explore the beauty of India with our specially curated packages</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {domesticPackages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{pkg.name}</span>
                    <span className="text-primary">{pkg.price}</span>
                  </CardTitle>
                  <CardDescription>Starting from {pkg.price} per person</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Link href={`/packages/domestic/${pkg.id}`} className="flex-1">
                      <Button 
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Info className="mr-2 w-4 h-4" />
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(`${whatsappLink}?text=Hi, I'm interested in the ${pkg.name} package`, '_blank')}
                    >
                      <MessageCircle className="mr-2 w-4 h-4" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/packages/domestic">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All Domestic Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* International Packages */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">International Tour Packages</h2>
            </div>
            <p className="text-muted-foreground text-lg">Discover the world with our exciting international destinations</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {internationalPackages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{pkg.name}</span>
                    <span className="text-primary">{pkg.price}</span>
                  </CardTitle>
                  <CardDescription>Starting from {pkg.price} per person</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Link href={`/packages/international/${pkg.id}`} className="flex-1">
                      <Button 
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Info className="mr-2 w-4 h-4" />
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(`${whatsappLink}?text=Hi, I'm interested in the ${pkg.name} package`, '_blank')}
                    >
                      <MessageCircle className="mr-2 w-4 h-4" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/packages/international">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All International Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Car/Bus Rental Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Car className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Car & Bus Rental Services</h2>
            </div>
            <p className="text-muted-foreground text-lg">Comfortable and reliable transportation for your journey</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <vehicle.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle>{vehicle.name}</CardTitle>
                  <CardDescription>{vehicle.capacity}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary mb-4">{vehicle.price}</p>
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    onClick={() => window.open(`${whatsappLink}?text=Hi, I'd like to rent a ${vehicle.name}`, '_blank')}
                  >
                    <MessageCircle className="mr-2 w-4 h-4" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Chat on WhatsApp for Custom Requirements
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Contact us on WhatsApp for instant booking, customized packages, and quick assistance
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            WhatsApp: +91 6362673241
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">Real experiences from real travelers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review', '_blank')}
            >
              <Star className="mr-2 w-5 h-5" />
              Leave a Google Review
            </Button>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground text-lg">42 Vivekananda Circle Road, Mysuru, Karnataka</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.9846267742843!2d76.65394131482192!3d12.295546391389745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7a5e09c3e2b5%3A0x5c0c9a9a6f5f5f5f!2sVivekananda%20Circle%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}