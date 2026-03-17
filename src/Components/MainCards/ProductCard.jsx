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
 const products = [
  {
    id: 1,
    image: "https://i.imgur.com/gB34fIl.png",
    title: "Bring in the Kindness Heart Earrings in 9...",
    price: "₹2,400",
    originalPrice: "₹3,200",
  },
  {
    id: 2,
    image: "https://i.imgur.com/gB34fIl.png",
    title: "Golden Pearl Drop Earrings",
    price: "₹1,800",
    originalPrice: "₹2,500",
  },
  {
    id: 3,
    image: "https://i.imgur.com/gB34fIl.png",
    title: "Silver Stud Heart Earrings",
    price: "₹1,200",
    originalPrice: "₹1,700",
  },
    {
    id: 11,
    image: "https://i.imgur.com/gB34fIl.png",
    title: "Bring in the Kindness Heart Earrings in 9...",
    price: "₹2,400",
    originalPrice: "₹3,200",
  },
  {
    id: 22,
    image: "https://i.imgur.com/gB34fIl.png",
    title: "Golden Pearl Drop Earrings",
    price: "₹1,800",
    originalPrice: "₹2,500",
  },
  {
    id: 33,
    image: "https://i.imgur.com/gB34fIl.png",
    title: "Silver Stud Heart Earrings",
    price: "₹1,200",
    originalPrice: "₹1,700",
  },
    {
    id: 111,
    image: "https://i.imgur.com/gB34fIl.png",
    title: "Bring in the Kindness Heart Earrings in 9...",
    price: "₹2,400",
    originalPrice: "₹3,200",
  },
  {
    id: 222,
    image: "https://i.imgur.com/gB34fIl.png",
    title: "Golden Pearl Drop Earrings",
    price: "₹1,800",
    originalPrice: "₹2,500",
  },
  {
    id: 333,
    image: "https://i.imgur.com/gB34fIl.png",
    title: "Silver Stud Heart Earrings",
    price: "₹1,200",
    originalPrice: "₹1,700",
  },
];

return (
  <div className="product-list row g-3">
    {products.map((product) => (
      <div className="product-card" key={product.id}>
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <button className="like-button" aria-label="Add to wishlist">
            <HeartIcon />
          </button>
        </div>

        <div className="product-details">
          <div className="product-pricing">
            <span className="current-price">{product.price}</span>
            <span className="original-price">{product.originalPrice}</span>
          </div>

          <h3 className="product-title">{product.title}</h3>
        </div>
      </div>
    ))}
  </div>
);
};

export default ProductCard;