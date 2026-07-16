const menus = [
  "Dashboard",
  "Markets",
  "Trade",
  "Points",
  "Account",
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-[#252525] bg-[#151515]">
      <div className="flex justify-around py-3 text-xs text-[#A0A0A0]">
        {menus.map((menu) => (
          <span key={menu}>{menu}</span>
        ))}
      </div>
    </nav>
  );
}
