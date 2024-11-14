import React from 'react';

interface ProductImageSectionProps {
    image: string;
}

const ProductImageSection: React.FC<ProductImageSectionProps> = ({ image }) => {
    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#E3E5FA] relative overflow-hidden">
            <img
                src="/assets/arrow-left.svg"
                alt="Previous"
                className="absolute left-4 sm:left-8 md:left-10 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80 z-10"
            />

            <div className="w-full sm:h-auto flex justify-center items-center overflow-hidden">
                <img
                    src={image}
                    alt="Product"
                    className="max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] w-auto sm:w-full object-contain sm:object-cover rounded-lg"
                />
            </div>

            <img
                src="/assets/arrow-right.svg"
                alt="Next"
                className="absolute right-4 sm:right-8 md:right-10 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80 z-10"
            />
        </div>
    );
};

export default ProductImageSection;
