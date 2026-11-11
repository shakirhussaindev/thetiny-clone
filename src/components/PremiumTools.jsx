import { Check } from "lucide-react";

const features = [
  "Custom branded short links",
  "UTM parameter builder",
  "Powerful analytics dashboard",
  "QR Code generator (PNG/SVG)",
  "REST API with full documentation",
];

const analyticsData = [
  { url: "shorturl.bd/ig9Kp2", clicks: "1,247", progress: 95 },
  { url: "shorturl.bd/yt3Nm8", clicks: "589", progress: 62 },
  { url: "shorturl.bd/lk7Rv1", clicks: "312", progress: 40 },
  { url: "shorturl.bd/fb2Wx9", clicks: "198", progress: 24 },
];

const PremiumTools = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Content & Features */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tag / Badge */}
            <span className="text-xs font-bold tracking-wider text-[#5842F4] uppercase mb-4">
              PREMIUM
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Unlock powerful tools for serious growth.
            </h2>

            {/* Subtitle Description */}
            <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
              Go beyond basic shortening with a full suite of marketing and
              developer tools — custom branded links, UTM builders, deep
              analytics, QR codes, and a REST API for your apps.
            </p>

            {/* Checkmark List */}
            <ul className="mt-8 space-y-3.5">
              {features.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Purple Checkmark Circle */}
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f0effe] flex items-center justify-center text-[#5842F4]">
                    <Check size={12}/>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Link Analytics Dashboard Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] bg-[#5842F4] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-purple-500/10">
              {/* Card Title */}
              <h3 className="text-sm sm:text-base font-semibold text-white mb-6 sm:mb-8">
                Link Analytics Dashboard
              </h3>

              {/* Analytics List */}
              <div className="space-y-6">
                {analyticsData.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-mono text-purple-100/90 font-medium">
                        {item.url}
                      </span>
                      <span className="font-bold text-white tracking-tight">
                        {item.clicks}
                      </span>
                    </div>

                    {/* Visual Progress / Click Indicator Bar */}
                    <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
                      <div
                        className="bg-white/30 h-full rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumTools;
