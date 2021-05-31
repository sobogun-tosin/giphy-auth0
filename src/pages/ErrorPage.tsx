import { Link } from "react-router-dom";
import robot from "../images/robot.png";

const ErrorPage = () => {
  return (
    <div className="container error-page">
      <h1>Oops!!! 404 page not found</h1>
      <img src={robot} alt="" />
      <Link to="/" className="err-btn">
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
