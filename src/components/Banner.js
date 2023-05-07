import ApexBanner from "../images/apexbanner.jpg"

const BruceBanner = () => {
  return (
    <section
      className="text-white bg-apex-banner bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${ApexBanner})`, minHeight: '300px', }}
    >
      {/* <div className="max-w-screen-xl mx-auto flex items-center justify-center"> */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-white">
            APEX IGL Selector
          </h1>

          <p className="text-xl font-extrabold text-white">
            Make games more fun, because the Apex devs suck.
          </p>
        </div>
      {/* </div> */}
    </section>
  );
};

export default BruceBanner;