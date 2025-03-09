
import { DemoBackgroundPaths } from "@/components/DemoBackgroundPaths";
import { BentoDemo } from "@/components/BentoDemo";
import { Logos3Demo } from "@/components/Logos3Demo";
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import { GlobeDemo } from "@/components/GlobeDemo";

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full">
        <DemoBackgroundPaths />
      </section>
      
      <section className="w-full max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <BentoDemo />
      </section>

      <section className="w-full bg-background">
        <Logos3Demo />
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Interactive Playground</h2>
        <BackgroundBoxesDemo />
      </section>
      
      <section className="w-full max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Global Reach</h2>
        <div className="flex justify-center">
          <GlobeDemo />
        </div>
      </section>
    </div>
  );
};

export default Index;
