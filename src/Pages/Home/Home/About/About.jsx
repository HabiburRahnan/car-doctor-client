import person from "../../../../assets/images/about_us/person.jpg";
import parts from "../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-24 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className=" lg:w-1/2 md:space-y-5 p-4 mt-10 md:mt-0">
          <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-4xl md:text-6xl font-bold">
            BWe are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
