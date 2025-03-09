
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Ship, Menu, X } from "lucide-react";

const OctaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Ship className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">OCTA VMS</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-primary">
            Home
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Features
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Solutions
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            About
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Log In
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-b">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Solutions
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="mt-4 flex flex-col space-y-2">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
              Log In
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export { OctaNavbar };
