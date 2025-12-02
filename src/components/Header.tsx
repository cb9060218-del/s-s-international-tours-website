import Link from "next/link";
import { Phone, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/916362673241";

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md shadow-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
              S S International Tours
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Your Journey, Our Passion</p>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition">
              Home
            </Link>
            <Link href="/packages/domestic" className="text-sm font-medium hover:text-primary transition">
              Domestic Tours
            </Link>
            <Link href="/packages/international" className="text-sm font-medium hover:text-primary transition">
              International Tours
            </Link>
            <Link href="/#rental" className="text-sm font-medium hover:text-primary transition">
              Vehicle Rental
            </Link>
            <Button 
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-md transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-muted pt-4 animate-in slide-in-from-top">
            <div className="flex flex-col gap-3">
              <Link 
                href="/" 
                className="text-sm font-medium hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/packages/domestic" 
                className="text-sm font-medium hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Domestic Tours
              </Link>
              <Link 
                href="/packages/international" 
                className="text-sm font-medium hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                International Tours
              </Link>
              <Link 
                href="/#rental" 
                className="text-sm font-medium hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vehicle Rental
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-muted">
                <a href="tel:+916362673241" className="flex items-center gap-2 text-sm py-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 6362673241</span>
                </a>
                <Button 
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                  onClick={() => {
                    window.open(whatsappLink, '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}