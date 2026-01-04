const CTASection = () => {
  return (
    <section className="p-4">
      <div className="max-w-xl lg:max-w-5xl mx-auto xl:max-w-none px-5 md:px-12 xl:px-24 py-16 bg-teal-900 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
              <div className="max-w-md xl:max-w-none">
                <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl font-bold tracking-sm text-white mb-6">Ready to Transform Your Business?</h1>
                <p className="text-lg text-white opacity-90 leading-relaxed">Partner with Lemonstalk to modernize operations, enhance efficiency, and accelerate growth with AI-driven technology solutions.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 lg:text-right">
              <a className="inline-flex py-4 px-8 items-center justify-center text-lg font-semibold text-teal-900 border-2 border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg" href="/contact">
                Get Started
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;