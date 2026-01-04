'use client';

import React, { useMemo } from 'react';
import solutionsData from '@/data/home-solutions.json';
import { Icon } from '@/components/ui';

/**
 * Solutions section component displaying energy solution categories
 * @returns {React.ReactElement} Solutions section
 */
const SolutionsSection = () => {
  const solutions = useMemo(() => solutionsData, []);
  return (
    <section id="solutions" className="p-4 bg-white">
      <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-lime-500 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <Icon name="circle-dot" size={8} color="#022C22" />
            <span className="inline-block ml-2 text-sm font-medium">Solutions</span>
          </div>
          <div className="border-t border-teal-900 border-opacity-25 pt-14">
            <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-24 text-gray-900">AI-Powered Solutions</h1>
            <div className="flex flex-wrap -mx-4">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={`w-full sm:w-1/2 px-4 ${
                    index < 2 ? 'mb-16' :
                    index === 2 ? 'mb-16 sm:mb-0' : ''
                  }`}
                >
                  <div className="group transition-all duration-300 hover:translate-y-[-8px]">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <Icon name={solution.icon} size={48} ariaLabel={`${solution.title} icon`} />
                    </div>
                    <div className="mt-6">
                      <h5 className="text-2xl font-bold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-teal-700">{solution.title}</h5>
                      <p className="mb-6 text-gray-800 leading-relaxed">{solution.description}</p>
                      <a className="inline-flex items-center text-lg font-semibold text-gray-900 hover:text-teal-700 transition-all duration-300 group-hover:gap-2" href={solution.link}>
                        Learn more
                        <svg className="ml-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;