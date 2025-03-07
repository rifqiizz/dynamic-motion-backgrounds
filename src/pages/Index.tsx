
import { DemoBackgroundPaths } from "@/components/DemoBackgroundPaths";
import { BentoDemo } from "@/components/BentoDemo";

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
    </div>
  );
};

export default Index;
