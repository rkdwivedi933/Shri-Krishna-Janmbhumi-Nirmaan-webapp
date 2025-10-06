import React from "react";

const footerData = {
  sevaLinks: [
    { label: "Square Feet Seva", href: "#" },
    { label: "Anna Daan Seva", href: "#" },
    { label: "Gau Seva", href: "#" },
  ],
  socialLinks: [
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M22 8c0-1.11-.89-2-2-2H4C2.89 6 2 6.89 2 8v8c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8z" fill="black" />
          <path d="M10 15l6-3.5L10 8v7z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="black" />
          <circle cx="12" cy="12" r="3" fill="white" />
          <circle cx="17" cy="7" r="1" fill="white" />
        </svg>
      ),
    },
    {
       name: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v6.99C18.34 21.12 22 16.99 22 12z"
          fill="black"
        />
      </svg>
      ),
    },
  ],
  termsLinks: [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 pt-12">
      {/* Donate banner */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl p-6 grid grid-cols-12 gap-6 items-center shadow-sm">
          <div className="col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              Donate for Construction of Radha Krishna <br /> Temple
            </h2>
            <p className="mt-3 text-gray-700">Recieve Maha Prasadam at your home.</p>
          </div>
          <div className="col-span-5 flex justify-end">
            <button className="px-6 py-3 rounded-lg bg-black text-white font-medium shadow hover:shadow-lg transition-shadow">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mt-20 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
            {/* Seva links */}
            <nav className="flex gap-6 text-gray-300">
              {footerData.sevaLinks.map((link, i) => (
                <a key={i} href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex gap-4">
              {footerData.socialLinks.map((social, i) => (
                <a key={i} href={social.href} aria-label={social.name} className="p-3 rounded-full bg-white text-black shadow-md">
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Terms links */}
            <div className="text-sm text-gray-400">
              {footerData.termsLinks.map((link, i) => (
                <a key={i} href={link.href} className="hover:text-white ml-4">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div>©{new Date().getFullYear()} Gupt Vrindavan Dham. All rights Reserved.</div>
            <div>Designed with ❤️ — Built with Tailwind + Flowbite</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
