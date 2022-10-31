import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const WritePage:React.FC = () => {

  const [value, setValue] = useState<any>('')

  return (
    <section className="w-full w-full mt-16 p-4 xl:px-40 font-sans">
        <div className="w-full bg-emerald-500 p-2 text-white min-h-[44px] rounded-md mb-4">
          <span className="text-sm">{`home > write`}</span>
        </div>
        <form className="w-full">
          <input type="text" className="w-full block p-4 outline-none border-l-4 shadow-md border-emerald-500 focus:border-blue-500 mb-4" placeholder="Title"/>
          <input type="text" className="w-full block p-4 outline-none border-l-4 mb-4 shadow-md border-emerald-500 focus:border-blue-500" placeholder="Name" />
          <input type="text" className="w-full block p-4 outline-none border-l-4 mb-4 shadow-md border-emerald-500 focus:border-blue-500" placeholder="Cover link" />          
          <div>
          <MDEditor value={value} onChange={setValue} height={500} />
          </div>
          <button className="w-full p-4 text-center bg-emerald-400 mt-4 text-white rounded-md shadow-md transition-colors hover:bg-blue-400" type="submit" value="submit">Add Post</button>
        </form>
    </section>
  )
}

export default WritePage;