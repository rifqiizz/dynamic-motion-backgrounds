
import { Footer } from "@/components/Footer";
import { OctaNavbar } from "@/components/OctaNavbar";
import { OctaHero } from "@/components/OctaHero";
import { OctaFeatures } from "@/components/OctaFeatures";
import { OctaTestimonials } from "@/components/OctaTestimonials";
import { GlobeDemo } from "@/components/GlobeDemo";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <OctaNavbar />
      
      <main className="flex-grow">
        <OctaHero />
        
        <section className="w-full max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-12">Advanced Monitoring Technology</h2>
          <OctaFeatures />
        </section>

        <section className="w-full bg-primary/5 py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Global Fleet Management</h2>
            <div className="flex justify-center relative h-[500px]">
              <GlobeDemo />
            </div>
          </div>
        </section>

        <OctaTestimonials />
        
        <section className="w-full bg-primary text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Maritime Operations?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with OCTA VMS today and experience the future of vessel monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium">
                Schedule a Demo
              </button>
              <button className="bg-primary-foreground/10 border border-white text-white hover:bg-primary-foreground/20 px-8 py-3 rounded-md font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
