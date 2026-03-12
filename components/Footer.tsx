"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-mauve-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-burgundy-600 flex items-center justify-center text-white font-display font-bold text-xs">
            O
          </span>
          <span className="font-display font-bold text-gray-800">Orvex</span>
        </div>

        {/* Nav placeholders */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          {["Home", "About", "Contact", "Privacy", "Terms"].map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-burgundy-600 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Social placeholders */}
        <div className="flex items-center gap-4">
          {[
            {
              label: "Instagram",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth={0} />
                </svg>
              ),
            },
            {
              label: "Twitter / X",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
          ].map(({ label, icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="text-gray-400 hover:text-burgundy-600 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} Orvex. All rights reserved. · Built with ❤️ for fashion students.
      </p>
    </footer>
  );
}
