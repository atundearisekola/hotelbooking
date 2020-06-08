import '../../sass/main.module.scss';
import react, {Component} from 'react'

export default class HotelView extends Component {
  render(){
    return (
      <main className="hotel-view">
       <div className="gallery">
         <figure className="gallery__item">
           <img src="/img/street.jpeg" alt="Photo of hotel" className="gallery__photo" />
         </figure>
         <figure className="gallery__item">
           <img src="/img/las.jpeg" alt="Photo of hotel" className="gallery__photo" />
         </figure>
         <figure className="gallery__item">
           <img src="/img/images.jpeg" alt="Photo of hotel" className="gallery__photo" />
         </figure>
       </div>
       <div className="overview">
         <h1 className="overview__heading">
           Eko Hotel
         </h1>
         <div className="overview__stars">
           <svg className="overview__icon-star">
             <use xlinkHref="/icons/sprite.svg#icon-star"></use>
           </svg>
           <svg className="overview__icon-star">
             <use xlinkHref="/icons/sprite.svg#icon-star"></use>
           </svg>
           <svg className="overview__icon-star">
             <use xlinkHref="/icons/sprite.svg#icon-star"></use>
           </svg>
           <svg className="overview__icon-star">
             <use xlinkHref="/icons/sprite.svg#icon-star"></use>
           </svg>
           <svg className="overview__icon-star">
             <use xlinkHref="/icons/sprite.svg#icon-star"></use>
           </svg>
         </div>
         <div className="overview__location">
         <svg className="overview__icon-location">
             <use xlinkHref="/icons/sprite.svg#icon-location-pin"></use>
           </svg>
           <button className="btn-inline">Ikeja, Lagos</button>

         </div>
         <div className="overview__rating">
           <div className="overview__rating-average">8.6</div>
           <div className="overview__rating-count">429 votes</div>
         </div>

       </div>

       <div className="detail">
         <div className="description">
           <p className="paragraph">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           

           </p>

           <p className="paragraph">
           is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal

           </p>

           <ul className="list">
             <li className="list__item">Close to the beach </li>
             <li className="list__item">  Breakfast included</li>
             <li className="list__item">Free airport shuttle </li>
             <li className="list__item">Free wifi in all rooms </li>
             <li className="list__item">Air conditioning and heating </li>
             <li className="list__item">Pets allowed </li>
             <li className="list__item">We speak all languages </li>
             <li className="list__item">Perfect for families </li>
           </ul>

           <div className="recommend">
             <p className="recommend__count">
               Lucy and 3 other friends recommend this hotel.
             </p>
             <div className="recommend__friends">
               <img src="/img/user.jpg" alt="Friend 1" className="recommend__photo"/>
               <img src="/img/user.jpg" alt="Friend 2" className="recommend__photo"/>
               <img src="/img/user.jpg" alt="Friend 3" className="recommend__photo"/>
               <img src="/img/user.jpg" alt="Friend 4" className="recommend__photo"/>
             </div>
           </div>
         </div>

         <figure className="user-reviews">
           <figure className="review">
             <blockquote className="review__text">
             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.

             </blockquote>
             <figcaption className="review__user">
               <img src="/img/user.jpg" alt="User 1" className="review__photo"/>
               <div className="review__user-box">
                 <p className="review__user-name">Nick Smith</p>
                 <p className="review__user-date">Feb 23rd, 2020</p>
               </div>
               <div className="review__rating">7.8</div>
             </figcaption>

           </figure>

           <figure className="review">
             <blockquote className="review__text">
             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.

             </blockquote>
             <figcaption className="review__user">
               <img src="/img/user.jpg" alt="User 1" className="review__photo"/>
               <div className="review__user-box">
                 <p className="review__user-name">Mary Thomas</p>
                 <p className="review__user-date">Sept, 13th, 2020</p>
               </div>
               <div className="review__rating">9.3</div>
             </figcaption>

           </figure>

           <button className="btn-inline">Show all <span>&rarr;</span></button>
        
         </figure>

       </div>
       <div className="cta">
           <h2 className="cta__book-now">
             Good news! We have 4 free rooms for your selected dates!
             </h2>
             <button className="btn">
               <span className="btn__visible">Book now</span>
               <span className="btn__invisible">Only 4 rooms left</span>
             </button>
         </div>

      </main>
    );
  }
}