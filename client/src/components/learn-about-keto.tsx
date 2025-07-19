import { ArrowRight } from "lucide-react";

export function LearnAboutKeto() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learn about keto.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Questions and Answers */}
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">?</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  What is keto?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  What makes it different from other low-carb diets? How do I 
                  do it, and how do I know it's working? Learn everything you 
                  need to know about keto, its many benefits and the science 
                  behind them.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium group"
                >
                  Learn all about Keto
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Question 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  How do I start keto?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  Ready to get started but feel overwhelmed by this new 
                  lifestyle and all you have to learn about it? Follow this step-by-step 
                  program where we'll walk you through how to begin 
                  and get results.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium group"
                >
                  Get into Keto
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Question 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">×</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Will I lose weight on keto?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  The Ketogenic Diet is quickly becoming known for its 
                  incredible weight loss benefits. Learn how you can use keto 
                  can help you meet your weightloss and health goals.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium group"
                >
                  Weight Loss & Keto
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Product carousel */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">6</span>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  HOW TO USE
                </span>
              </div>
              <a 
                href="#" 
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                All Product Guides →
              </a>
            </div>

            <div className="relative">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Keto Nootropic
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Also known as "brain boosters," "smart drugs", or "cognitive enhancers", 
                  nootropics are compounds that may enhance various mental functions.
                </p>
                
                {/* Product image placeholder */}
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 rounded-lg flex items-center justify-center">
                    <div className="w-20 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Nootropic</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700">
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
              </button>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}