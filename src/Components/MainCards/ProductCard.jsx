import React from 'react';
import '../../Styles/ProductCard.css';


const HeartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="heart-icon"
  >
    <path
      d="M12.0008 21.3501L10.5508 20.0301C5.40078 15.3601 2.00078 12.2801 2.00078 8.50009C2.00078 5.42009 4.42078 3.00009 7.50078 3.00009C9.24078 3.00009 10.9108 3.81009 12.0008 5.09009C13.0908 3.81009 14.7608 3.00009 16.5008 3.00009C19.5808 3.00009 22.0008 5.42009 22.0008 8.50009C22.0008 12.2801 18.6008 15.3601 13.4508 20.0401L12.0008 21.3501Z"
      stroke="#adb5bd"
      strokeWidth="1.5"
    />
  </svg>
);


const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image-container">

        <img
          src="https://i.imgur.com/gB34fIl.png"
          alt="Kindness Heart Earrings"
          className="product-image"
        />
        <button className="like-button" aria-label="Add to wishlist">
          <HeartIcon />
        </button>
      </div>
      <div className="product-details">
        <div className="product-pricing">
          <span className="current-price">₹2,400</span>
          <span className="original-price">₹3,200</span>
        </div>
        <h3 className="product-title">
          Bring in the Kindness Heart Earrings in 9...
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;