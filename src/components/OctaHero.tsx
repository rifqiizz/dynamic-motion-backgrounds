
import { Button } from "@/components/ui/button";
import { Anchor, Radar, Ship, Satellite, Globe } from "lucide-react";

const OctaHero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background z-0" />
      
      {/* Wave graphic at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 65C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="currentColor" 
            className="text-background" 
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-primary">OCTA VMS</span>
              <span className="block text-gray-900 dark:text-white">Vessel Monitoring System</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-gray-600 dark:text-gray-300">
              Advanced maritime surveillance technology to monitor, track, and protect your fleet with real-time data and analytics.
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg">
                Request Demo
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto max-w-lg">
              {/* Floating icons around the image */}
              <div className="absolute -left-6 -top-6 z-10 rounded-full bg-primary/20 p-3 shadow-lg">
                <Ship className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -right-6 top-1/4 z-10 rounded-full bg-primary/20 p-3 shadow-lg">
                <Radar className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute bottom-1/4 -left-10 z-10 rounded-full bg-primary/20 p-3 shadow-lg">
                <Satellite className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -bottom-8 right-10 z-10 rounded-full bg-primary/20 p-3 shadow-lg">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              
              <div className="relative rounded-xl bg-white p-2 shadow-2xl">
                <div className="overflow-hidden rounded-lg">
                  <div className="bg-primary/10 aspect-video rounded-lg flex items-center justify-center">
                    <div className="text-primary text-4xl font-bold flex items-center">
                      <Ship className="h-12 w-12 mr-3" />
                      OCTA VMS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OctaHero };
