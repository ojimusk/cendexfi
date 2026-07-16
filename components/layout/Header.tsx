export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Cendex</h1>
        <p className="text-sm text-[#A0A0A0]">
          Perpetual DEX
        </p>
      </div>

      <button className="rounded-xl border border-[#252525] px-4 py-2 text-sm text-white">
        Connect
      </button>
    </header>
  );
}
