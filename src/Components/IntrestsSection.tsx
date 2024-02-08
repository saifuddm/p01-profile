import Divider from "./Divider";

interface IntrestsSection {
  index: number;
}

function IntrestsSection(props: IntrestsSection) {
  const ulStyling = " ml-8 list-disc list-outside ";
  const listLabel = ["Intrests", "Extra"];
  const miniScreenList = [<MiniScreenOne />, <MiniScreenTwo />];

  const activeStyling = (index: number) => {
    if (props.index % listLabel.length == index) {
      return " animate-pulse";
    }
    return " opacity-0";
  };

  function MiniScreenOne() {
    return <p>HELLO.</p>;
  }

  function MiniScreenTwo() {
    return <>TEST</>;
  }
  return (
    <>
      <div className="border  h-full rounded-xl flex-grow p-10 items-center content-center">
        <div className=" text-4xl space-x-5">
          <span className={activeStyling(0)}>▶</span>
          <span className="font-extrabold">{listLabel[0]}</span>
        </div>
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

export default IntrestsSection;
