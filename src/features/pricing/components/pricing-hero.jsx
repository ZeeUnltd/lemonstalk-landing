import Image from 'next/image';

const PricingHero = () => {
  return (
    <section className="relative py-12 lg:py-24 overflow-hidden">
      <Image className="absolute top-0 right-0" src="/images/pricing-waves-right-top.png" alt="" width={400} height={300} style={{ objectFit: 'contain' }} />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h1 className="font-heading text-5xl sm:text-6xl tracking-xs mb-6">Pricing</h1>
          <p className="text-lg text-gray-700">
            Our flexible pricing plans are designed to scale with your business needs. From startups to enterprise organizations, choose a solution that drives your digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;