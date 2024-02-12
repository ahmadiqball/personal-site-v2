import LiquidLoader from '@/components/layout/liquid-loader';

export default function Loading(): JSX.Element {
  return (
    <div className="fixed top-0 left-0 z-[100]">
      <div className="min-w-[100vw] min-h-screen flex items-center justify-center">
        <LiquidLoader />
      </div>
    </div>
  );
}
