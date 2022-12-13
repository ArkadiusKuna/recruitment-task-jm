import { Link } from "react-router-dom";

import Main from "layout/Main/Main"

const HomePage = () => {
  return (
    <Main>
      <Link to='/continents' className="px-10 py-4 text-xl rounded-full font-bold uppercase tracking-wider border-4 border-black shadow-2xl bg-orange-400">Lets start...</Link>
    </Main>
  )
}

export default HomePage