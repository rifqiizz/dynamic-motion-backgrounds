
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "OCTA VMS has revolutionized our fleet management capabilities. We've seen a 30% reduction in operational costs since implementation.",
    author: "John Anderson",
    title: "Fleet Manager, Atlantic Shipping"
  },
  {
    content: "The real-time tracking and alert systems have dramatically improved our security protocols and response times.",
    author: "Maria Rodriguez",
    title: "Security Director, Pacific Marine"
  },
  {
    content: "Compliance reporting used to take days. With OCTA VMS, we generate comprehensive reports in minutes, saving countless hours.",
    author: "Robert Chen",
    title: "Operations Officer, Global Freight"
  }
];

const OctaTestimonials = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Trusted by Maritime Leaders
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our clients say about OCTA VMS solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-md">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="mb-4 text-lg">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-muted-foreground text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { OctaTestimonials };
