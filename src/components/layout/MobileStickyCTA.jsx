import {
  PhoneCall,
  MessageCircle,
  Navigation,
} from 'lucide-react';

import { BRAND } from '../../data/brand';
import Button from '../ui/Button';

const MobileStickyCTA = ({ navigate }) => {

  /* PHONE */
  const handleCall = () => {
    window.location.href = 'tel:9762674241';
  };

  /* WHATSAPP */
  const handleWhatsApp = () => {
    const message =
      'Hi Swarajya Fitness Club, I want to know about membership plans and gym timings.';

    const whatsappURL =
      `https://wa.me/919762674241?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappURL,
      '_blank'
    );
  };

  /* GOOGLE MAPS */
  const handleDirections = () => {
    window.open(
      'https://maps.google.com/?q=Swarajya+Fitness+Club+Talegaon+Dabhade',
      '_blank'
    );
  };

  return (
    <div
      className="
        md:hidden
        fixed
        bottom-0
        left-0
        w-full
        z-50
        bg-[#0b0b0b]/95
        backdrop-blur-xl
        border-t
        border-white/10
        px-3
        py-3
      "
      style={{
        paddingBottom:
          'calc(env(safe-area-inset-bottom) + 12px)',
      }}
    >

      <div className="grid grid-cols-4 gap-3">

        {/* CALL */}
        <button
          onClick={handleCall}
          className="
            h-[54px]
            rounded-2xl
            bg-[#171717]
            border
            border-white/10
            flex
            items-center
            justify-center
            active:scale-95
            transition-all
          "
        >

          <PhoneCall className="w-5 h-5 text-white" />

        </button>

        {/* WHATSAPP */}
        <button
          onClick={handleWhatsApp}
          className="
            h-[54px]
            rounded-2xl
            bg-[#171717]
            border
            border-white/10
            flex
            items-center
            justify-center
            active:scale-95
            transition-all
          "
        >

          <MessageCircle className="w-5 h-5 text-green-500" />

        </button>

        {/* MAPS */}
        <button
          onClick={handleDirections}
          className="
            h-[54px]
            rounded-2xl
            bg-[#171717]
            border
            border-white/10
            flex
            items-center
            justify-center
            active:scale-95
            transition-all
          "
        >

          <Navigation className="w-5 h-5 text-orange-500" />

        </button>

        {/* JOIN */}
        <Button
          className="
            !h-[54px]
            !rounded-2xl
            !text-sm
            !font-bold
          "
          onClick={() =>
            navigate('contact')
          }
        >
          Join
        </Button>

      </div>

    </div>
  );
};

export default MobileStickyCTA;