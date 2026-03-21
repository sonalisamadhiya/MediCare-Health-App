import img from "../assets/img1.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h2>Track Your Health with Ease</h2>
        <p>
          MediCare helps you monitor your health, set reminders, and keep medical history in one place.
        </p>
      </div>
    </section>
  );
};

export default Hero;