import { Zap, BarChart3, Globe, QrCode, Lock, Clock } from "lucide-react";

const featuresData = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Shorten URLs instantly with our optimized infrastructure",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track clicks, referrers, locations, and devices",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Fast redirects from anywhere in the world",
  },
  {
    icon: QrCode,
    title: "QR Codes",
    description: "Generate QR codes for any shortened link",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "All links are encrypted and malware scanned",
  },
  {
    icon: Clock,
    title: "Expiration Control",
    description: "Set expiry dates or click limits",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#fbfbfe]/50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Our Platform?
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-500">
            Everything you need to manage and track your links
          </p>
        </div>

        {/* 3x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-slate-200 hover:shadow-md transition-all flex flex-col items-start"
              >
                {/* Purple Icon */}
                <div className="text-[#5842F4] mb-4">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
