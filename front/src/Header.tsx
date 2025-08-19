import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: "概要", href: "/about" },
    { name: "採用", href: "/recruit" },
    { name: "活動履歴", href: "/activity" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3">
        {/* ロゴ（仮） */}
        <div className="text-xl font-bold text-slate-800">企業ロゴ</div>

        {/* メニューアイコン */}
        <button
          className="text-slate-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* メニュー部分 */}
      {isOpen && (
        <nav className="w-full bg-white shadow-md animate-slide-down">
          <ul className="flex flex-col items-center gap-6 py-6">
            {pages.map((page) => (
              <li key={page.name}>
                <a
                  href={page.href}
                  className="text-lg font-medium text-slate-800 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)} // クリックで閉じる
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
