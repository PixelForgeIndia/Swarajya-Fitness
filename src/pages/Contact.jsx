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
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111]
            border border-white/10
            rounded-3xl
            p-8">

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
                  className="bg-[#181818]
                  border border-white/10
                  rounded-2xl
                  p-6
                  flex items-start gap-5
                  hover:border-orange-500/40
                  transition-all duration-500"
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

            {/* MAP */}
            <motion.div
              whileHover={{
                scale: 1.01,
              }}
              className="overflow-hidden rounded-3xl border border-white/10"
            >

              <iframe
                title="Gym Location"
                src="https://maps.google.com/maps?q=Talegaon%20Dabhade&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[350px]"
                loading="lazy"
              />

            </motion.div>

            {/* MAP BUTTON */}
            <Button
              className="w-full"
              onClick={() =>
                window.open(
                  'https://share.google/SSMJskH3N7Zmh3szs',
                  '_blank'
                )
              }
            >

              <Navigation className="mr-2 w-5 h-5" />

              Open in Google Maps

            </Button>

          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="bg-gradient-to-br
            from-[#1b1b1b]
            via-[#161616]
            to-[#111]
            border border-white/10
            rounded-[2rem]
            p-8 md:p-10
            shadow-[0_0_60px_rgba(249,115,22,0.08)]"
          >

            <div className="mb-8">

              <h3 className="text-3xl font-black text-white mb-3">
                Send Enquiry
              </h3>

              <p className="text-neutral-400">
                Fill out the form below and the gym owner
                will contact you soon.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME */}
              <div>

                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full
                  bg-[#101010]
                  border border-white/10
                  rounded-xl
                  px-5 py-4
                  text-white
                  placeholder:text-neutral-500
                  focus:outline-none
                  focus:border-orange-500
                  transition-all duration-300"
                />

              </div>

              {/* PHONE */}
              <div>

                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Phone / WhatsApp Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full
                  bg-[#101010]
                  border border-white/10
                  rounded-xl
                  px-5 py-4
                  text-white
                  placeholder:text-neutral-500
                  focus:outline-none
                  focus:border-orange-500
                  transition-all duration-300"
                />

              </div>

              {/* GOAL */}
              <div>

                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Fitness Goal / Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="I want to join the gym and know about membership plans..."
                  className="w-full
                  bg-[#101010]
                  border border-white/10
                  rounded-xl
                  px-5 py-4
                  text-white
                  placeholder:text-neutral-500
                  focus:outline-none
                  focus:border-orange-500
                  transition-all duration-300"
                />

              </div>

              {/* BUTTON */}
              <Button
                type="submit"
                className="w-full !py-4 text-lg"
                disabled={formStatus === 'loading'}
              >

                {formStatus === 'loading'
                  ? 'Sending Enquiry...'
                  : formStatus === 'success'
                  ? 'Enquiry Sent Successfully ✓'
                  : 'Send Enquiry'}

                {formStatus === 'idle' && (
                  <Send className="ml-2 w-5 h-5" />
                )}

              </Button>

            </form>

            {/* WHATSAPP DIRECT */}
            <div className="mt-8 pt-8 border-t border-white/10">

              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  window.open(
                    'https://wa.me/919762674241?text=Hi%20Swarajya%20Fitness%20Club,%20I%20want%20to%20know%20more%20about%20membership%20plans.',
                    '_blank'
                  )
                }
              >

                <PhoneCall className="mr-2 w-5 h-5 text-green-500" />

                Chat on WhatsApp

              </Button>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.div>
  );
};

export default Contact;