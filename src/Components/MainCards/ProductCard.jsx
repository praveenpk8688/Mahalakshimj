import React, { useState } from 'react';
import '../../Styles/ProductCard.css';

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="heart-icon">
    <path d="M12.0008 21.3501L10.5508 20.0301C5.40078 15.3601 2.00078 12.2801 2.00078 8.50009C2.00078 5.42009 4.42078 3.00009 7.50078 3.00009C9.24078 3.00009 10.9108 3.81009 12.0008 5.09009C13.0908 3.81009 14.7608 3.00009 16.5008 3.00009C19.5808 3.00009 22.0008 5.42009 22.0008 8.50009C22.0008 12.2801 18.6008 15.3601 13.4508 20.0401L12.0008 21.3501Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProductCard = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    {
      id: 1,
      category: 'Silver',
      image: "https://images.unsplash.com/photo-1599643477874-ceab8674d89d?q=80&w=800&auto=format&fit=crop",
      title: "Kindness Heart Earrings in 925 Silver",
      price: "₹2,400",
      originalPrice: "₹3,200",
    },
    {
      id: 2,
      category: 'Gold',
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
      title: "Golden Pearl Drop Earrings",
      price: "₹18,000",
      originalPrice: "₹21,500",
    },
    {
      id: 3,
      category: 'Silver',
      image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=800&auto=format&fit=crop",
      title: "Silver Stud Heart Earrings",
      price: "₹1,200",
      originalPrice: "₹1,700",
    },
    {
      id: 4,
      category: 'Diamond',
      image: "https://images.unsplash.com/photo-1599643478524-fb66f83ab4aa?q=80&w=800&auto=format&fit=crop",
      title: "Regal Diamond Necklace",
      price: "₹1,45,000",
      originalPrice: "₹1,52,000",
    },
    {
      id: 5,
      category: 'Diamond',
      image: "https://images.unsplash.com/photo-1515562141207-7a8ea3f06533?q=80&w=800&auto=format&fit=crop",
      title: "Elegant Diamond Ring",
      price: "₹28,500",
      originalPrice: "₹35,000",
    },
    {
      id: 6,
      category: 'Gold',
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
      title: "Classic Gold Bangles",
      price: "₹85,000",
      originalPrice: "₹90,000",
    },
    {
      id: 7,
      category: 'Gold',
      image: "https://images.unsplash.com/photo-1588444650588-6c67329a7391?q=80&w=800&auto=format&fit=crop",
      title: "24K Classic Gold Chain",
      price: "₹45,000",
      originalPrice: null,
    },
    {
      id: 8,
      category: 'Diamond',
      image: "https://images.unsplash.com/photo-1605100804763-247f6cdcb035?q=80&w=800&auto=format&fit=crop",
      title: "Radiant Diamond Stud Earrings",
      price: "₹32,000",
      originalPrice: "₹38,000",
    }
  ];

  const categories = ['All', 'Gold', 'Silver', 'Diamond'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="products-section">
      <div className="category-filters">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="premium-product-card" key={product.id}>
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-actions">
                <button className="icon-btn" aria-label="Add to wishlist">
                  <HeartIcon />
                </button>
                <button className="icon-btn cart-btn" aria-label="Add to cart">
                  <CartIcon />
                </button>
              </div>
              {product.originalPrice && (
                <div className="sale-badge">Sale</div>
              )}
            </div>

            <div className="product-details">
              <p className="product-category">{product.category}</p>
              <h3 className="product-title">{product.title}</h3>
              <div className="product-pricing">
                <span className="current-price">{product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;