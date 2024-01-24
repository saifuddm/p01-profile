import React, { useEffect, useState } from "react";

export default function Web() {
  const [SelectedHorizontal, setSelectedHorizontal] = useState(0);
  const [SelectedVertical, setSelectedVertical] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight") {
        setSelectedHorizontal((prev) => prev + 1);
      }
      if (event.key === "ArrowLeft") {
        setSelectedHorizontal((prev) => (prev - 1 < 0 ? 0 : prev - 1));
      }
      if (event.key === "ArrowDown") {
        setSelectedVertical((prev) => prev + 1);
      }
      if (event.key === "ArrowUp") {
        setSelectedVertical((prev) => (prev - 1 < 0 ? 0 : prev - 1));
      }
    };

    //Attach
    window.addEventListener("keydown", handleKeyPress);
    // can also do for key up and key press?

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  function SelectorList() {
    const listLabel = ["About", "Projects", "Intrests", "Relax"];
    const active = (index: number) => {
      if (SelectedHorizontal % listLabel.length == index) {
        return " animate-pulse";
      }
      return " opacity-0";
    };

    return (
      <>
        {listLabel.map((item, index) => (
          <h1 className="text-6xl" key={index}>
            <span className={active(index)}>▶</span> {item}
          </h1>
        ))}
      </>
    );
  }

  function VerticalSelectorList() {
    const listLabel = ["Murtaza Saifuddin", "Links"];
    const active = (index: number) => {
      if (SelectedVertical % listLabel.length == index) {
        return " animate-pulse";
      }
      return " opacity-0";
    };

    const listContent = [
      <>
        <br />
        <p className="text-xl">
          I dont know, I am good at some stuff and bad at a lot others.
        </p>
        <ul className={variant}>
          <li>Coder</li>
          <li>Curious</li>
        </ul>
        <ul className={variant}>
          <li>
            <span className="underline">Horriable</span> at spelling
          </li>
          <li>
            Procrastinate, Though of since: <Date date="18 Jan 24" />
          </li>
        </ul>
        <Divider />
      </>,
    ];

    return (
      <>
        {listLabel.map((item, index) => (
          <>
            <div className=" text-4xl space-x-5">
              <span className={active(index)}>▶</span>
              <span className="font-extrabold">{item}</span>
            </div>
            {listContent[index]}
          </>
        ))}
      </>
    );
  }

  const variant = " ml-8 list-disc list-outside ";

  function Divider() {
    return (
      <>
        <br />
        <p>---</p>
        <br />
      </>
    );
  }

  function Date(props: { date: string }) {
    return <span className="opacity-30">{props.date}</span>;
  }

  const MiniScreenContent = [
    (
      <>
        <p>I am an electrical engineer by degree but software developer by choice. Ever since I was little I have had a good imagination, so to use it to build projects is what attracted me to become a developer. I am passionate about learning new technologies and using them to realize different ideas.</p>
      </>
    ),
    (
      <>
        <h1>Find me on:</h1>
        <br />
        <ul className={variant}>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
        <br />
        <h1>Resume Download</h1>
      </>
    ),
  ];

  return (
    <>
      <div className=" flex flex-col h-screen justify-between items-center">
        <div className="font-main flex flex-row justify-between text-xl text-white w-3/4 mt-10 h-3/4  rounded-xl">
          <div className="border  h-full rounded-xl flex-grow p-10 items-center content-center">
            <VerticalSelectorList />
          </div>
          <div className="border border-gold-600 h-full rounded-xl w-2/6 ml-5 p-10 break-words">
            {MiniScreenContent.filter((val,index) => {
              if(SelectedVertical % MiniScreenContent.length == index){
                return true
              }
              
            })}
          </div>
        </div>
        <div className="font-main text-xl text-white  w-3/4 border mb-10 mt-5 flex-grow  rounded-xl">
          <div className=" flex flex-row justify-evenly h-full items-center">
            <SelectorList />
          </div>
        </div>
      </div>
    </>
  );
}
