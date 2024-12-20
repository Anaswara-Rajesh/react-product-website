import React, { useEffect, useState } from 'react';
import CartSection from './CartSection';
import ProductImageSection from './ProductImageSection';
import InfoList from './InfoList';
import { useCart } from '../context/CartContext';

interface Product {
    name: string;
    descriptionItems: { id: number, title: string }[];
    availableOfferItems: { id: number, title: string }[];
    image: string;
    status: string;
    subName: string;
    relatedImages: { id: number, url: string }[];
    sizes: string[];
    ingredients: { id: number, title: string }[];
    shipping: { id: number, title: string }[];
    waranty: string;
    supportFirstParagraph: string;
    supportSecondParagraph: string;
    relatedProducts: { id: number, url: string }[];
    handlePreviousButton: () => void;
    handleNextButton: () => void;
}

const ProductDetail: React.FC<Product> = ({
    name, descriptionItems, availableOfferItems, image, status, subName,
    relatedImages, sizes, ingredients, shipping, waranty, supportFirstParagraph,
    supportSecondParagraph, relatedProducts, handlePreviousButton,
    handleNextButton,
}) => {
    const { addToCart, totalItems } = useCart();
    const [activeSize, setActiveSize] = useState<string | null>("1.5 kg");
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        setQuantity(1);
    }, [name]);

    const handleSizeClick = (size: string) => {
        setActiveSize(size);
    };

    const handleQuantityChange = (amount: number) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
    };

    const handleAddToCart = () => {
        if (!activeSize) return;

        const cartItem = {
            id: `${name}-${activeSize}`,
            name: `${name} (${activeSize})`,
            image,
            quantity,
            price: 20,
        };

        addToCart(cartItem);
    };

    return (
        <div className="flex justify-center flex-col lg:flex-row min-h-screen relative">

            {/* Cart Section */}
            <CartSection name={name} image={image} subName={subName} quantity={quantity} handleQuantityChange={handleQuantityChange} handleAddToCartClick={handleAddToCart} />

            {/* Image and arrows section */}
            <ProductImageSection image={image} handlePreviousButton={handlePreviousButton}
                handleNextButton={handleNextButton} />

            {/* Description and details section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left sm:m-8 m-3 sm:space-y-4 space-y-2 relative sm:p-8 p-3 overflow-y-auto  max-h-screen hide-scrollbar">

                {/* Top Button Section */}
                <div className="absolute sm:top-4  top-[-84px] right-4 flex items-center space-x-2">
                    <button className="flex items-center justify-center bg-white px-3 py-3 rounded-full shadow-lg transition-shadow hover:shadow-xl">
                        <div className="relative flex items-center justify-center">
                            <img
                                src="/assets/user.svg"
                                alt="Person"
                                className="w-10 h-7 mr-4 transition-transform duration-200 hover:scale-110 hover:opacity-80"
                            />
                        </div>
                        <div className="relative flex items-center justify-center">
                            <img
                                src="/assets/cart.svg"
                                alt="Cart"
                                className="w-10 h-7 transition-transform duration-200 hover:scale-110 hover:opacity-80"
                            />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                                {totalItems}
                            </span>
                        </div>
                    </button>
                </div>

                <div className="sm:py-24 py-6 flex flex-col sm:items-center justify-items-start items-start lg:items-start sm:text-center text-start lg:text-left ">
                    <span className="text-xs font-bold text-white bg-red-500 px-4 py-1 rounded flex flex-col justify-start text-left">
                        {status}
                    </span>
                    <div className='flex flex-col justify-start text-left'>
                        <h2 className="sm:text-4xl text-xl font-medium mt-4 sm:mt-5">{name}</h2>
                        <span className="sm:text-4xl text-xl font-medium">{subName}</span>
                    </div>

                    {/* Product category and review */}
                    <div className="text-base mt-4 flex flex-wrap items-start justify-start space-x-2 sm:space-x-4">
                        <span className="uppercase tracking-widest text-[#50CC98] font-normal">Cat Food</span>
                        <span>|</span>
                        <span className="text-yellow-500"> ★ ★ ★ ★ ☆</span>
                        <span className="text-[#171C24] ps-1">4.9</span>
                        <span className="text-[#171C24]">(2130 reviews)</span>
                    </div>
                    <div className='sm:pr-28 pr-0'>
                        {/* Description heading and list */}
                        <InfoList title="Description:" items={descriptionItems} />

                        {/* Available Offers */}
                        <InfoList title="Available Offers:" items={availableOfferItems} />
                    </div>
                    <div className='sm:pr-28 pr-0'>
                        {/* Related Images small size */}
                        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 text-left sm:text-left lg:text-left">
                            {relatedImages.map((image) => (
                                <div key={image.id} className="flex justify-center items-center">
                                    <img
                                        src={image.url}
                                        alt={`related-image-${image.id}`}
                                        className="w-full sm:h-32 h-28 object-cover rounded-3xl shadow-md"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Sizes */}
                        <div className="mt-6 flex flex-col items-start text-left sm:text-left lg:text-left sm:items-start lg:items-start">
                            <h3 className=" text-lg font-medium mb-4">Sizes:</h3>
                            <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                                {sizes.map((size, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSizeClick(size)}
                                        className={`sm:py-6 py-5 sm:px-5 px-3 rounded-2xl transition-all ${activeSize === size ? 'bg-[#818AF9] text-white border-2 border-white shadow-inner' : 'bg-[#F6F6F6] text-gray-500'} hover:bg-[#818AF9] hover:text-white`}
                                        style={{ boxShadow: activeSize === size ? 'inset 0 0 10px rgba(255, 255, 255, 0.4)' : 'none' }}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Ingredients */}
                        <div className="text-left sm:text-left lg:text-left items-start sm:items-start lg:items-start">
                            <InfoList title="Ingredients:" items={ingredients} />
                        </div>

                        {/* Shipping */}
                        <InfoList title="Shipping & delivery:" items={shipping} />

                        {/* Warranty */}
                        <div className='flex flex-col justify-start text-left'>
                            <h3 className="text:lg  font-medium mt-6 pb-3">Waranty:</h3>
                            <span className='text-black  text-base font-extralight pt-2 space-y-2'>
                                {waranty}
                            </span>
                        </div>

                        {/* Support */}
                        <div className='flex flex-col justify-start text-left'>
                            <h3 className=" text:lg  font-medium mt-6 pb-3">Support:</h3>
                            <p className='text-black  text-base font-extralight pt-2 space-y-2'>
                                {supportFirstParagraph}
                            </p>
                            <p className='text-black text-base font-extralight pt-2 space-y-2'>
                                {supportSecondParagraph}
                            </p>
                        </div>
                    </div>
                    {/* Related Products */}
                    <div className='flex flex-col justify-start text-left'>
                        <h3 className=" text-base font-medium sm:mt-6 mt-4 pb-8">Related Products:</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 sm:gap-4 gap-2 sm:mt-4 mt-2">
                            {relatedProducts.map((product) => (
                                <div key={product.id} className="flex justify-center w-full items-center bg-[#E3E5FA]">
                                    <img
                                        src={product.url}
                                        alt={`related-product-${product.id}`}
                                        className="w-full sm:h-72 h-28 object-cover rounded shadow-md"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
