import {
  NavLink
} from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header class="header top">
      <div class="contentWrapper">
        <div className="container-fluid px-0">
          <nav className="navbar px-5">
            <a className="navbar-brand logo" href="/">
              Home
            </a>
            <NavLink to="/favorites" className="text-warning text-decoration-none menuItem">
                <i className="bi bi-heart-fill"></i> Favorites
              </NavLink>
          </nav>
          
        </div>
      </div>
    </header>
  //   <header class="header  top">
  //   <div class="contentWrapper">
  //     <div class="logo">
  //       <img src="" alt="moive logo" />
  //     </div>
  //     <ul class="menuItems">
  //       <li class="menuItem"><NavLink to="/favorites" className="text-warning text-decoration-none">
  //               <i className="bi bi-heart-fill"></i> Favorites
  //             </NavLink></li>
        
  //     </ul>
  //     <div class="mobileMenuItems">
  //       <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  //         <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  //       </svg>
  //       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  //         <path d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2 18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z"></path>
  //       </svg>
  //     </div>
  //   </div>
  // </header>
  );
};
