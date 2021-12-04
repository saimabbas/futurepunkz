import React, { useEffect } from "react";
import "./App.css";
import { FaDiscord, FaTwitterSquare } from "react-icons/fa";
import { MdArrowUpward, MdMenu, MdClose } from "react-icons/md";
import Specie1 from "./assets/Specie1.png";
import Specie2 from "./assets/Specie2.png";
import Specie3 from "./assets/Specie3.png";
import Specie4 from "./assets/Specie4.png";
import Specie5 from "./assets/Specie5.png";
import Specie6 from "./assets/Specie6.jpg";
import Specie7 from "./assets/Specie7.png";
import Specie8 from "./assets/Specie8.png";
import Specie9 from "./assets/Specie9.png";
import Story1 from "./assets/Story1.png";
import Story2 from "./assets/Story2.png";
import Story3 from "./assets/Story3.png";
import DAO1 from "./assets/DAO1.png";
import DAO2 from "./assets/DAO2.png";
import DAO3 from "./assets/DAO3.png";
import Story4 from "./assets/Story4.png";
import Story5 from "./assets/Story5.png";
import Story6 from "./assets/Story6.png";
import Story7 from "./assets/Story7.png";
import Story8 from "./assets/Story8.png";
import Story9 from "./assets/Story9.png";
import PixDus from "./assets/PixDus.png";
import Hunter from "./assets/69Hunter.png";
import Olof from "./assets/Olof888.png";
import Solo from "./assets/Solo Monk.png";
import NU from "./assets/NU.png";
import Specie10 from "./assets/Specie10.png";
import Icon1 from "./assets/icon1.svg";
import Icon3 from "./assets/icon3.svg";
import Space from "./assets/black.jpg";
import HeroBanner from "./assets/website-banner-2.jpg";
import Logo from "./assets/logo.png";
import Logo1 from "./assets/logo.png";
import Gif from "./assets/gif-future.gif";

