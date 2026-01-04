const AboutDetails = () => {
  return (
    <section className="py-12 lg:py-24" id="mission">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-24">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <div>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-gray-900">Our Mission</h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="lg:max-w-lg md:ml-auto">
              <p className="text-xl text-gray-800 font-medium mb-10 leading-relaxed">
                To collaborate with our clients to achieve defined business outcomes by delivering exceptional, cost-effective, and innovation-driven technology solutions. We transform business processes through AI-enabled innovation, foster operational excellence, and drive sustainable cost optimization through strategic partnerships with leading global technology providers.
              </p>
              <a className="inline-flex py-4 px-6 items-center justify-center text-lg font-semibold text-teal-900 hover:text-white border-2 border-lime-500 hover:border-teal-900 bg-lime-500 hover:bg-teal-900 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg" href="/contact">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;