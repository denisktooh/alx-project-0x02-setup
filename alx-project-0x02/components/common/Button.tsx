import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
    // size classes
    const sizeClasses = {
        small: "text-sm px-2 py-1",
        medium: "text-base px-3 py-2",
        large: "text-lg px-4 py-3",
    }[size];

    return (
        <button className={`bg-blue-500 text-white ${sizeClasses} ${shape}`}>
        {title}
        </button>
    );
};

export default Button;
