const AddedWidget = ({children, style}) => {
    return (
        <div 
            className="bg-white rounded-lg shadow-md p-6 font-medium text-gray-600 h-full flex items-center"
            style={style}
        >
            <p>{children}</p>
        </div>
    )
}

export { AddedWidget };
