import react, {Component} from 'react'

const SideNav = (props) =>{

    return (
       <nav className="sidebar">
         <ul className="side-nav">
           <li className="side-nav__item side-nav__item--active">
             <a href="#" className="side-nav__link">
               <svg className="side-nav__icon">
                 <use xlinkHref="/icons/sprite.svg#icon-home"></use>
               </svg>
               <span>Hotel</span>
             </a>
           </li>

           <li className="side-nav__item ">
             <a href="#" className="side-nav__link">
               <svg className="side-nav__icon">
                 <use xlinkHref="/icons/sprite.svg#icon-aircraft-take-off"></use>
               </svg>
               <span>Flight</span>
             </a>
           </li>

           <li className="side-nav__item">
             <a href="#" className="side-nav__link">
               <svg className="side-nav__icon">
                 <use xlinkHref="/icons/sprite.svg#icon-key"></use>
               </svg>
               <span>Car rental</span>
             </a>
           </li>

           <li className="side-nav__item">
             <a href="#" className="side-nav__link">
               <svg className="side-nav__icon">
                 <use xlinkHref="/icons/sprite.svg#icon-map"></use>
               </svg>
               <span>Tours</span>
             </a>
           </li>
         </ul>
         <div className="legal">
           &copy; 2020. All rights reserved.
         </div>
       </nav>
      );

}

export default SideNav;