import React from 'react';

interface InfoListProps {
    title: string;
    items: { id: number; title: string }[];
}

const InfoList: React.FC<InfoListProps> = ({ title, items }) => {
    return (
        <div className="mt-6">
            <h3 className="sm:text-xl text:lg font-medium">{title}</h3>
            <ul className="list-none sm:text-lg text-base font-extralight text-black mt-2 space-y-2">
                {items.map(item => (
                    <li key={item.id} className="grid grid-cols-[auto,1fr] gap-3 px-4">
                        <span className="text-black">•</span>
                        <span className="text-black">{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfoList;
