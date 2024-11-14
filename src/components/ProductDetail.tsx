import React from 'react';

interface Product {
    name: string;
    description: string;
    price: string;
    image: string;
}

const ProductDetail: React.FC<Product> = ({ name, description, price, image }) => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">

            <div className="relative w-full lg:w-1/2 flex items-center justify-center bg-[#E3E5FA]  mb-8 lg:mb-0">
                <img
                    src="/assets/arrow-left.svg"
                    alt="Previous"
                    className="absolute left-2 lg:left-14 w-6 h-6 lg:w-8 lg:h-8 cursor-pointer hover:opacity-80"
                />
                <img
                    src={image}
                    alt={name}
                    className="max-h-[60vh] w-auto rounded-lg object-cover"
                />
                <img
                    src="/assets/arrow-right.svg"
                    alt="Next"
                    className="absolute right-2 lg:right-14 w-6 h-6 lg:w-8 lg:h-8 cursor-pointer hover:opacity-80"
                />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
               
            </div>
        </div>
    );
};

export default ProductDetail;
