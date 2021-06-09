import "./Login.scss";
import beAnimated from "../../images/be-animated.gif";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/Store";
import { getTrending, login, register } from "../../redux/GiphyActions";
import { GoVerified } from "react-icons/go";
import { GrFacebook, GrApple } from "react-icons/gr";
import { useHistory } from "react-router-dom";
import spinner from "../../images/loading.gif";

const Login = () => {
  const [tab, setTab] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const imgs = useSelector((state: RootStore) => state.giphy.trending);
  const errMsg = useSelector((state: RootStore) => state.giphy.error);
  const loading = useSelector((state: RootStore) => state.giphy.loading);
  const is_login = useSelector((state: RootStore) => state.giphy.is_login);

  const radNum = Math.floor(Math.random() * 10);
  const handleTab = (index: number) => {
    setTab(index);
  };

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(username, email, password));
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(email, password));
    setUsername("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    dispatch(getTrending());
    if (is_login) {
      history.push("/user");
    }
  }, [dispatch, is_login, history]);

  if (loading) {
    return (
      <div className="container loading">
        <img src={spinner} alt="" />
      </div>
    );
  }

  return (
    <div className=" login">
      <div className="login-body">
        <img src={beAnimated} alt="be-animated" />
        <div className="login-btn-container">
          <span
            className={tab === 1 ? `show` : ""}
            onClick={() => handleTab(1)}
          >
            Log In
          </span>
          <span
            className={tab === 2 ? `show` : ""}
            onClick={() => handleTab(2)}
          >
            Sign Up
          </span>
        </div>
        <div className={`login-content `}>
          <form
            className={tab === 1 ? `login-content show-form` : "login-content"}
            onSubmit={handleLogin}
          >
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="login-form"
              value={email}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-form"
              value={password}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
            />
            <button className="login-btn">Log in</button>
            {errMsg && <p className="error">{errMsg}</p>}
            <h5 style={{ color: "#2ccfcf" }}>Forgot Your Password?</h5>
            <button className="login-btn2">
              <i>
                <GrFacebook color="#4161f1" />
              </i>{" "}
              <h5>Log In with Facebook</h5>
            </button>
            <button className="login-btn2">
              <i>
                <GrApple />
              </i>{" "}
              <h5>Log In with Apple</h5>
            </button>
            <h5>
              By logging in you agree to GIPHY's <span>Terms of Service</span>
            </h5>
          </form>
          <div className="sign-up">
            <form
              onSubmit={handleRegister}
              className={
                tab === 2 ? `login-content show-form` : "login-content"
              }
            >
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="login-form"
                style={{
                  textTransform: "capitalize",
                }}
                value={username}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setUsername(e.currentTarget.value)
                }
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="login-form"
                value={email}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setEmail(e.currentTarget.value)
                }
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="login-form"
                value={password}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setPassword(e.currentTarget.value)
                }
              />
              <h2>reCAPTCHA</h2>
              <button className="login-btn" type="submit">
                Sign Up
              </button>
              {errMsg && (
                <div className="error">
                  <p>{errMsg}</p>
                </div>
              )}
              <button className="login-btn2">
                <i>
                  <GrFacebook color="#4161f1" />
                </i>{" "}
                {""}
                <h5>Log In with Facebook</h5>
              </button>
              <button className="login-btn2">
                <i>
                  <GrApple />
                </i>{" "}
                <h5>Log In with Apple</h5>
              </button>
              <h5>
                By logging in you agree to GIPHY's <span>Terms of Service</span>
              </h5>
            </form>
          </div>
        </div>
      </div>
      {imgs && (
        <div className="login-img">
          <img
            src={imgs[radNum].images.original.url}
            alt=""
            className="main-img"
          />
          {imgs[radNum].user ? (
            <div className="login-img-user">
              <img
                src={imgs[radNum].user.avatar_url}
                alt=""
                width="50px"
                height="50px"
              />
              <div className="content">
                <h4>{imgs[radNum].user.display_name}</h4>
                <span>@{imgs[radNum].username}</span>
                {""}
                {imgs[radNum].user.is_verified ? (
                  <i>
                    <GoVerified />
                  </i>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
