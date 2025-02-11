import partnerImage from "../assets/images/image 6.png";

const Roadmap = () => {
  const partners = Array(5).fill(partnerImage);
  const roadmapSteps = [
    { number: 1, title: "MVP Development", position: "bottom" },
    { number: 2, title: "Pilot Study", position: "top" },
    { number: 3, title: "Regional Expansion", position: "bottom" },
    { number: 4, title: "Continuous Improvement", position: "top" },
  ];

  return (
    <>
      {/* Partners Section */}
      <section className="bg-coffeegreen py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-left mb-12">
            OUR PARTNERS
          </h2>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={partner}
                  alt="Partner logo"
                  className="w-40 md:w-48 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-canaryYellows py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16">
            Our Roadmap
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line for Desktop */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-black -translate-y-1/2" />
            {/* Timeline Line for Mobile */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-black -translate-x-1/2" />

            {/* Timeline Steps */}
            <div className="relative flex flex-col md:flex-row md:justify-between md:items-center space-y-12 md:space-y-0">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center w-full md:w-auto">
                  {/* Step Title */}
                  <div
                    className={`
                      md:absolute relative w-full md:w-48 whitespace-nowrap
                      ${step.position === "top"
                        ? "md:bottom-full md:mb-4 mb-3 order-first"
                        : "md:top-full md:mt-4 mt-3 order-last"}
                      md:left-1/2 md:-translate-x-1/2 md:text-center
                      ${index % 2 === 0 ? "text-right pr-4" : "text-left pl-4"}
                    `}
                  >
                    <p className="font-bold text-black text-lg md:text-xl">
                      {step.title}
                    </p>
                  </div>

                  {/* Step Node */}
                  <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-extrabold text-base md:text-lg">
                      {step.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
