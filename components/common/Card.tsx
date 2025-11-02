import React from 'react';
import Image from 'next/image';

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
      <Image src={imageUrl} alt={title} width={400} height={250} className="w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        {price && <p className="text-blue-600 font-bold">{price}</p>}
      </div>
    </div>
  );
};

export default Card;
