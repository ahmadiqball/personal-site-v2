import DarkModeSwitch from './dark-mode-switch';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-40 w-[calc(100vw-16px)] bg-white px-6 py-3 mx-2 mt-2 flex items-center justify-between rounded-xl">
      <h1 className="text-3xl text-[#5560b3] font-extrabold">
        AI
        <span className="text-black text-5xl leading-3">.</span>
      </h1>

      <DarkModeSwitch />
    </header>
  );
}
