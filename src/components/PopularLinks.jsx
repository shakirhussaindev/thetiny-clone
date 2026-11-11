import { Copy, QrCode, Download, X } from "lucide-react";
import { useState } from "react";
import { LuMousePointerClick } from "react-icons/lu";

const popularLinksData = [
  {
    id: 1,
    shortCode: "ARLSeN",
    shortUrl: "https://thetiny.site/ARLSeN",
    originalUrl:
      "https://api.whatsapp.com/send?phone=8801880811048&text=I+want+to+be+a+partner+of+bangla+puzzle",
    clicks: 433,
  },
  {
    id: 2,
    shortCode: "BArxCj",
    shortUrl: "https://thetiny.site/BArxCj",
    originalUrl: "https://leena45945.softr.app",
    clicks: 276,
  },
  {
    id: 3,
    shortCode: "kLrnXd",
    shortUrl: "https://thetiny.site/kLrnXd",
    originalUrl:
      "https://supportersframe.com/blog/supportersframecom-introduces-qr-codes-for-frame-links",
    clicks: 91,
  },
  {
    id: 4,
    shortCode: "qQNTp0",
    shortUrl: "https://thetiny.site/qQNTp0",
    originalUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3aBIiGp4uunkBsQVLy_zLWcwkWhILOqEYa45tVdHsO38Xrg/viewform",
    clicks: 73,
  },
  {
    id: 5,
    shortCode: "wXcB7y",
    shortUrl: "https://thetiny.site/wXcB7y",
    originalUrl: "https://maps.app.goo.gl/3ezKFEhd5CHg1TzG7",
    clicks: 41,
  },
];

const PopularLinks = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // QR Code Download
  const handleDownloadQR = async () => {
    if (!selectedLink) return;
    try {
      setIsDownloading(true);
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(
        selectedLink.shortUrl,
      )}`;

      const response = await fetch(qrApiUrl);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `QR-${selectedLink.shortCode}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading QR:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Most Popular Links
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Check out the most clicked links on our platform
          </p>
        </div>

        {/* Links List */}
        <div className="flex flex-col space-y-4">
          {popularLinksData.map((item) => (
            <div
              key={item.id}
              
              className="relative w-full bg-[#F9FAFB] border border-slate-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.08)] "
            >
              {/* Left Side: URLs */}
              <div className="min-w-0 flex-1">
                {/* Short URL (Purple tone like screenshot) */}
                <a
                  href={item.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-semibold text-[#5842F4] hover:underline transition-colors block break-all"
                >
                  {item.shortUrl}
                </a>

                {/* Original URL with Hover Tooltip */}
                <div className="relative group/tooltip inline-block max-w-full mt-1">
                  {/* Truncated Text */}
                  <p className="text-xs text-slate-400 truncate max-w-xs sm:max-w-md md:max-w-xl cursor-help select-none">
                    {item.originalUrl}
                  </p>

                  {/* Dark Floating Tooltip on Hover */}
                  <div className="absolute left-0 top-full mb-3 hidden group-hover/tooltip:flex flex-col z-50">
                    <div className="bg-[#111827] text-white text-[11px] font-mono px-3 py-1.5 rounded-md shadow-2xl border border-slate-800 break-all max-w-xs sm:max-w-md md:max-w-lg leading-relaxed">
                      {item.originalUrl}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Clicks & Action Buttons */}
              <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                {/* Click count */}
                <div className="bg-white px-2 py-1 rounded-3xl flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-medium">
                  <LuMousePointerClick className="w-4 h-4 text-slate-400" />
                  <span>{item.clicks} clicks</span>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(item.id, item.shortUrl)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#5842F4] hover:bg-[#4730e6] text-white text-xs font-semibold rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <Copy size={14} />
                  <span>{copiedId === item.id ? "Copied!" : "Copy"}</span>
                </button>

                {/* QR Button */}
                <button
                  onClick={() => setSelectedLink(item)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#f0effe] hover:bg-[#e4e0fd] text-[#5842F4] text-xs font-semibold rounded-lg transition-all active:scale-95 cursor-pointer"
                >
                  <QrCode size={14} />
                  <span>QR</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QR Code Modal */}
      {selectedLink && (
        <div
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedLink(null)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 sm:p-7 relative border border-slate-100 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedLink(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Modal Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#f2efff] text-[#5842F4] flex items-center justify-center mx-auto mb-3">
              <QrCode size={20} />
            </div>

            {/* Modal Header */}
            <div className="text-center mb-5">
              <h3 className="text-lg font-bold text-slate-900">QR Code</h3>
              <p className="text-[11px] text-slate-400 mt-1 break-all px-2 line-clamp-2">
                {selectedLink.originalUrl}
              </p>
            </div>

            {/* QR Code Display */}
            <div className="flex items-center justify-center p-3 bg-white rounded-xl border border-slate-100 shadow-inner mb-6">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
                  selectedLink.shortUrl,
                )}`}
                alt="Link QR Code"
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownloadQR}
              disabled={isDownloading}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#5842F4] hover:bg-[#4730e6] text-white text-sm font-semibold transition-colors shadow-sm disabled:opacity-75 cursor-pointer"
            >
              <Download size={16} />
              <span>
                {isDownloading ? "Downloading..." : "Download QR Code"}
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularLinks;
