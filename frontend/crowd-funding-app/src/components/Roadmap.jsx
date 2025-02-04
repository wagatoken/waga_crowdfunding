import partnerImage from '../assets/images/image 6.png';

const Roadmap = () => {
    const partners = Array(5).fill(partnerImage);
  const roadmapSteps = [
    { number: 1, title: 'MVP Development', position: 'bottom' },
    { number: 2, title: 'Pilot Study', position: 'top' },
    { number: 3, title: 'Regional Expansion', position: 'bottom' },
    { number: 4, title: 'Continuous Improvement', position: 'top' }
  ];

  return (
    <>
      {/* Partners Section */}
      <section className="bg-coffeegreen py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-left mb-12">
            OUR PARTNERS
          </h2>
          <div className="flex justify-between items-center flex-wrap gap-8">
            {partners.map((partner, index) => (
              <div key={index}>
                <img 
                  src={partner} 
                  alt="Partner logo" 
                  className="w-48 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-canaryYellows py-20">
        <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-28">
            Our Roadmap
        </h2>

        <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 w-full h-1 bg-black -translate-y-1/2" />
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-black -translate-x-1/2" />

            {/* Timeline Steps */}
            <div className="relative flex md:flex-row flex-col md:justify-between md:items-center items-start md:space-y-0 space-y-24">
            {roadmapSteps.map((step, index) => (
                <div key={index} className="relative md:w-auto w-full">
                {/* Step Title */}
                <div
                    className={`
                    md:absolute relative md:w-48 w-full whitespace-nowrap
                    ${step.position === 'top'
                        ? 'md:bottom-full md:mb-8 mb-4 order-first'
                        : 'md:top-full md:mt-8 mt-4 order-last'
                    }
                    md:left-1/2 md:-translate-x-1/2 md:text-center
                    ${index % 2 === 0 ? 'md:text-center text-right pr-16' : 'md:text-center text-left pl-16'}
                    `}
                >
                    <p className="font-bold text-black text-xl">{step.title}</p>
                </div>

                {/* Step Node */}
                <div className="relative z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-extrabold">{step.number}</span>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
      </section>
  </>
  )
}

export default Roadmap