import { Check, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "FREE",
    price: "$0",
    period: "/forever",
    description: "Great for individuals and casual use.",
    featured: false,
    features: [
      "Unlimited link shortening",
      "Basic click counter",
      "HTTPS security",
      "QR code (basic)",
      "Cross-device support",
    ],
    buttonText: "Get Started Free",
    buttonHref: "#signup",
  },
  {
    name: "PRO",
    price: "$9",
    period: "/per month",
    description: "For creators, marketers, and power users.",
    featured: true,
    features: [
      "Everything in Free",
      "Custom short links",
      "Advanced analytics",
      "UTM builder",
      "QR code (custom)",
      "Browser extension",
      "Priority support",
    ],
    buttonText: "Start 14-Day Trial",
    buttonHref: "#trial",
  },
  {
    name: "BUSINESS",
    price: "$29",
    period: "/per month",
    description: "For teams and growing companies.",
    featured: false,
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Developer API",
      "Bulk link creation",
      "White-label domain",
      "App integrations",
      "Dedicated support",
    ],
    buttonText: "Subscribe Now",
    buttonHref: "#subscribe",
  },
];

const Pricing = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            PRICING
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            No hidden fees. Start free, scale when you're ready.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-[#5842F4] text-white shadow-[0_20px_50px_rgba(88,66,244,0.28)] lg:-translate-y-2"
                  : "bg-white text-slate-900 border border-slate-100 shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                {/* Plan Tier Label */}
                <span
                  className={`text-xs font-bold tracking-wider uppercase ${
                    plan.featured ? "text-purple-200" : "text-slate-400"
                  }`}
                >
                  {plan.name}
                </span>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      plan.featured ? "text-purple-200" : "text-slate-400"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Plan Description */}
                <p
                  className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                    plan.featured ? "text-purple-100/90" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      {/* Checkmark Circle */}
                      <div
                        className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          plan.featured
                            ? "bg-white/20 text-white"
                            : "bg-[#f0effe] text-[#5842F4]"
                        }`}
                      >
                        <Check size={12}/>
                      </div>

                      <span
                        className={`text-xs sm:text-sm font-normal ${
                          plan.featured ? "text-purple-50" : "text-slate-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call-to-Action Button */}
              <div className="mt-10">
                <a
                  href={plan.buttonHref}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    plan.featured
                      ? "bg-white text-[#5842F4] hover:bg-purple-50 shadow-sm"
                      : "bg-[#5842F4] text-white hover:bg-[#4730e6] shadow-sm"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  
                  <ArrowRight size={16}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
