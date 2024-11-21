import React from "react";
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link> </link> </link>

const Navbar = () => {
  return (
    <div className="navbar">
      <div
        className="flex nav-container"
        style={{ borderBottom: "1px solid #F1F1F1" }}
      >
        <div className="search-bar">
          <input
            type="text"
            name="nav-search"
            id="nav-search"
            placeholder="Search"
          />
        </div>

        <div className="nav-links flex">
          <button
            style={{ border: "none", cursor: "pointer", background: "none" }}
          >
            <img
              src="./images/navbar/ic_round-notifications.png"
              alt="notification"
            />
          </button>
          <button
            style={{ border: "none", cursor: "pointer", background: "none" }}
          >
            <img src="./images/navbar/bi_chat-left-dots-fill.png" alt="chat" />
          </button>

          <div className="nav-profile flex" style={{ gap: "12px" }}>
            <img
              src="./images/navbar/unsplash_OH2S9XAcLhc.png"
              alt="profile-pic"
              style={{ borderRadius: "50%", height: "42px", width: "42px" }}
            />
            <div style={{ gap: "4px" }} className="flex">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000033",
                }}
              >
                Admirra John
              </p>
              <button
                style={{
                  border: "none",
                  cursor: "pointer",
                  background: "none",
                }}
              >
                <img src="./images/navbar/vector-1.png" alt="dropdown" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
