function App() {
  function Divider() {
    return (
      <>
        <br />
        <p>---</p>
        <br />
      </>
    );
  }


  interface DateProps {
    date: string,
  }

  function Date(props: DateProps) {

    return(
      <>
      <span className="animate-pulse">
        {props.date}
      </span>
      </>
    )
  }

  function Links(props: {text:string, link:string}){
    return(
      <>
      <span>[<span className="text-links">
        <a href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a></span>]({props.link})</span>
      </>
    )
  }

  const variant = " ml-8 list-disc list-outside "

  return (
    <>
      <div className="font-main text-xl">
        <h1 className=" text-6xl">
          # <span className="underline">About</span>
        </h1>
        <br />
        <h2 className=" text-4xl ">
          ## <span className="font-extrabold">Murtaza Saifuddin</span>
        </h2>
        <p className="text-xl">
          I dont know, I am good at some stuff and bad at a lot others.
        </p>
        <ul className={variant}>
          <li>Coder</li>
          <li>Curious</li>
        </ul>
        <ul className={variant}>
          <li><span className="underline">Horriable</span> at spelling</li>
          <li>Procrastinate, Though of since: <Date date="18 Jan 24" /></li>
        </ul>
        <br />
        <h2 className=" text-4xl">## Links</h2>
        <ul className=" ml-8 list-disc list-outside">
          <li><Links text="Github" link="https://github.com/saifuddm"/></li>
          <li><Links text="LinkedIn" link="https://www.linkedin.com/in/saifuddm"/></li>
        </ul>
        <Divider />
        <h1 className=" text-6xl"># Projects</h1>
        <br />
        <h2 className=" text-4xl">## Coming Soon ...</h2>
        <br />
        <h2 className=" text-4xl">## <Links text="Soco" link="https://github.com/SocialContracts/menu"/></h2>
        <ul className={variant}>
              <li>React</li>
              <li>Firebase</li>
              <li>JS</li>
            </ul>
        <Divider />
        <h1 className=" text-6xl"># Intrests</h1>
        <br />
        <h2 className=" text-4xl">## Coded/Designed</h2>
        <ul className={variant}>
          <li>Last Engaged: <Date date="19 Jan 24" /></li>
        </ul>
        <br />
        <h2 className=" text-4xl">## Watching Tech YT</h2>
        <ul className={variant}>
          <li>Last Engaged: <Date date="18 Jan 24" /></li>
        </ul>
        <br />
        <h2 className=" text-4xl">## Cooking</h2>
        <ul className={variant}>
          <li>Last Engaged: <Date date="19 Jan 24" /></li>
        </ul>
        <Divider />
        <h1 className=" text-6xl"># Relax</h1>
        <br />
        <p>
          <Links text="Lofi Chill" link="https://www.youtube.com/watch?v=rMBPCPE9_Xc" />
        </p>
        <br />
        <br />
        <br />
        <p>* Sorry when I get better at responsive design this will be better.</p>
        <br />
        <input type="text" placeholder="HAVE A NICE DAY" className="w-full animate-pulse bg-transparent text-links" />
      </div>
    </>
  );
}

export default App;
