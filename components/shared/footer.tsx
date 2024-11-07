"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <div>
      <footer className="bg-[#1a0046] text-white pt-16 pb-10 h-fit">
        <div className="container max-w-[1300px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="">
              <div className="space-y-6">
                <h2 className="text-xl font-bold ">ABOUT</h2>
                <p className="text-gray-300 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam autem saepe, accusamus esse vero accusantium.
                </p>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-6">NAVIGATION</h2>
              <ul className="space-y-4">
                {["CONTAGION", "SYMPTOMS", "PREVENTION"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="text-xs">▶</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-6">CONTACT</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5" />
                  <span>(+88)01111-222222</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Send className="h-5 w-5" />
                  <a
                    href="mailto:example@yahoo.com"
                    className="hover:text-white transition-colors"
                  >
                    example@yahoo.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-5 w-5" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Follow Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-6">FOLLOW</h2>
              <p className="text-gray-300 mb-6">
                Lorem, ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, voluptas!
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    className="p-2 border border-gray-600 rounded hover:bg-white/10 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#554080] text-center text-gray-400">
            <p>© 2024 All Right Reserved. Developed by Md.Rejoyan Islam</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
