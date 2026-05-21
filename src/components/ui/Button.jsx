import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyle =
    'relative overflow-hidden inline-flex items-center justify-center font-bold transition-all duration-300 rounded-md px-6 py-3 text-sm md:text-base';

  const variants = {
    primary:
      'bg-orange-500 text-white hover:bg-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]',

    outline:
      'border-2 border-neutral-700 text-white hover:border-orange-500 hover:text-orange-500 bg-transparent',

    ghost:
      'text-neutral-300 hover:text-white hover:bg-neutral-800',
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className} ${
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </motion.button>
  );
};

export default Button;