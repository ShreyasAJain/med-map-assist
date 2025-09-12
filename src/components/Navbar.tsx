import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, User, MapPin, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="medical-gradient p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">MediDiagnose</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/symptom-checker" className="text-muted-foreground hover:text-primary transition-medical">
              Symptom Checker
            </Link>
            <Link to="/hospitals" className="text-muted-foreground hover:text-primary transition-medical flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Find Hospitals</span>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="medical" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/symptom-checker" 
              className="block text-muted-foreground hover:text-primary transition-medical"
              onClick={() => setIsMenuOpen(false)}
            >
              Symptom Checker
            </Link>
            <Link 
              to="/hospitals" 
              className="block text-muted-foreground hover:text-primary transition-medical"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Hospitals
            </Link>
            <div className="flex space-x-2 pt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button variant="medical" size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;