import { Lock, ArrowRight, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8f9ff] via-[#f5f6ff] to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Soft Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-200/40 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* 1. Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0effe] border border-[#dcd8fd] text-[#5842F4] text-xs sm:text-sm font-medium mb-6 shadow-sm">
          {/* Trend/Pulse Icon */}
          <TrendingUp size={16} />
          <span>Trusted by thousands of users</span>
        </div>

        {/* 2. Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Shorten Your URL <br />
          <span className="text-[#5842F4]">in seconds</span>
        </h1>

        {/* 3. Subtitle Description */}
        <p className="mt-5 text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
          Create short, memorable links that you can share anywhere.{" "}
          <br className="hidden sm:inline" />
          Track every click with powerful analytics.
        </p>

        {/* 4. Center CTA Card */}
        <div className="mt-10 w-full max-w-[540px] mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(88,66,244,0.07)] border border-gray-100/80 transition-all">
          {/* Card Lock Icon */}
          <div className="w-12 h-12 mx-auto rounded-xl bg-[#f2efff] flex items-center justify-center text-[#5842F4] mb-5">
            <Lock />
          </div>

          {/* Card Title */}
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            Login to make your URL short
          </h2>

          {/* Card Description */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mb-8 leading-relaxed">
            Sign in or create a free account to start shortening links,
            generating QR codes, and tracking every click in real time.
          </p>

          {/* Card Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Login Button */}
            <a
              href="#login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#5842F4] hover:bg-[#4833e0] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow"
            >
              <Lock size={14} />
              <span>Login to Make URL</span>
            </a>

            {/* Sign Up Free Button */}
            <a
              href="#signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <span>Sign Up Free</span>
              <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
