const NotificationsWrapper = () => {
    return (
        <div className="border-l-2 border-r-2 border-gray-300">
            <button className="p-2">
                <img src={`${import.meta.env.BASE_URL}icons/bell.png`} alt="bell" />
            </button>
        </div>
    )
}

export { NotificationsWrapper };
