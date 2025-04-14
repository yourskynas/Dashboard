const Button = ({ children, onClick, classes = "bg-[#DBEAFE]" }) => {
    return (
        <button className={`text-sm font-medium text-gray-800 mb-4 mt-4 rounded-lg p-2 cursor-pointer hover:bg-[#C3D1E2] hover: duration-400 ${classes}`} onClick={onClick}>{children}</button>
    )
}

export { Button };
