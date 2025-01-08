import React from 'react'


const Products = [
  {
    id: 1,
    title: "Soft Comforter",
    category: "Fixing",
    price: "$13",
    imgUrl: "/images/one.jpg",
    bgColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "walvet Sofa",
    category: "Fixing",
    price: "$12",
    imgUrl: "/images/two.jpg",
    bgColor: "bg-amber-500",
  },
  {
    id: 3,
    title: "Bossy Chair",
    category: "Fixing",
    price: "$10",
    imgUrl: "/images/three.jpg",
    bgColor: "bg-amber-500",
  },
  {
    id: 4,
    title: "Decent Pink Comfy",
    category: "Fixing",
    price: "$14",
    imgUrl: "/images/four.jpg",
    bgColor: "bg-amber-500",
  },
  {
    id: 5,
    title: "Cyan Huge Set",
    category: "Fixing",
    price: "$15",
    imgUrl: "/images/five.jpg",
    bgColor: "bg-amber-500",
  },
  {
    id: 6,
    title: "Luxury Sofa",
    category: "Fixing",
    price: "$16",
    imgUrl: "/images/six.jpg",
    bgColor: "bg-amber-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {Products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden bg-blue-950 rounded-lg shadow-lg group max-w-80 max-h-60`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="200.52"
              y="180"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="180.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.45)"
              fill="white"
            />
          </svg>

          <div className="relative w-80 h-40 flex items-center justify-center group-hover:scale-110 transition-transform">
          <img
  className="relative w-80 h-36 object-cover
  .relative.pt-80.px-60 {
  display: flex;
  align-items: center;
  justify-content: center;
}

  "
  src={product.imgUrl}
  alt={product.title}
  
/>



          </div>

          <div className="relative text-white px-6 pt-6 mt-6">
            <span className="block opacity-75 mb-1">{product.category}</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-blue-950 text-xs font-bold px-3 py-2 leading-none">
                USD {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}



