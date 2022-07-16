import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSignOutAlt, FaUser, FaSignInAlt } from "react-icons/fa";
import { logout, reset } from "../features/auth/authSlice";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header>
      <Wrapper>
        <div className="logo">
          <h1>Posts</h1>
        </div>
        <div className="links">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/developers">Developers</NavLink>
          <NavLink to="/articles">Articles</NavLink>
        </div>
        <div className="user">
          {user ? (
            <button onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          ) : (
            <>
              <button onClick={() => navigate("/register")}>
                <FaUser />
                Register
              </button>
              <button onClick={() => navigate("/login")}>
                <FaSignInAlt />
                Login
              </button>
            </>
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Navigation;

const Wrapper = styled.div`
  width: 100%;
  height: 110px;
  max-width: 1024px;
  margin: auto;
  display: flex;
  align-items: center;
  .logo {
    display: flex;
    flex: 1;
    h1 {
      font-weight: 300;
      font-size: 30px;
    }
  }
  .links {
    display: flex;
    flex: 4;
    a {
      color: black;
      margin-right: 15px;
      text-decoration: none;
      text-transform: uppercase;
      &:active {
        background-color: black;
        color: white;
        padding: 5px;
      }
    }
  }
  .user {
    display: flex;
    flex: 2;
    button {
      border: 1px solid black;
      cursor: pointer;
      padding: 7px;
      margin-right: 10px;
      color: black;
      background-color: white;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;
