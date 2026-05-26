import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  PhoneCall,
  Send,
  Navigation,
} from 'lucide-react';

import { BRAND } from '../data/brand';
import { fadeUp } from '../utils/animations';

import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus('loading');

    const formData = new FormData(e.target);

    formData.append(
      'access_key',
      'b2ee1258-297d-4741-b224-4e4a342cf7eb'
    );

    const object = Object.fromEntries(formData);

    const json = JSON.stringify(object);

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },

          body: json,
        }
      );

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');

        e.target.reset();

        setTimeout(() => {
          setFormStatus('idle');
        }, 4000);
      } else {
        setFormStatus('idle');
        alert('Something went wrong.');
      }
    } catch (error) {
      console.error(error);

      setFormStatus('idle');

      alert('Failed to send message.');
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="pt-32 pb-24 min-h-screen bg-[#111]"
    >

      <div className="container mx-auto px-6">

        <SectionHeading subtitle="Contact Us">
          Start Your Fitness Journey
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* INTRO */}
            <div
              className="
                bg-gradient-to-br
                from-[#1a1a1a]
                to-[#111]
                border
                border-white/10
                rounded-3xl
                p-8
              "
            >

              <h3 className="text-3xl font-black text-white mb-4">
                Swarajya Fitness Club
              </h3>

              <p className="text-neutral-300 leading-relaxed text-lg">
                Transform your body with professional guidance,
                quality equipment, and a motivating atmosphere.
                Visit our gym today or contact us directly.
              </p>

            </div>

            {/* INFO CARDS */}
            <div className="space-y-5">

              {[
                {
                  icon: MapPin,
                  title: 'Gym Location',
                  value:
                    'Behind Post Office, Opposite Shankar Mandir Temple, Yashwant Nagar, Talegaon Dabhade Station',
                },

                {
                  icon: Clock,
                  title: 'Gym Timings',
                  value: 'Open Daily • 6:00 AM to 11:00 PM',
                },

                {
                  icon: PhoneCall,
                  title: 'Call / WhatsApp',
                  value: '+91 9762674241',
                },

              ].map(({ icon: Icon, title, value }, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -5,
                    scale: 1.01,
                  }}
                  className="
                    bg-[#181818]
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    flex
                    items-start
                    gap-5
                    hover:border-orange-500/40
                    transition-all
                    duration-500
                  "
                >

                  <div className="bg-orange-500/10 p-4 rounded-2xl text-orange-500">

                    <Icon className="w-7 h-7" />

                  </div>

                  <div>

                    <h4 className="text-white text-xl font-bold mb-1">

                      {title}

                    </h4>

                    <p className="text-neutral-400 leading-relaxed">

                      {value}

                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

            {/* MAP - SAME OLD POSITION */}

            <motion.div
              whileHover={{
                scale: 1.01,
              }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
              "
            >

              <iframe
                title="Swarajya Fitness Club Location"
                src="https://www.google.com/maps?q=Swaraj+gym+Talegaon+Dabhade&output=embed"
                width="100%"
                height="350"
                loading="lazy"
                className="border-0"
              />

              <div className="p-5 bg-[#181818]">

                <Button
                  onClick={() =>
                    window.open(
                      'https://www.google.com/maps/place/Swaraj+gym+Talegaon+Dabhade+R/data=!4m2!3m1!1s0x3bc2b1b8615ceb1d:0x51b194a239c29b45?sa=X&ved=1t:242&ictx=111',
                      '_blank'
                    )
                  }
                  className="
                    w-full
                    !rounded-2xl
                    !py-3
                  "
                >

                  <div className="flex items-center justify-center gap-2">

                    <Navigation className="w-5 h-5" />

                    <span>
                      Open In Google Maps
                    </span>

                  </div>

                </Button>

              </div>

            </motion.div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="
                bg-[#181818]
                border
                border-white/10
                rounded-3xl
                p-8
                space-y-5
              "
            >

              <div>

                <label className="text-white font-medium block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="
                    w-full
                    bg-[#111]
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-4
                    text-white
                    outline-none
                    focus:border-orange-500
                  "
                />

              </div>

              <div>

                <label className="text-white font-medium block mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter phone number"
                  className="
                    w-full
                    bg-[#111]
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-4
                    text-white
                    outline-none
                    focus:border-orange-500
                  "
                />

              </div>

              <div>

                <label className="text-white font-medium block mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="
                    w-full
                    bg-[#111]
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-4
                    text-white
                    outline-none
                    resize-none
                    focus:border-orange-500
                  "
                />

              </div>

              <Button
                type="submit"
                disabled={formStatus === 'loading'}
                className="
                  w-full
                  !rounded-2xl
                  !py-4
                "
              >

                <div className="flex items-center justify-center gap-2">

                  <Send className="w-5 h-5" />

                  <span>

                    {formStatus === 'loading'
                      ? 'Sending...'
                      : formStatus === 'success'
                      ? 'Message Sent Successfully'
                      : 'Send Message'}

                  </span>

                </div>

              </Button>

            </form>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default Contact;