import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative py-12 lg:py-24 overflow-hidden">
      <Image className="absolute bottom-0 left-0" src="/images/about-lines.svg" alt="" width={400} height={300} style={{ objectFit: 'contain' }} />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-6xl font-bold mb-8 text-gray-900">About us</h1>
          <p className="text-2xl text-gray-800 font-medium mb-10 leading-relaxed">
            Lemonstalk is a forward-looking technology company specializing in the development of custom AI-powered enterprise applications and resilient technology infrastructure. We partner with organizations to modernize operations, enhance efficiency, and accelerate growth in an increasingly digital and data-driven world.
          </p>
          <a className="inline-flex py-4 px-6 items-center justify-center text-lg font-semibold text-teal-900 hover:text-white border-2 border-teal-900 hover:bg-teal-900 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg" href="#mission">
            Our Mission
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;