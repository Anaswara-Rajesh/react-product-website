import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
    id: string;
    name: string;
    quantity: number;
    image: string;
    price: number;
}

interface CartContextType {
    cartItems: CartItem[];
    totalItems: number;
    addToCart: (item: CartItem) => void;
    updateCartCount: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems((prev) => {
            const existingItem = prev.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prev.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }
            return [...prev, item];
        });
    };

    const updateCartCount = (id: string, quantity: number) => {
        setCartItems((prev) =>
            prev.map((cartItem) =>
                cartItem.id === id ? { ...cartItem, quantity } : cartItem
            )
        );
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, totalItems, addToCart, updateCartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('used within a CartProvider');
    }
    return context;
};
