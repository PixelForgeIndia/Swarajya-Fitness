import {
  PhoneCall,
  MapPin,
  Navigation,
  Clock3,
  User2,
} from 'lucide-react';

import { BRAND } from '../../data/brand';
import Button from '../ui/Button';

const Footer = ({ navigate }) => {
  const mapLink =
    'https://maps.google.com/?q=Swarajya+Fitness+Club+Talegaon+Dabhade';

  const whatsappLink =
    'https://wa.me/919762674241?text=Hi%20Swarajya%20Fitness%20Club,%20I%20want%20to%20know%20about%20membership%20details.';

  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-24 md:pb-10">

      <div className="container mx-auto px-4 md:px-6">

        {/* CTA */}
        <div className="mb-14 rounded-[28px] border border-orange-500/20 bg-[#111] p-6 md:p-8">

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-white">
                Ready To Transform Yourself?
              </h2>

              <p className="text-neutral-400 mt-3 max-w-2xl">
                Train with experienced coaches and real gym equipment in a motivating environment.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

              <Button
                onClick={() =>
                  window.open(
                    whatsappLink,
                    '_blank'
                  )
                }
                className="!rounded-2xl !px-6 !py-3"
              >
                WhatsApp Us
              </Button>

              <Button
                variant="outline"
                className="!rounded-2xl !px-6 !py-3"
                onClick={() =>
                  window.open(
                    mapLink,
                    '_blank'
                  )
                }
              >
                Open Maps
              </Button>

            </div>

          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* BRAND */}
          <div>

            <h2 className="text-3xl font-black uppercase tracking-tight">
              <span className="text-white">
                Swarajya
              </span>{' '}

              <span className="text-orange-500">
                Fitness
              </span>
            </h2>

            <p className="text-neutral-400 text-sm leading-relaxed mt-4">
              Real fitness training environment focused on discipline, transformation and long-term results.
            </p>

            <a
              href="tel:9762674241"
              className="flex items-center gap-3 mt-6 text-white hover:text-orange-500 transition-all"
            >

              <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <PhoneCall className="w-5 h-5 text-orange-500" />
              </div>

              <span className="font-medium">
                +91 9762674241
              </span>

            </a>

          </div>

          {/* LINKS */}
          <div>

            <h4 className="text-white font-bold uppercase tracking-[2px] text-sm mb-5">
              Quick Links
            </h4>

            <div className="grid grid-cols-2 gap-3 text-sm">

              {[
                'Home',
                'About',
                'Memberships',
                'Gallery',
                'Trainers',
                'Tools',
                'Contact',
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    navigate(
                      item.toLowerCase()
                    )
                  }
                  className="text-left text-neutral-400 hover:text-orange-500 transition-all"
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* TIMINGS + TRAINERS */}
          <div>

            <h4 className="text-white font-bold uppercase tracking-[2px] text-sm mb-5">
              Gym Info
            </h4>

            <div className="space-y-5">

              {/* MORNING */}
              <div className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <Clock3 className="w-4 h-4 text-orange-500" />
                </div>

                <div>

                  <p className="text-white text-sm font-semibold">
                    Morning
                  </p>

                  <p className="text-neutral-400 text-sm">
                    5:00 AM – 11:00 AM
                  </p>

                </div>

              </div>

              {/* EVENING */}
              <div className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <Clock3 className="w-4 h-4 text-orange-500" />
                </div>

                <div>

                  <p className="text-white text-sm font-semibold">
                    Evening
                  </p>

                  <p className="text-neutral-400 text-sm">
                    4:00 PM – 10:00 PM
                  </p>

                </div>

              </div>

              {/* TRAINERS */}
              <div className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <User2 className="w-4 h-4 text-orange-500" />
                </div>

                <div>

                  <p className="text-white text-sm font-semibold">
                    Trainers
                  </p>

                  <p className="text-neutral-400 text-sm">
                    Dev Kharatmal
                  </p>

                  <p className="text-neutral-400 text-sm">
                    Karan Shelke
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* MAP */}
          <div>

            <h4 className="text-white font-bold uppercase tracking-[2px] text-sm mb-5">
              Location
            </h4>

            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#111]">

              {/* SMALL MAP */}
              <iframe
                title="Swarajya Fitness Location"
                src="https://www.google.com/maps?q=Talegaon+Dabhade+Maharashtra&output=embed"
                width="100%"
                height="170"
                loading="lazy"
                className="border-0"
              />

              <div className="p-4">

                <div className="flex items-start gap-3">

                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-orange-500" />
                  </div>

                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Behind Post Office, Opposite Shankar Mandir Temple, Yashwant Nagar, Talegaon Dabhade Station
                  </p>

                </div>

                <Button
                  className="w-full !rounded-2xl !py-3 mt-4 text-sm"
                  onClick={() =>
                    window.open(
                      mapLink,
                      '_blank'
                    )
                  }
                >

                  <div className="flex items-center justify-center gap-2">

                    <Navigation className="w-4 h-4" />

                    <span>
                      Get Directions
                    </span>

                  </div>

                </Button>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 text-center">

          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;