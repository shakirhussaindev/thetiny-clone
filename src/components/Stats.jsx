const stats = [
  { value: "100K+", label: "Links Created" },
  { value: "1M+", label: "Total Clicks" },
  { value: "180+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

const Stats = () => {
  return (
    <section className="w-full bg-[#5842F4] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {item.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm md:text-base font-normal text-purple-100/90">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
