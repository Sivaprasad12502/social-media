import { useContext } from "react";
import "./leftbar.scss";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Groups</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Events</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Gaming</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Gallery</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Message</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <GridViewOutlinedIcon />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