import { Power4, Linear } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import $ from "jquery";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    /* Scroll-to-Top button visibility control */
    gsap.fromTo(
      ".moveToTop",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#section1",
          toggleActions: "play pause resume none",
          start: "bottom 0%",
          scrub: true,
        },
      }
    );
  }, []);
  /* Desktop Anchors */
  const moveToHome = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#sectionHome",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo5 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
      },
      ease: Power4.easeInOut,
    });
  };
  /* Mobile Anchors */
  const moveToHomeMob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#sectionHome",
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo1Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo2Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo3Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo4Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  const moveTo5Mob = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section5",
        offsetY: 35,
      },
      ease: Power4.easeInOut,
    });
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  /* Move To Top Button */
  const handleToTop = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#sectionHome",
      },
      ease: Power4.easeInOut,
    });
  };
  /* Mobile Header Visibility */
  const showMobHeader = () => {
    $(".header-mob").slideDown(500);
    $(".close").css({
      display: "flex",
    });
    $(".burger").css({
      display: "none",
    });
  };
  const hideMobHeader = () => {
    $(".header-mob").slideUp(500);
    $(".close").css({
      display: "none",
    });
    $(".burger").css({
      display: "flex",
    });
  };
  return (
    <div className="space">
      {/* <img src={HeroBanner} alt="" className="space-bg" /> */}
      {/* MoveToTop Button */}
      <span className="moveToTop" onClick={handleToTop}>
        <MdArrowUpward />
      </span>

      {/* Header */}
      <div className="header">
        <div className="box">
          <div className="header-content">
            {/* <h1 onClick={moveTo1} className="cursive">
              FuturePunkz DAO
            </h1> */}
            <img onClick={moveTo1} src={Logo} alt="" />
            <div className="header-pc">
              <a onClick={moveToHome} className="mt mtHome">
                Home
              </a>
              <a onClick={moveTo1} className="mt mt2">
                Mint
              </a>
              <a onClick={moveTo2} className="mt mt4">
                DAO Game
              </a>
              <a onClick={moveTo3} className="mt mt3">
                Story
              </a>
              <a onClick={moveTo4} className="mt mt5">
                Roadmap
              </a>
              <a onClick={moveTo5} className="mt mt5">
                Team
              </a>
            </div>

            <MdMenu className="burger" onClick={showMobHeader} />
            <MdClose className="close" onClick={hideMobHeader} />
            <div className="header-mob">
              <main>
                <a onClick={moveToHomeMob} className="mt mtHome">
                  Home
                </a>
                <a onClick={moveTo1Mob} className="mt mt2">
                  Mint
                </a>
                <a onClick={moveTo2Mob} className="mt mt4">
                  DAO Game
                </a>
                <a onClick={moveTo3Mob} className="mt mt3">
                  Story
                </a>
                <a onClick={moveTo4Mob} className="mt mt5">
                  Roadmap
                </a>
                <a onClick={moveTo5Mob} className="mt mt5">
                  Team
                </a>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      {/* <img id="sectionHome" src={HeroBanner} className="hero-banner" alt="" /> */}
      {/* Hero Section */}
      <div className="hero section " id="section1">
        <div className="box">
          <div className="hero-content">
            <img src={Logo1} alt="" className="hero-heading-img"/>
            <div className="hh-before"></div>
            <h2 className="thaleahFat">
              4444 Psychics and Alchemists battle for Utopia, the holy land of
              decentralization and financial freedom.
            </h2>
            <h2 className="thaleahFat">
              This non fungible token shall represent your access to the DAOs
              secret circles, the DAO strategy game and perks of the future. May
              the ether be with you.
            </h2>
            <img src={Gif} alt="" />
            <h3 className="thaleahFat">Mint price: 0.03 ETH + Gas</h3>
            <button className="button thaleahFat">
              The presale starts in:
            </button>
            <h4 id="timer" className="thaleahFat"></h4>
          </div>
        </div>
      </div>

      {/* DAO Battle Section */}
      <div className="species section" id="section2">
        <div className="box">
          <h2 className="mainHeading">THE DAO GAME</h2>
          <div className="dao-battle">
            <h1 className="thaleahFat">Psychics vs Alchemists </h1>
            <h2 className="thaleahFat">
              Depending on which type of Future Punk you hold, you gain access
              to different areas of the game and different VP’s (voting power)
            </h2>
            <div className="dao-grid">
              <div className="dao-grid-cell">
                <img src={DAO3} alt="" />
                <h3 className="thaleahFat">PSYCHIC PUNK</h3>
                <ul>
                  <li className="thaleahFat">- VP for short term flips</li>
                  <li className="thaleahFat">- VP for planet proposals</li>
                  <li className="thaleahFat">- Stake to earn $GIN per day</li>
                  <li className="thaleahFat">- Whitelist pass for V2</li>
                  <li className="thaleahFat">- Access to Utopia metaverse</li>
                  <li className="thaleahFat">- Supply: 2195</li>
                </ul>
              </div>
              <div className="dao-grid-cell">
                <img src={DAO1} alt="" />
                <h3 className="thaleahFat">ALCHEMIST PUNK</h3>
                <ul>
                  <li className="thaleahFat">- VP for long term holds</li>
                  <li className="thaleahFat">- VP for planet proposals</li>
                  <li className="thaleahFat">- Stake to earn $JUICE per day</li>
                  <li className="thaleahFat">- Whitelist pass for V2</li>
                  <li className="thaleahFat">- Access to Utopia metaverse</li>
                  <li className="thaleahFat">- Supply: 2195</li>
                </ul>
              </div>
              <div className="dao-grid-cell">
                <img src={DAO2} alt="" />
                <h3 className="thaleahFat">LEGENDARY MONK</h3>
                <ul>
                  <li className="thaleahFat">- VP over any side</li>
                  <li className="thaleahFat">- VP for planet proposals</li>
                  <li className="thaleahFat">- Free mintpass for V2</li>
                  <li className="thaleahFat">- Access to Utopia metaverse</li>
                  <li className="thaleahFat">- more special perks</li>
                  <li className="thaleahFat">- Supply: 56</li>
                </ul>
              </div>
            </div>
            <h2 className="thaleahFat">
              Psychic Punkz have the power to buy and flip.{" "}
            </h2>
            <h2 className="thaleahFat">
              Alchemist Punkz have the power to buy and hold.
            </h2>
            <h2 className="thaleahFat">
              Legendary Monkz have the power to pick a side{" "}
            </h2>
            <br />
            <br />
            <p className="thaleahFat">
              The goal is to have more in your wallet than the other team by the
              end of the game.
              <br />
              Small battles and attacks gives your team the opportunity to
              challenge the others and steal from them.
              <br />
              The winner gets the right over both wallets.
              <br />
              We will not only focus on buying NFTs but also on crypto
              currencies and metaverse land.
              <br />
              Share your best alpha with your tribe, strategize and raise the
              value of your token.
            </p>
            <br />
            <br />
            <h2 className="thaleahFat">Let the battle begin! </h2>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="about section" id="section3">
        <div className="box">
          <h2 className="mainHeading">STORY</h2>
          <div className="story-grid">
            <div className="story-grid-left">
              <main>
                <img src={Story1} alt="" />
                <img src={Story8} alt="" />
                <img src={Story9} alt="" />
                <img src={Story7} alt="" />
                <img src={Story3} alt="" />
                <img src={Story5} alt="" />
                <img src={Story2} alt="" />
                <img src={Story4} alt="" />
                <img src={Story6} alt="" />
              </main>
            </div>
            <div className="story-grid-right">
              {/* <h1 className="nebula">THE STORY</h1> */}
              <h1 className="thaleahFat">Battle for Utopia</h1>
              <p className="thaleahFat">
                In the mountains of Nepal, a cave was discovered, holding the
                story of 4 legendary Monkz… <br />
                It is said that they were so wise, they created a city where
                people lived in harmony with their finances, decentralized from
                authority. UTOPIA. <br />
                <br />
                The true history of the Monkz has long been forgotten, but
                legends and rumors of a portal that leads to their world have
                been part of many cultures’ lore for thousands of years. Some
                call it the vault of time. Every time the vault opens, a war
                breaks out between the world’s most powerful tribes to claim the
                right to enter the lost valley of WGMI and gain access to the
                secret riches of Utopia.
                <br />
                <br />
                In the year 4444, the portal opened and war broke out once
                again. Two great factions rose, The Psychic Punkz and the
                Alchemist Punkz. Which tribe will make it to the city of Utopia
                in the Monkz metaverse?
                <br />
                <br />
                Psychic Punkz possess the power of seeing the short-term future
                and therefore are excellent at fast decisions and flipping.
                Alchemist Punkz rely on their patience and conviction and
                therefore can calculate what projects will prevail long-term.
                <br />
                <br />
                CHOOSE YOUR TRIBE.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="roadmap section" id="section4">
        <div className="box">
          <h2 className="mainHeading">Roadmap</h2>
          <h5 className="mainSubHeading thaleahFat">
            First stop moon. Second stop jupiter. Third stop UTOPIA!
          </h5>
          <div className="roadmap-content">
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4 className="thaleahFat">- LAUNCH -</h4>
                <p className="thaleahFat">
                  4444 Future Punkz Genesis will be released to the blockchain.
                  <br />
                  Alchemists, Psychics and Legendary Monkz enter the metaverse.
                </p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4 className="thaleahFat">- THE DAO GAME -</h4>
                <p className="thaleahFat">
                  Psychics vs Alchemists! Flipping vs holding! Who is gonna make
                  it? <br /> Read the game instructions and choose your tribe.
                </p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4 className="thaleahFat">- DONATION -</h4>
                <p className="thaleahFat">
                  Let’s make a donation from the team wallet to an organization
                  of your choice.
                  <br />
                  We can also add something from the DAO wallet if you feel
                  generous;)
                </p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4 className="thaleahFat">- NEXT LEVEL -</h4>
                <p className="thaleahFat">
                  Time to expand the battle and create something unique.
                  <br />
                  Future Punkz DAO members and artists will conspire to create
                  our v2 collection.
                  <br />
                  One word: Anime.
                </p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4 className="thaleahFat">- MERCH - </h4>
                <p className="thaleahFat">
                  Merch is merch. Let’s make something dope.
                </p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4 className="thaleahFat">- V2 - </h4>
                <p className="thaleahFat">
                  V2 to the world! Imagine the first community created bluechip.
                  <br />A part of these sales will also be allocated to the DAO
                  wallet.
                </p>
              </div>
              <main></main>
            </div>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <h4 className="thaleahFat">- UTOPIA ROADMAP 2.0 -</h4>
                <p className="thaleahFat">
                  Metaverse - launchpad - IRL events <br /> The future is DAO!
                </p>
              </div>
            </div>
            {/* <div className="roadmap-options">
              <div className="roadmap-options-ceiling"></div>
              <div className="roadmap-options-container">
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">BAYC? </div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Breeding?</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Fruit Project?</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Your ideas</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Merch?</div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Event? </div>
                </div>
                <div className="roadmap-option-box">
                  <div className="roadmap-option-rope"></div>
                  <div className="roadmap-option-text">Donation?</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about2 section">
        <div className="box">
          <div className="about-content">
            <p className="thaleahFat">
              There will be a lot of discussing, exchanging, voting and
              brainstorming. Together with the community we will create the best
              roadmap for our DAO. These are some milestones on that road. But
              we will stay dynamic and fluid with the times, with our evolution
              and most importantly with what brings us joy and fulfillment.
            </p>
            <br />
            <p className="thaleahFat">
              The destination is clear…
              <br />
              UTOPIA
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="team section" id="section5">
        <div className="box">
          <div className="mainHeading">Team</div>
          <div className="team-content">
            <div className="team-box">
              <a href="https://twitter.com/NuMaSaCa1">
                <img src={Icon3} alt="" />
              </a>
              <img src={NU} alt="" />
              <main>
                <h6 className="thaleahFat">Numa Saca</h6>
                <h5 className="thaleahFat">Founder </h5>
                <h5 className="thaleahFat">Community manager </h5>
              </main>
            </div>
            <div className="team-box">
              <a href="https://twitter.com/Solo2313137943">
                <img src={Icon3} alt="" />
              </a>
              <img src={Solo} alt="" />
              <main>
                <h6 className="thaleahFat">Solo Monk</h6>
                <h5 className="thaleahFat">Founder </h5>
                <h5 className="thaleahFat">Creative director</h5>
              </main>
            </div>
            <div className="team-box">
              <a href="https://twitter.com/kacc28419807">
                <img src={Icon3} alt="" />
              </a>
              <img src={PixDus} alt="" />
              <main>
                <h6 className="thaleahFat">Pixdus</h6>
                <h5 className="thaleahFat">Artist</h5>
              </main>
            </div>
            <div className="team-box">
              {/* <a href="#">
                <img src={Icon3} alt="" />
              </a> */}
              <img src={Hunter} alt="" />
              <main>
                <h6 className="thaleahFat">69Hunter </h6>
                <h5 className="thaleahFat">Developer </h5>
              </main>
            </div>
            <div className="team-box">
              <a href="https://twitter.com/olof888">
                <img src={Icon3} alt="" />
              </a>
              <img src={Olof} alt="" />
              <main>
                <h6 className="thaleahFat">Olof888 </h6>
                <h5 className="thaleahFat">Discord Admin </h5>
                <h5 className="thaleahFat">Marketing Manager</h5>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-parent">
        <div className="box">
          <div className="footer">
            {/*  <span>
            <FaDiscord />
            <FaTwitterSquare />
          </span> */}
            <p className="thaleahFat">
              Copyright © 2021 FuturePunkz DAO. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
