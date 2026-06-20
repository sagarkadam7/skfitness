import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Sagar!%20I%27m%20interested%20in%20premium%20online%20fitness%20coaching.`}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/20 transition-transform hover:scale-105 sm:right-6 sm:h-14 sm:w-14 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] lg:bottom-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
}
