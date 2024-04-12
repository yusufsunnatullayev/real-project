import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../constants";
import { removeItem } from "./helpers/persistance-storage";
import { useDispatch } from "react-redux";
import { logOutUser } from "../slice/auth";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOutUser());
    removeItem("token");
    navigate("/login");
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <Link to={'/'} className="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img src="/removed-bg-logo.png" style={{ width: 100, height: 100 }} alt="" />
      </Link>


      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto text-light">
        {loggedIn ? (
          <>
            <Link
              className="me-3 m-0 py-2  text-decoration-none text-light"
              to={"/user"}
            >
              {user.username}
            </Link>

            <Link
              className="me-3 py-2  text-decoration-none text-light"
              to={"/create-article"}
            >
              Create Article
            </Link>
            <button onClick={logOutHandler} className="btn btn-outline-danger">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link
              className="me-3 py-2  text-decoration-none text-light"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              className="me-3 py-2  text-decoration-none text-light"
              to={"/register"}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
