import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  };

  const applyFilter = () => {
    let filteredProducts = products.slice();
    if (showSearch && search) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(filteredProducts);
  };

  const sortProducts = () => {
    let sortedProducts = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(sortedProducts.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(sortedProducts.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        {/* Category filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* Sub category filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product, index) => (
            <ProductItem
              key={index}
              id={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;

// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import Title from "../components/Title";
// import ProductItem from "../components/ProductItem";

// const Collections = () => {
//   const { products } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 10;

//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(category.filter((item) => item !== e.target.value));
//     } else {
//       setCategory([...category, e.target.value]);
//     }
//     setCurrentPage(1);
//   };

//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(subCategory.filter((item) => item !== e.target.value));
//     } else {
//       setSubCategory([...subCategory, e.target.value]);
//     }
//     setCurrentPage(1);
//   };

//   const applyFilterAnđSort = () => {
//     let filteredProducts = products.slice();
//     if (category.length > 0) {
//       filteredProducts = filteredProducts.filter((item) =>
//         category.includes(item.category)
//       );
//     }
//     if (subCategory.length > 0) {
//       filteredProducts = filteredProducts.filter((item) =>
//         subCategory.includes(item.subCategory)
//       );
//     }
//     switch (sortType) {
//       case "low-high":
//         filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
//         break;
//       case "high-low":
//         filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         break;
//     }
//     setFilterProducts(filteredProducts);
//   };

//   useEffect(() => {
//     applyFilterAnđSort();
//   }, [category, subCategory, sortType]);

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filterProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   const totalPages = Math.ceil(filterProducts.length / productsPerPage);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const renderPagination = () => {
//     let pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(
//         <button
//           key={i}
//           onClick={() => paginate(i)}
//           className={`px-2 py-1 border border-gray-300 text-sm ${
//             currentPage === i ? "bg-gray-300" : ""
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }
//     return pages;
//   };

//   return (
//     <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
//       {/* Filter */}
//       <div className="min-w-60">
//         <p
//           onClick={() => setShowFilter(!showFilter)}
//           className="my-2 text-xl flex items-center cursor-pointer gap-2"
//         >
//           FILTERS
//           <img
//             src={assets.dropdown_icon}
//             className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
//             alt=""
//           />
//         </p>
//         {/* Category filters */}
//         <div
//           className={`border border-gray-300 pl-5 py-3 mt-6 ${
//             showFilter ? "" : "hidden"
//           } sm:block`}
//         >
//           <p className="mb-3 text-sm font-medium">CATEGORIES</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Men"}
//                 onChange={toggleCategory}
//               />
//               Men
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Women"}
//                 onChange={toggleCategory}
//               />
//               Women
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Kids"}
//                 onChange={toggleCategory}
//               />
//               Kids
//             </p>
//           </div>
//         </div>
//         {/* Sub category filters */}
//         <div
//           className={`border border-gray-300 pl-5 py-3 my-5 ${
//             showFilter ? "" : "hidden"
//           } sm:block`}
//         >
//           <p className="mb-3 text-sm font-medium">TYPES</p>
//           <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Topwear"}
//                 onChange={toggleSubCategory}
//               />
//               Topwear
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Bottomwear"}
//                 onChange={toggleSubCategory}
//               />
//               Bottomwear
//             </p>
//             <p className="flex gap-2">
//               <input
//                 type="checkbox"
//                 className="w-3"
//                 value={"Winterwear"}
//                 onChange={toggleSubCategory}
//               />
//               Winterwear
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Right side */}
//       <div className="flex-1">
//         <div className="flex justify-between text-base sm:text-2xl mb-4">
//           <Title text1={"ALL"} text2={"COLLECTIONS"} />
//           {/* Product Sort */}
//           <select
//             className="border-2 border-gray-300 text-sm px-2"
//             onChange={(e) => setSortType(e.target.value)}
//           >
//             <option value="relavent">Sort by: Relavent</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* Map product */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
//           {currentProducts.map((product, index) => (
//             <ProductItem
//               key={index}
//               id={product._id}
//               name={product.name}
//               image={product.image}
//               price={product.price}
//             />
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center mt-5 gap-2">
//           {renderPagination()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collections;
