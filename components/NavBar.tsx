import { FaHome, FaCompass, FaUser } from "react-icons/fa";

const items = [
  { label: "Trang chủ", icon: FaHome, active: true },
  { label: "Khám phá", icon: FaCompass, active: false },
  { label: "Hồ sơ", icon: FaUser, active: false },
];

export default function NavBar() {
  return (
    <nav
      className="
        fixed
        z-50
        bg-black/90
        text-white
        /* mobile: bottom bar */
        bottom-0
        left-0
        right-0
        flex
        h-16
        items-center
        justify-around
        border-t
        border-white/10
        /* desktop: left sidebar */
        md:top-0
        md:right-auto
        md:h-screen
        md:w-20
        md:flex-col
        md:justify-start
        md:gap-8
        md:pt-8
        md:border-t-0
        md:border-r
      "
    >
      {items.map(({ label, icon: Icon, active }) => (
        <button
          key={label}
          className={`flex flex-col items-center gap-1 text-xs ${
            active ? "text-white" : "text-white/60"
          }`}
        >
          <Icon className="text-2xl" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
