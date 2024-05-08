import React from "react";
import "./App.css";

const Bullet = () => {
  return (
    <div className="flex flex-col bullet">
      <ul className="flex flex-col gap-4">
        <li>
          <i class="fa-regular fa-envelope mes"></i>
          Messages
        </li>
        <li>
          <i class="fa-solid fa-umbrella mes"></i>
          Help Center
        </li>
        <li>
          <i class="fa-solid fa-screwdriver-wrench mes "></i>Settings
        </li>
        <li>
          <i class="fa-solid fa-unlock-keyhole mes" id="logout"></i>Lockscreen
        </li>
        <hr id="hire" />
        <li id="power">
          <i class="fa-solid fa-power-off mes"></i>Log out
        </li>
      </ul>
    </div>
  );
};

export default Bullet;
