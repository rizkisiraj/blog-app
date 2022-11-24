const ArticleLoader = () => {
  return (
    <section className="w-full">
      <div className="w-full bg-emerald-500 p-2 text-white min-h-[44px] rounded-md mb-4">
          <span className="text-sm">loading...</span>
      </div>
      <div className="w-full mb-4">
        <div className='w-full mb-4 overflow-hidden rounded-lg h-[20rem] bg-slate-400 animate-pulse'>
        </div>
      </div>
      <div className="w-full h-12 mb-2 bg-slate-300 animate-pulse rounded-md"></div>
          <div className="flex mb-4">
            <span className="block mr-4 w-28 bg-slate-300 animate-pulse h-6"></span>
            <span className="block w-28 bg-slate-300 animate-pulse h-6"></span>
          </div>
          <div className="w-full">
            <div className="w-full h-8 mb-2 bg-slate-300 animate-pulse"></div>
            <div className="w-full h-8 mb-2 bg-slate-300 animate-pulse"></div>
            <div className="w-full h-8 bg-slate-300 animate-pulse"></div>
          </div>
    </section>
  )
}

export default ArticleLoader;