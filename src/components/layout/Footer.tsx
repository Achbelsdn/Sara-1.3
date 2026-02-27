import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/menu", label: "Notre Menu" },
  { href: "/reservation", label: "Réservation" },
  { href: "/galerie", label: "Galerie" },
  { href: "/evenements", label: "Événements" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/avis", label: "Avis Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-gold-500/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-gold-500 rounded-full flex items-center justify-center">
                  <span className="font-heading text-gold-500 text-lg font-bold">R</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl font-bold text-cream-100">La Réserve</span>
                  <span className="text-[10px] text-gold-500 tracking-[0.3em] uppercase">Restaurant</span>
                </div>
              </div>
            </Link>
            <p className="text-dark-300 text-sm leading-relaxed mb-6">
              Une expérience culinaire d&apos;exception où chaque plat raconte une histoire 
              et chaque visite devient un souvenir inoubliable.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-dark-950 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-dark-950 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-100 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-100 mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/hDddYVyKbs7ATkWW8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-gold-400 transition-colors text-sm"
                >
                  Voir sur Google Maps
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-dark-300 text-sm">
                  À configurer dans l&apos;admin
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-dark-300 text-sm">
                  À configurer dans l&apos;admin
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-100 mb-6">
              Horaires
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-cream-200">Lun - Jeu</p>
                  <p className="text-dark-400">11h30 - 22h00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-cream-200">Ven - Sam</p>
                  <p className="text-dark-400">11h30 - 23h00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-cream-200">Dimanche</p>
                  <p className="text-dark-400">Fermé</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-dark-500 text-xs">
              © {new Date().getFullYear()} La Réserve. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="text-dark-500 hover:text-gold-500 text-xs transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-dark-500 hover:text-gold-500 text-xs transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
