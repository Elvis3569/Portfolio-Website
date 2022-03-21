import ButtonSmooth from "./Buttons/ButtonSmooth";

const HomePageHero = () => {
  return (
    <div className="hero">
      <h1>Hi, my name is </h1>
      <h2>ELVIS IKENNA.</h2>
      <h3>SOFTWARE ENGINEER.</h3>
      <p>
        I am a Software Engineer who enjoys building clean and responsive web apps.
        Always seeking to provide the best user experience while applying
        industry best practices.
      </p>
      <ButtonSmooth text={"ABOUT ME"} type={"one"} url={"about"} />
    </div>
  );
};

export default HomePageHero;
