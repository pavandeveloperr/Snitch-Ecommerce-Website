import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../Hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { SlUser } from "react-icons/sl";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout Successful", {
      duration: 3000,
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid p-2">
          <Link to="/" className="navbar-brand text-black mx-3">
            SNITCH
          </Link>
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar" />
            <span className="toggler-icon middle-bar" />
            <span className="toggler-icon bottom-bar" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto text-center mb-2 mx-5 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-black">
                  Home
                </NavLink>
              </li>
              {/* Categories dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="category-dd"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c._id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link text-black">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link text-black">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li id="dropdown" className="username nav-item dropdown">
                    <NavLink
                      id="username"
                      className="nav-item nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <SlUser className="mb-2" /> {auth?.user?.name}
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu2"
                    >
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Badge count={cart?.length} showZero className="nav-item mt-1">
                  <NavLink
                    to="/cart"
                    className="nav-link ms-auto -mx-2"
                    id="cart"
                  >
                    CART
                    <BsBag className="mb-2 mx-1 " />
                  </NavLink>
                </Badge>
              </li>
            </ul>

            <SearchInput />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
