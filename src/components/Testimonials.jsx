import { Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    quote: '"A good platform for Link management."',
    name: "Nadim Majid",
    role: "User",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#fafafa]/50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            TESTIMONIALS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[340px] bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#5842F4] text-[#5842F4]"
                  />
                ))}
              </div>

              {/* Review Quote */}
              <p className="text-sm font-medium text-slate-700 leading-relaxed mb-6">
                {item.quote}
              </p>

              {/* Author Info */}
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
