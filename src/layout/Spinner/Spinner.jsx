const Spinner = () => {
  return (
      <div className="fixed flex justify-center items-center top-0 right-0 left-0 bottom-0 bg-black/50 z-20">
          <div className="w-24 h-24 border-8 border-gray-100 border-t-8 border-t-orange-400 rounded-full animate-spin"></div>
    </div>
  )
}

export default Spinner