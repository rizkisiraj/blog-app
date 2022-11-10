import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormData {
  title:string,
  text:string,
  writer:string,
  category:[],
  cover:string,
}


const WritePage:React.FC = () => {

  const [text,setText] = useState<any>("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    axios.post('http://localhost:5000/api/posts',{
      ...data,
      text: text
    }).then(({ data })=> {
      console.log(data);
    }).catch(e => {
      console.log(e);
    })
    
  };


  return (
    <section className="w-full w-full mt-16 p-4 xl:px-40 font-sans">
        <div className="w-full bg-emerald-500 p-2 text-white min-h-[44px] rounded-md mb-4">
          <span className="text-sm">{`home > write`}</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input {...register("title",{required: true})} type="text" className="w-full block p-4 outline-none border-l-4 shadow-md border-emerald-500 focus:border-blue-500 mb-4" placeholder="Title"/>
          <input {...register("writer", {required: true})} type="text" className="w-full block p-4 outline-none border-l-4 mb-4 shadow-md border-emerald-500 focus:border-blue-500" placeholder="Name" />
          <input {...register("cover", {required: true})} type="text" className="w-full block p-4 outline-none border-l-4 mb-4 shadow-md border-emerald-500 focus:border-blue-500" placeholder="Cover link" />          
          <input {...register("category", {required: true})} type="text" className="w-full block p-4 outline-none border-l-4 mb-4 shadow-md border-emerald-500 focus:border-blue-500" placeholder="Category" />          
          <div>
          <MDEditor value={text} onChange={setText} height={500} />
          </div>
          <button className="w-full p-4 text-center bg-emerald-400 mt-4 text-white rounded-md shadow-md transition-colors hover:bg-blue-400" type="submit" value="submit">Add Post</button>
        </form>
    </section>
  )
}

export default WritePage;