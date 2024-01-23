import LiquidLoader from "@/components/layout/liquid-loader";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0">
      <div className="min-w-[100vw] min-h-screen flex items-center justify-center">
        <LiquidLoader />
      </div>
    </div>
  );
}
