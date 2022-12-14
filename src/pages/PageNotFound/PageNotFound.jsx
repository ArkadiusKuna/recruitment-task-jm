import Main from "layout/Main/Main";
import PageTitle from "layout/PageTitle/PageTitle";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Main variant="error">
      <PageTitle text='UPS... page not found...' />
      <Link to='/' className="text-3xl uppercase underline underline-offset-4">Go back home</Link>
    </Main>
  )
}

export default PageNotFound