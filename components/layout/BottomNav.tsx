import Link from "next/link";

const menus = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Markets",
    href: "/markets",
  },
  {
    name: "Trade",
    href: "/trade",
  },
  {
    name: "Points",
    href: "/points",
  },
  {
    name: "Account",
    href: "/account",
  },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-[#252525] bg-[#151515]">
      <div className="flex justify-around py-3 text-xs text-[#A0A0A0]">

        {menus.map((menu) => (
          <Link
            key={menu.name}
            href={menu.href}
            className="transition hover:text-white"
          >
            {menu.name}
          </Link>
        ))}

      </div>
    </nav>
  );
}
