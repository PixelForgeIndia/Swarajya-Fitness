const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12 md:mb-16">
    {subtitle && (
      <h4 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">
        {subtitle}
      </h4>
    )}

    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
      {children}
    </h2>
  </div>
);

export default SectionHeading;