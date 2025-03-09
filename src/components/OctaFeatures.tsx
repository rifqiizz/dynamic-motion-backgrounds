
import { Anchor, BarChart3, Bell, Flag, Globe, Map, Navigation, Radar, Search, Ship, Shield, Satellite } from "lucide-react";

const features = [
  {
    name: "Real-time Tracking",
    description: "Monitor vessel locations and movements with up-to-the-minute accuracy and precision.",
    icon: Navigation,
  },
  {
    name: "Global Coverage",
    description: "Comprehensive monitoring across all ocean territories and international waters.",
    icon: Globe,
  },
  {
    name: "Alert System",
    description: "Instant notifications for unauthorized zone entries, speed violations, and potential hazards.",
    icon: Bell,
  },
  {
    name: "Data Analytics",
    description: "Advanced analytics platform for route optimization, fuel efficiency, and performance metrics.",
    icon: BarChart3,
  },
  {
    name: "Compliance Reporting",
    description: "Automated reporting to meet maritime regulations and compliance requirements.",
    icon: Flag,
  },
  {
    name: "Security Monitoring",
    description: "Enhanced security features to protect against piracy and unauthorized access.",
    icon: Shield,
  },
];

const OctaFeatures = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Comprehensive Vessel Monitoring Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            OCTA VMS provides cutting-edge technology for maritime fleet management and surveillance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative p-6 bg-background border rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{feature.name}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { OctaFeatures };
