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
    'https://www.google.com/maps/place/Swaraj+gym+Talegaon+Dabhade+R/data=!4m2!3m1!1s0x3bc2b1b8615ceb1d:0x51b194a239c29b45?sa=X&ved=1t:242&ictx=111';

  const whatsappLink =
    'https://wa.me/919762674241?text=Hi%20Swarajya%20Fitness%20Club,%20I%20want%20to%20know%20about%20membership%20details.';

  const agencyLink =
    'https://pixelforgeindia.vercel.app';

  // FIXED ROUTES

  const footerLinks = [
    {
      label: 'Home',
      page: '/',
    },

    {
      label: 'About',
      page: '/about',
    },

    {
      label: 'Memberships',
      page: '/memberships',
    },

    {
      label: 'Gallery',
      page: '/gallery',
    },

    {
      label: 'Trainers',
      page: '/trainers',
    },

    {
      label: 'Tools',
      page: '/tools',
    },

    {
      label: 'Contact',
      page: '/contact',
    },
  ];

  // SAFE NAVIGATION

  const handleNavigate = (page) => {

    navigate(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  };

  return (
    <footer
      className="
        bg-[#080808]
        border-t
        border-white/10
        pt-10
        md:pt-12
        pb-20
        md:pb-8
      "
    >

      <div className="container mx-auto px-4 md:px-6">

        {/* CTA */}

        <div
          className="
            mb-10
            rounded-[24px]
            border
            border-orange-500/20
            bg-[#111]
            p-5
            md:p-6
          "
        >

          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-start
              lg:items-center
              justify-between
              gap-5
            "
          >

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-white">

                Ready To Transform Yourself?

              </h2>

              <p className="text-neutral-400 mt-2 max-w-2xl text-sm md:text-base">

                Train with experienced coaches and professional gym equipment in a motivating environment.

              </p>

            </div>

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                w-full
                lg:w-auto
              "
            >

              <Button
                onClick={() =>
                  window.open(
                    whatsappLink,
                    '_blank'
                  )
                }
                className="
                  !rounded-2xl
                  !px-5
                  !py-3
                  text-sm
                "
              >

                WhatsApp Us

              </Button>

              <Button
                variant="outline"
                className="
                  !rounded-2xl
                  !px-5
                  !py-3
                  text-sm
                "
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

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            mb-10
          "
        >

          {/* BRAND */}

          <div>

            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">

              <span className="text-white">
                Swarajya
              </span>{' '}

              <span className="text-orange-500">
                Fitness
              </span>

            </h2>

            <p className="text-neutral-400 text-sm leading-relaxed mt-3">

              Real fitness training environment focused on discipline,
              transformation and long-term fitness results.

            </p>

            <a
              href="tel:9762674241"
              className="
                flex
                items-center
                gap-3
                mt-5
                text-white
                hover:text-orange-500
                transition-all
              "
            >

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-orange-500/10
                  border
                  border-orange-500/20
                  flex
                  items-center
                  justify-center
                "
              >

                <PhoneCall className="w-4 h-4 text-orange-500" />

              </div>

              <span className="text-sm font-medium">
                +91 9762674241
              </span>

            </a>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h4
              className="
                text-white
                font-bold
                uppercase
                tracking-[2px]
                text-xs
                mb-4
              "
            >

              Quick Links

            </h4>

            <div className="grid grid-cols-2 gap-y-2 text-sm">

              {footerLinks.map((item) => (

                <button
                  key={item.label}
                  onClick={() =>
                    handleNavigate(item.page)
                  }
                  className="
                    text-left
                    text-neutral-400
                    hover:text-orange-500
                    transition-all
                  "
                >

                  {item.label}

                </button>
              ))}

            </div>

          </div>

          {/* GYM INFO */}

          <div>

            <h4
              className="
                text-white
                font-bold
                uppercase
                tracking-[2px]
                text-xs
                mb-4
              "
            >

              Gym Info

            </h4>

            <div className="space-y-4">

              {/* MORNING */}

              <div className="flex items-start gap-3">

                <div
                  className="
                    w-9
                    h-9
                    rounded-xl
                    bg-orange-500/10
                    border
                    border-orange-500/20
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

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

                <div
                  className="
                    w-9
                    h-9
                    rounded-xl
                    bg-orange-500/10
                    border
                    border-orange-500/20
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

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

                <div
                  className="
                    w-9
                    h-9
                    rounded-xl
                    bg-orange-500/10
                    border
                    border-orange-500/20
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

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

          {/* LOCATION */}

          <div>

            <h4
              className="
                text-white
                font-bold
                uppercase
                tracking-[2px]
                text-xs
                mb-4
              "
            >

              Location

            </h4>

            <div
              className="
                rounded-2xl
                overflow-hidden
                border
                border-white/10
                bg-[#111]
              "
            >

              <iframe
                title="Swarajya Fitness Location"
                src="https://www.google.com/maps?q=Swaraj+gym+Talegaon+Dabhade&output=embed"
                width="100%"
                height="120"
                loading="lazy"
                className="border-0"
              />

              <div className="p-3">

                <div className="flex items-start gap-3">

                  <div
                    className="
                      w-8
                      h-8
                      rounded-lg
                      bg-orange-500/10
                      border
                      border-orange-500/20
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >

                    <MapPin className="w-4 h-4 text-orange-500" />

                  </div>

                  <p className="text-neutral-400 text-[11px] leading-relaxed">

                    Swaraj Gym, Talegaon Dabhade,
                    Maharashtra, India.

                  </p>

                </div>

                <Button
                  className="
                    w-full
                    !rounded-xl
                    !py-2.5
                    mt-3
                    text-sm
                  "
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

        {/* PIXELFORGE AGENCY CREDIT */}

        <a
          href={agencyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            relative
            block
            overflow-hidden
            rounded-[28px]
            border
            border-cyan-500/20
            bg-gradient-to-br
            from-cyan-500/[0.08]
            via-[#111]
            to-[#0a0a0a]
            p-6
            md:p-7
            mb-8
            transition-all
            duration-500
            hover:border-cyan-400/50
            hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]
          "
        >

          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_60%)]
            "
          />

          <div className="relative z-10 text-center">

            <p
              className="
                text-[10px]
                md:text-xs
                uppercase
                tracking-[4px]
                text-cyan-400/70
                font-semibold
                mb-3
              "
            >

              Official Website Partner

            </p>

            <h3
              className="
                text-xl
                md:text-2xl
                font-bold
                text-white
                leading-tight
                transition-all
                duration-300
                group-hover:text-cyan-300
              "
            >

              Designed & Developed by PixelForge India

            </h3>

            <p
              className="
                text-sm
                md:text-base
                text-neutral-400
                mt-3
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >

              Need a premium website for your business, gym, clinic,
              restaurant, brand or startup?

            </p>

            <div
              className="
                inline-flex
                items-center
                justify-center
                mt-5
                px-5
                py-2.5
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/5
                text-cyan-300
                text-sm
                font-medium
                tracking-wide
                transition-all
                duration-300
                group-hover:border-cyan-300/40
                group-hover:bg-cyan-400/10
              "
            >

              Visit PixelForge India →

            </div>

          </div>

        </a>

        {/* COPYRIGHT */}

        <div
          className="
            border-t
            border-white/10
            pt-5
            text-center
          "
        >

          <p className="text-neutral-500 text-xs md:text-sm">

            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;