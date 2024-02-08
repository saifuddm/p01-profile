import { useEffect, useState } from "react";
import MainSelectorBar from "../Components/MainSelectorBar";
import AboutSection from "../Components/AboutSection";
import ProjectsSection from "../Components/ProjectsSection";
import IntrestsSection from "../Components/IntrestsSection";
import RelaxSection from "../Components/RelaxSection";

export default function Web() {
  const [SelectedHorizontal, setSelectedHorizontal] = useState(0);
  const [SelectedVertical, setSelectedVertical] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setSelectedHorizontal((prev) => (prev == 3 ? prev : prev + 1));
      }
      if (event.key === "ArrowLeft") {
        setSelectedHorizontal((prev) => (prev == 0 ? prev : prev - 1));
      }
      if (event.key === "ArrowDown") {
        setSelectedVertical((prev) => (prev == 1 ? prev : prev + 1));
        console.log(SelectedVertical);
      }
      if (event.key === "ArrowUp") {
        setSelectedVertical((prev) => (prev == 0 ? prev : prev - 1));
      }
    };

    //Attach
    window.addEventListener("keydown", handleKeyPress);
    // can also do for key up and key press?

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const screenList = [
    <AboutSection index={SelectedVertical} />,
    <ProjectsSection index={SelectedVertical} />,
    <IntrestsSection index={SelectedVertical} />,
    <RelaxSection index={SelectedVertical} />,
  ];

  return (
    <>
      <div className=" flex flex-col h-screen justify-between items-center">
        <div className="font-main flex flex-row justify-between text-xl text-white w-3/4 mt-10 h-3/4  rounded-xl">
          {screenList[SelectedHorizontal]}
        </div>
        <div className="font-main text-xl text-white  w-3/4 border mb-10 mt-5 flex-grow  rounded-xl">
          <div className=" flex flex-row justify-evenly h-full items-center">
            <MainSelectorBar index={SelectedHorizontal} />
          </div>
        </div>
      </div>
    </>
  );
}
