import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">S S International Tours & Travels</h3>
            <p className="text-sm opacity-90">
              Your trusted travel partner for domestic and international tours, car rentals, and memorable experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+916362673241" className="flex items-start gap-2 hover:opacity-80 transition">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 6362673241</span>
              </a>
              <a href="https://wa.me/916362673241" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:opacity-80 transition">
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>WhatsApp: +91 6362673241</span>
              </a>
              <a href="mailto:info@ssinternationaltours.com" className="flex items-start gap-2 hover:opacity-80 transition">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@ssinternationaltours.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Location</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>42 Vivekananda Circle Road,<br />Mysuru, Karnataka, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} S S International Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
