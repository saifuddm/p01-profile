import { useEffect, useState } from "react";
import Divider from "./Divider";

function AboutSection() {
  const ulStyling = " ml-8 list-disc list-outside ";
  const listLabel = ["Murtaza Saifuddin", "Links"];
  const miniScreenList = [<MiniScreenOne />, <MiniScreenTwo />];
  const [Animate, setAnimate] = useState(false);
  const [SelectedVertical, setSelectedVertical] = useState(0);

  //Handle key up and down
  useEffect(() => {
    const handleKeyPressVertical = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        miniScreenSwitch(event);
      }
      if (event.key === "ArrowUp") {
        miniScreenSwitch(event);
      }
    };

    //Attach
    window.addEventListener("keydown", handleKeyPressVertical);

    return () => {
      window.removeEventListener("keydown", handleKeyPressVertical);
    };
  }, []);

  function MiniScreenOne() {
    return (
      <p>
        I am an electrical engineer by degree but software developer by choice.
        Ever since I was little I have had a good imagination, so to use it to
        build projects is what attracted me to become a developer. I am
        passionate about learning new technologies and using them to realize
        different ideas.
      </p>
    );
  }

  function MiniScreenTwo() {
    return (
      <>
        <h1>Find me on:</h1>
        <br />
        <ul className={ulStyling}>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
        <br />
        <h1>Resume Download</h1>
      </>
    );
  }

  const activeStyling = (index: number) => {
    if (SelectedVertical % listLabel.length == index) {
      return " animate-pulse";
    }
    return " opacity-0";
  };

  const animationStyling = Animate
    ? " blur-lg -translate-x-full opacity-0"
    : " ";

  const miniScreenSwitch = (event: KeyboardEvent) => {
    setAnimate(true);

    if (event.key === "ArrowDown") {
      setTimeout(() => {
        setSelectedVertical((prev) => (prev == 1 ? prev : prev + 1));
        setAnimate(false);
      }, 150);
    }
    if (event.key === "ArrowUp") {
      setTimeout(() => {
        setSelectedVertical((prev) => (prev == 0 ? prev : prev - 1));
        setAnimate(false);
      }, 150);
    }
  };
  return (
    <>
      <div className="border  h-full rounded-xl flex-grow p-10 items-center content-center">
        <div className=" text-4xl space-x-5">
          <span className={activeStyling(0)}>▶</span>
          <span className="font-extrabold">{listLabel[0]}</span>
        </div>
        <br />
        <p className="text-xl">
          I dont know, I am good at some stuff and bad at a lot others.
        </p>
        <ul className={ulStyling}>
          <li>Coder</li>
          <li>Curious</li>
        </ul>
        <ul className={ulStyling}>
          <li>
            <span className="underline">Horriable</span> at spelling
          </li>
          <li>
            Procrastinate, Though of since:{" "}
            <span className="opacity-30">18 Jan 24</span>
          </li>
        </ul>
        <Divider />

        <div className=" text-4xl space-x-5">
          <span className={activeStyling(1)}>▶</span>
          <span className="font-extrabold">{listLabel[1]}</span>
        </div>
      </div>
      <div className="h-full w-2/6 ml-5 overflow-clip">
        <div
          className={
            `border border-gold-600 h-full rounded-xl w-full p-10 break-words transition-all ` +
            animationStyling
          }
        >
          {miniScreenList[SelectedVertical]}
        </div>
      </div>
    </>
  );
}

export default AboutSection;
