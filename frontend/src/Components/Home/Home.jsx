import React, { useEffect } from "react";
//import Post from "../Post/Post";
import User from "../User/User";
import "./Home.css";
import { useDispatch } from "react-redux";
//import { getAllUsers, getFollowingPosts } from "../../Actions/User";
//import Loader from "../Loader/Loader";
//import { Typography } from "@mui/material";
import { useAlert } from "react-alert";

const Home = () => {
 /* const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );

  const { users, loading: usersLoading } = useSelector(
    (state) => state.allUsers
  );

  const { error: likeError, message } = useSelector((state) => state.like);

  useEffect(() => {
    dispatch(getFollowingPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (likeError) {
      alert.error(likeError);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, message, likeError, dispatch]);*/

  return  (
    <div className="home">
      <div className="homeleft"></div>
        <div className="homeright">
        <User userId={"user._id"} name={"Abhishek Tyagi"} avatar={"https://avatars.githubusercontent.com/u/25058652?v=4"} />
       
      </div>
    </div>
  );
};

export default Home;