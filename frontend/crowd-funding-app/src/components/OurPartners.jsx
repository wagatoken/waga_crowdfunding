import partnerImage from "../assets/images/image 6.png";

const OurPartners = () => {
  const partners = Array(5).fill(partnerImage);

  return (
    <div>
      <section className="bg-coffeegreen py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
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
    </div>
  );
};

export default OurPartners;
