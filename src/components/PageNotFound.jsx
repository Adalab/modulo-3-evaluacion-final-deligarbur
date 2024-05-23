import { Link } from "react-router-dom";

function PageNotFound () {
  return (
    <>
      <Link to="/">
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="not found page" />
      </Link>
    </>
  )
}

export default PageNotFound