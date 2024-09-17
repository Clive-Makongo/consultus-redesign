import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CustomArrow = ({ direction, onClick }) => {
    const Icon = direction === 'next' ? ChevronRight : ChevronLeft;

    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 -translate-y-1/2 ${direction === 'next' ? 'right-2' : 'left-2'
                } z-10 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300`}
            aria-label={`${direction} slide`}
        >
            <Icon className="w-6 h-6 text-gray-800" />
        </button>
    );
};

export const NextArrow = (props) => <CustomArrow direction="next" {...props} />;
export const PrevArrow = (props) => <CustomArrow direction="prev" {...props} />;