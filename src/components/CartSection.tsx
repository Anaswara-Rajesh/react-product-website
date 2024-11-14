import React from 'react';

interface CartSectionProps {
    name: string;
    image: string;
    subName: string;
    handleQuantityChange: (amount: number) => void;
    quantity: number;
}

const CartSection: React.FC<CartSectionProps> = ({ name, image, subName, handleQuantityChange, quantity }) => {
    return (
        <div className="sm-[90%] w-[98%] sm:rounded-3xl rounded-xl grid grid-cols-1 lg:grid-cols-2 items-center bg-white p-4 sm:mb-8 mb-0 absolute sm:bottom-20 bottom-[66vh]  z-20 gap-4">

            {/* First column: Product image, name, and category */}
            <div className="hidden lg:flex items-center space-x-4">
                <img src={image} alt={name} className="w-24 h-20 object-cover rounded-lg" />
                <div>
                    <h2 className="text-lg font-medium">{name + " " + subName}</h2>
                    <p className="uppercase tracking-wide text-[#50CC98] font-medium">Cat Food</p>
                </div>
            </div>

            {/* Second column: Quantity and Add to Cart button */}
            <div className="flex sm:flex-wrap justify-between items-center align-middle">
                <div className="flex flex-wrap sm:space-x-6 space-x-4 justify-center items-center">
                    <span className="text-lg">Qty:</span>
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={() => handleQuantityChange(-1)}
                            className="bg-transparent text-[#828EF9] sm:px-3 px-2 font-semibold py-0 border-2 rounded border-[#828EF9]"
                        >
                            -
                        </button>
                        <span className="sm:text-lg text-base border-2 border-[#D4D4D4] text-black px-4 py-2 rounded-xl">{quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="bg-transparent text-[#828EF9] font-semibold sm:px-3 px-2 py-0 border-2 rounded border-[#828EF9]"
                        >
                            +
                        </button>
                    </div>
                </div>

                <button className="bg-[#828EF9] uppercase sm:text-lg text-base  text-white sm:px-10 px-3 sm:py-3 py-2 rounded-xl hover:bg-[#828EF9] sm:mt-4 mt-0 ">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default CartSection;