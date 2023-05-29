import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-white px-6 py-3 flex items-center justify-between">
      <h1 className="text-4xl text-[#5560b3] font-extrabold">
        A<span>I</span>
        <span className="text-black text-5xl leading-3">.</span>
      </h1>

      <DarkModeSwitch />
    </header>
  );
}
