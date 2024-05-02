import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
              <div className="blue-circle" />

            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 3,
              type: "ease-in",
            }}
            >
              Make the <br />
              most from your
              <br /> property Sale
            </motion.h1>
          </div>
          <div className="flexColStart secondaryTextWhite flexhero-des">
            <span>We only charge 1.2% commission</span>
            <span>and set your buyer’s agent commission to 1.2%</span>
            <span>That's only 2.4% commission! Forget about all the big real estate agents</span>
          </div>
          <div className="flexCenter stats"></div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                $<CountUp start={1.0} end={5.46} decimals={2} duration={3} />M <span>+</span>
              </span>
              <span className="secondaryTextWhite">Property Sale Value</span>
            </div>

            <div className="flexColCenter stat">
              <span>
              Only <CountUp start={4.5} end={1.2} decimals={2} duration={1.5} /> <span>%</span>
              </span>
              <span className="secondaryTextWhite">Commission Charged</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={5000} end={0} duration={1}/> <span>$</span>
              </span>
              <span className="secondaryTextWhite">Advertising Fees</span>
            </div>
          </div>
          <div className="flexCenter stats"></div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
