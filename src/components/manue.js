import { Link } from "react-router-dom";

export default function Manue() {
  return (
    <>
    <br></br>
      <Link to="/"> HOME </Link>

      <Link to="/SHOWPRODUCTS"> SHOW PRODUCTS </Link>

      <Link to="/ABOUT"> ABOUT </Link>

      <Link to="/SELECTEDPRODUCTS"> MY PRODUCTS</Link>

    </>
  );
}
