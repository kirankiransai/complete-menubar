import { useEffect, useRef, useState } from "react";

import { FaCaretDown, FaBars, FaEllipsisV, FaCaretUp } from "react-icons/fa";

import Worldmap from "./Worldmap";
import pie from "./pie.png";
import torch from "./torchlight.png";
import vector from "./vector.png";
import heart from "./heart.png";
import Bellicon from "./Drop";
import Dropdown from "./Dropdown";
import Bullet from "./Bullet";
import Add from "./Add";

function MenuBar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [bellIcon, setBellIcon] = useState(false);
  const [openBullet, setBullet] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showComponentsDropdown, setShowComponentsDropdown] = useState(false);
  const [showFormsDropdown, setShowFormssDropdown] = useState(false);
  const [tables, setTables] = useState(false);
  const [maps, setMaps] = useState(false);
  const [pages, setPages] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState([]);
  const [res, setRes] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const rest = useRef();
  const rest1 = useRef();
  const rest2 = useRef();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // const handleDocumentClick = (event) => {
  //   const target = event.target;
  //   if (
  //     !target.closest(".header-icons") &&
  //     openProfile &&
  //     !target.closest(".dropdownprofile")
  //   ) {
  //     setOpenProfile(false);
  //   }
  //   if (
  //     !target.closest(".header-icons") &&
  //     bellIcon &&
  //     !target.closest(".belldropdown")
  //   ) {
  //     setBellIcon(false);
  //   }
  // };
  useEffect(() => {
    let Handler = (e) => {
      if (!rest.current.contains(e.target)) {
        setOpenProfile(false);
      }
      if (!rest1.current.contains(e.target)) {
        setBellIcon(false);
      }
      if (!rest2.current.contains(e.target)) {
        setBullet(false);
      }
    };
    window.addEventListener("click", Handler);
  });

  // const handleBellIconClick = () => {
  //   setBellIcon((prev) => !prev);
  //   setOpenProfile(false);
  //   setBullet(false);
  // };

  // const handleProfileIconClick = () => {
  //   setOpenProfile((prev) => !prev);
  //   setBellIcon(false);
  //   setBullet(false);
  // };
  // const handleBulletIconClick = () => {
  //   setBullet((prev) => !prev);
  //   setOpenProfile(false);
  //   setBellIcon(false);
  // };
  // useEffect(() => {
  //   document.addEventListener("click", handleDocumentClick);
  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [openProfile, bellIcon]);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchRes();
  }, []);

  const fetchData = async () => {
    // setLoading(true);
    // setError(null);

    try {
      const response = await fetch("http://localhost:8080/getpersons");
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setData(data);
        console.log(data);
      } else {
        setError("Error fetching statistics");
      }
    } catch (error) {
      setError("Error fetching statistics");
      console.error("Error fetching statistics:", error);
      // } finally {
      //   setLoading(false);
    }
  };
  const fetchRes = async () => {
    // setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/fetchbox");
      const res = await response.json();
      console.log(res);

      if (response.ok) {
        setRes(res);
        console.log(res);
      } else {
        setError("Error fetching statistics");
      }
    } catch (error) {
      setError("Error fetching statistics");
      console.error("Error fetching statistics:", error);
    } finally {
      // setLoading(false);
    }
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleComponentsDropdown = (e) => {
    e.preventDefault();
    setShowComponentsDropdown(!showComponentsDropdown);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  const toggleFormsDropdown = (e) => {
    e.preventDefault();
    setShowFormssDropdown(!showFormsDropdown);
  };
  const toggleTables = (e) => {
    e.preventDefault();
    setTables(!tables);
  };
  const toggleMaps = (e) => {
    e.preventDefault();
    setMaps(!maps);
  };
  const togglePages = (e) => {
    e.preventDefault();
    setPages(!pages);
  };

  return (
    <div className="main">
      {/* <div className="sidebar"> */}
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="bar">
          <div className="header">
            <span className="spa">CT CREATIVETIM</span>
            {/* <span> </span> */}
          </div>
          <div className="second">
            <div className="image">
              <img
                src="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png"
                alt=" "
              />
            </div>
            <div className="details">
              <div className="profile-dropdown">
                <a className="adc" href="/#" onClick={toggleProfileDropdown}>
                  <span>Tania Andrew</span>
                  {/* <FaCaretDown className="dropdown-arrow" /> */}
                  {showProfileDropdown ? (
                    //
                    <FaCaretUp className="dropdown-arrow" id="pro" />
                  ) : (
                    <FaCaretDown className="dropdown-arrow" id="pro" />
                  )}
                </a>

                {showProfileDropdown && (
                  // <div className="show">

                  <ul className="nav">
                    <li>
                      <a href="!#">
                        <span className="one" id="ref">
                          MP
                        </span>
                        <span className="two" id="ref">
                          My profile
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <span className="one" id="ref">
                          EP
                        </span>
                        <span className="two" id="ref">
                          Edit Profile
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <span className="one" id="ref">
                          S
                        </span>
                        <span className="two" id="ref">
                          Settings
                        </span>
                      </a>
                    </li>
                  </ul>
                  // </div>
                )}
              </div>
              <ul className="nav">
                <li className="sub">
                  <a href="/" className="nava">
                    <p>
                      <i class="fa-solid fa-chart-pie icon"></i>DASHBOARD
                    </p>
                  </a>
                </li>
                <li className="sub">
                  <a
                    href="/"
                    // className="nava"
                    className="dropdown-toggle"
                    onClick={toggleComponentsDropdown}
                  >
                    <p>
                      <i class="fa-solid fa-cube icon"></i>COMPONENTS
                      {showComponentsDropdown ? (
                        //
                        <FaCaretUp className="dropdown-arrow" id="comp" />
                      ) : (
                        <FaCaretDown className="dropdown-arrow" id="comp" />
                      )}
                    </p>
                    {/* <b></b> */}
                  </a>
                  {showComponentsDropdown && (
                    <ul className="nav">
                      {/* <li className="sub"> */}
                      <div className="show">
                        {/* <ul className="nav"> */}
                        <li>
                          <a href="/" className="nava">
                            <span className="one">B</span>
                            <span className="two"> Buttons</span>
                          </a>
                        </li>

                        <li>
                          <a href="/" className="nava">
                            <span className="one">GS</span>
                            <span className="two">Grid System</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">P</span>
                            <span className="two">Panels</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">SA</span>
                            <span className="two">Sweet Alert</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">N</span>
                            <span className="two">Notifications</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">I</span>
                            <span className="two">Icons</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">T</span>
                            <span className="two">Typograpghy</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
                <li className="sub">
                  <a
                    href="/"
                    className="dropdown-toggle"
                    onClick={toggleFormsDropdown}
                  >
                    <p>
                      <i class="fa-solid fa-clipboard icon"></i>
                      FORMS
                      {showFormsDropdown ? (
                        <FaCaretUp className="dropdown-arrow" id="fom" />
                      ) : (
                        <FaCaretDown className="dropdown-arrow" id="fom" />
                      )}
                    </p>
                  </a>
                  {showFormsDropdown && (
                    <ul className="nav">
                      <div className="show">
                        <li>
                          <a href="/" className="nava">
                            <span className="one">BF</span>
                            <span className="two"> Regular Forms</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">EF</span>
                            <span className="two"> Extended Forms</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">VF</span>
                            <span className="two"> Validation</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">W</span>
                            <span className="two"> Wizard</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
                <li className="sub">
                  <a
                    href="/"
                    className="dropdown-toggle"
                    onClick={toggleTables}
                  >
                    <p>
                      <i class="fa-solid fa-newspaper icon"></i>
                      TABLES
                      {tables ? (
                        //
                        <FaCaretUp className="dropdown-arrow" id="tab" />
                      ) : (
                        <FaCaretDown className="dropdown-arrow" id="tab" />
                      )}
                    </p>
                  </a>
                  {tables && (
                    <ul className="nav">
                      <div className="show">
                        <li>
                          <a href="/" className="nava">
                            <span className="one">RT</span>
                            <span className="two"> Regular Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">ET</span>
                            <span className="two"> Extended Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">BT</span>
                            <span className="two"> Bootstrap Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">DT</span>
                            <span className="two">DataTables.Net</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
                <li className="sub">
                  <a href="/" className="dropdown-toggle" onClick={toggleMaps}>
                    <p>
                      <i class="fa-solid fa-location-dot icon"></i>
                      MAPS
                      {maps ? (
                        //
                        <FaCaretUp className="dropdown-arrow" id="geo" />
                      ) : (
                        <FaCaretDown className="dropdown-arrow" id="geo" />
                      )}
                    </p>
                  </a>
                  {maps && (
                    <ul className="nav">
                      <div className="show">
                        <li>
                          <a href="/" className="nava">
                            <span className="one">GM</span>
                            <span className="two"> Google Maps</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">VM</span>
                            <span className="two"> Vector Maps</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">FSM</span>
                            <span className="two"> Full Screen Map</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
                <li className="sub">
                  <a href="/" className="dropdown-toggle">
                    <p>
                      <i class="fa-solid fa-chart-column icon"></i>
                      CHARTS
                    </p>
                  </a>
                </li>
                <li className="sub">
                  <a href="/" className="dropdown-toggle">
                    <p>
                      <i class="fa-solid fa-calendar-days icon"></i>
                      CALENDER
                    </p>
                  </a>
                </li>

                <li className="sub">
                  <a href="/" className="dropdown-toggle" onClick={togglePages}>
                    <p>
                      <i class="fa-solid fa-puzzle-piece icon"></i>
                      PAGES
                      {pages ? (
                        //
                        <FaCaretUp className="dropdown-arrow" id="page" />
                      ) : (
                        <FaCaretDown className="dropdown-arrow" id="page" />
                      )}
                    </p>
                  </a>
                  {pages && (
                    <ul className="nav">
                      <div className="show">
                        <li>
                          <a href="/" className="nava">
                            <span className="one">LP</span>
                            <span className="two"> Google Maps</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">RP</span>
                            <span className="two"> Register Page</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">LSP</span>
                            <span className="two"> Lock Screen Page</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">UP</span>
                            <span className="two"> User Page</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">MCS</span>
                            <span className="two"> More Coming Soon</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
              </ul>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`panel ${showSidebar ? "sidebar-open" : "sidebar-closed"}`}
      >
        {/* <div
          className={`panel ${showSidebar ? "sidebar-open" : "sidebar-closed"}`}
        > */}
        <div className="navbar">
          <div className="hamburger-toggle">
            <div className="move">
              <div className="mini" onClick={toggleSidebar}>
                {showSidebar ? (
                  <FaEllipsisV className="round" />
                ) : (
                  <FaBars className="round" />
                )}
              </div>
              <a href="/" className="dash">
                Dashboard PRO
              </a>
              <i class="fa-solid fa-magnifying-glass search"></i>
              <input type="text" className="inp" placeholder="Search..." />
              <div className="mirror">
                <i
                  ref={rest1}
                  className={`fa-brands fa-internet-explorer ${
                    showSidebar ? "width" : "fullWidth"
                  }`}
                  onClick={() => {
                    setBellIcon(!bellIcon);
                  }}
                ></i>
                {bellIcon && <Bellicon />}

                <i
                  ref={rest}
                  className={`fa-solid fa-bell ${
                    showSidebar ? "short" : "long"
                  }`}
                  onClick={() => {
                    setOpenProfile(!openProfile);
                  }}
                ></i>

                {openProfile && <Dropdown />}

                <i
                  ref={rest2}
                  className={`fa-solid fa-list ${
                    showSidebar ? "tall" : "taller"
                  }`}
                  onClick={() => {
                    setBullet(!openBullet);
                  }}
                ></i>

                {openBullet && <Bullet />}
                {/* <i
                  className="fa-solid fa-user-large"
                  
                ></i>
                {openProfile && <Dropdown />} */}
                {/* <PopupToggle /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="num">
                <img src={pie} alt="pie" className="pie" />
                <p className={`number ${showSidebar ? "pie1" : "pie2"}`}>
                  {data[0]?.name}
                  <br />
                  <h4>{data[0]?.info}</h4>
                </p>
                <div className={`footer ${showSidebar ? "foot1" : "foot2"}`}>
                  <hr />
                  <div>
                    <i class="fa-solid fa-arrows-rotate icon2"></i>
                    Update now
                  </div>
                </div>
              </div>
              <div className="num">
                <img src={torch} alt="pie" className="pie" />
                <p className={`number1 ${showSidebar ? "pie3" : "pie4"}`}>
                  {data[1]?.name}
                  <br />
                  <h4>{data[1]?.info}</h4>
                </p>
                <div className={`footer ${showSidebar ? "foot3" : "foot4"}`}>
                  <hr />
                  <div>
                    <i class="fa-regular fa-calendar icon2"></i>
                    Last day
                  </div>
                </div>
              </div>
              <div className="num">
                <img src={vector} alt="pie" className="pie" />
                <p className={`number2 ${showSidebar ? "pie5" : "pie6"}`}>
                  {data[2]?.name}
                  <br />
                  <h4> {data[2]?.info}</h4>
                </p>
                <div
                  className={`footer ${showSidebar ? "foot5" : "foot6"}`}
                  id="thre"
                >
                  <hr />
                  <div>
                    <i class="fa-regular fa-clock icon2"></i>
                    In the last hour
                  </div>
                </div>
              </div>
              <div className="num">
                <img src={heart} alt="pie" className="pie" id="heart" />
                <p
                  className={`number3 ${showSidebar ? "pie7" : "pie8"}`}
                  id="thre"
                >
                  {data[3]?.name}
                  <br />
                  <h4>{data[3]?.info}</h4>
                </p>
                <div className={`footer ${showSidebar ? "foot7" : "foot8"}`}>
                  <hr />
                  <div>
                    <i class="fa-solid fa-arrows-rotate icon2"></i>
                    Update now
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className={`inside ${showSidebar ? "vector1" : "vector2"}`}>
                <div className="top">
                  <div className="top-head">
                    <h5 className="fir">Global Sales by Top Locations</h5>
                    <p className="sec">
                      All Products that were shipped
                      <Add
                        className="addcol"
                        showPopUp={showPopup}
                        tooglePopup={togglePopup}
                        fetchres={fetchRes}
                        showSidebar={showSidebar}
                      />
                    </p>
                  </div>
                  {/* <div> */}

                  {/* </div> */}
                </div>
                {/* <div className="addcol">
                  <Add
                    showPopUp={showPopup}
                    tooglePopup={togglePopup}
                    fetchres={fetchRes}
                  />
                </div> */}
                {/* <div className="matter"> */}
                <div className="tech">
                  <div className="left">
                    <table className="table">
                      {res?.map((item, index) => (
                        <tbody key={index}>
                          <tr className="tablebot">
                            <td className="count">
                              <img
                                className="count"
                                src={`data:image/png;base64,${item.image}`}
                                alt=""
                              />
                            </td>
                            <td>{item.country}</td>
                            <td>{item.sales}</td>
                            <td>{item.changes}%</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                  {/* <div className="right"> */}
                  <div
                    className={`map ${showSidebar ? "worldmap" : "fullmap"}`}
                  >
                    <div className="jvectormap-container">
                      <Worldmap />
                      {/* <Map /> */}
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                {/* </div> */}
                <div className="chart">
                  <div className="chartbody">
                    <div className="lefthand"></div>
                    <div className="righthand"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
