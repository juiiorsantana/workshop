import React from 'react';

interface FluidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
}

export const FluidButton: React.FC<FluidButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "font-display font-medium text-lg px-8 py-4 rounded-full transition-all duration-300 active:scale-95 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-gradient-to-r from-alert-orange to-red-600 text-white shadow-soft-orange hover:shadow-glow hover:-translate-y-1",
        secondary: "bg-white text-slate-900 border border-slate-100 shadow-soft-sm hover:shadow-soft hover:bg-slate-50",
        outline: "bg-transparent text-slate-600 border border-slate-200 hover:border-alert-orange hover:text-alert-orange",
    };

    return (
        <button
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};
