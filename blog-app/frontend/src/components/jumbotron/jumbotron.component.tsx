
const Jumbotron:React.FC = () => {

    return (
        <div className="w-full h-48 bg-blue-500 rounded-xl overflow-hidden relative font-sans md:h-80">
          <div className="bg-gray-rgba h-full w-full absolute z-10 top-0 left-0 p-4 flex flex-col justify-end">
            <h3 className="font-bold text-xl">Analisis Kimia</h3>
            <p className="text-sm"><span className="font-bold">By</span> Rizki Siraj</p>
          </div>
          <img className="h-full w-full absolute top-0 left-0" src="https://picsum.photos/200/300" alt="article pict" />
          
        </div>
    )
}

export default Jumbotron;