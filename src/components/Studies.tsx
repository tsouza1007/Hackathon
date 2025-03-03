import InfoSection from "./SectionHeader"; // Updated import path
import LabelArrow from "./LabelArrow"; // Import LabelArrow
import Slider from "react-slick"; // Import react-slick

// Define studiesInfo directly
const studiesInfo = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    color: "#b9ff66" as const,
    textButton: "Learn more",
    id: 1,
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    color: "#b9ff66" as const,
    textButton: "Learn more",
    id: 2,
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    color: "#b9ff66" as const,
    textButton: "Learn more",
    id: 3,
  },
];

interface StudyInfo {
  text: string;
  color: "#b9ff66" | "#fff" | "#191a23";
  textButton: string;
}

const Studies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
  };

  return (
    <section className="studies" id="studies">
      <div className="studies__container wrapper flex justify-center items-center">
        {/* Reusable InfoSection */}
        <InfoSection
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        <Slider {...settings} className="studies__content mobile--show">
          {studiesInfo.map(({ text, color, textButton }: StudyInfo, id) => (
            <div key={id} className="content__item">
              <div className="bg-black p-5 rounded-lg max-w-full box-border text-white grid grid-cols-12">
                <div className="col-span-12">
                  <p>{text}</p>
                  <LabelArrow title={textButton} color={color} />
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="studies__content mobile--hide">
          {studiesInfo.map(({ text, color, textButton }: StudyInfo, id) => (
            <div className="content__item" key={id}>
              <div className="bg-black p-5 rounded-lg max-w-full box-border text-white grid grid-cols-12">
                <div className="col-span-12">
                  <p>{text}</p>
                  <LabelArrow title={textButton} color={color} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
