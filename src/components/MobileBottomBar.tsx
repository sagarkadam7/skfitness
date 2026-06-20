import Link from "next/link";
import FitToolsIcon from "@/components/icons/FitToolsIcon";

export default function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-card-border bg-background/95 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg gap-2 px-3 pt-3">
        <Link
          href="#tools"
          className="btn-outline flex flex-1 items-center justify-center gap-1.5 rounded-full py-3.5 text-[10px] font-bold uppercase tracking-wider"
        >
          <FitToolsIcon className="h-3.5 w-3.5 text-coral" />
          Tools
        </Link>
        <Link
          href="#book"
          className="btn-primary flex-[1.35] rounded-full py-3.5 text-center text-[10px] font-bold uppercase tracking-wider"
        >
          Book Free Call
        </Link>
      </div>
    </div>
  );
}
