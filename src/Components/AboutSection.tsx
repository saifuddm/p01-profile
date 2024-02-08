import React from "react";
import Divider from "./Divider";

interface AboutSection {
  index: number;
}

function AboutSection(props: AboutSection) {
  const ulStyling = " ml-8 list-disc list-outside ";
  const listLabel = ["Murtaza Saifuddin", "Links"];
  const miniScreenList = [<MiniScreenOne />, <MiniScreenTwo />];

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
    if (props.index % listLabel.length == index) {
      return " animate-pulse";
    }
    return " opacity-0";
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
      <div className="border border-gold-600 h-full rounded-xl w-2/6 ml-5 p-10 break-words">
        {miniScreenList[props.index]}
      </div>
    </>
  );
}

export default AboutSection;
