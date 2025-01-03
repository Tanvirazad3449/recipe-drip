import { HeadingText } from "./atoms/Texts"

const ComponentHeader = ({headerText, toggle, showAll}:any) =>{
    return(
        <div className="justify-between align-middle flex py-2">
            <HeadingText text={headerText}/>

        <button
          onClick={toggle}
          className="p-2 text-slate-600 hover:bg-slate-200 rounded"
        >
          Show {showAll ? "Less" : "More"}
        </button>
      </div>
    )
}

export default ComponentHeader