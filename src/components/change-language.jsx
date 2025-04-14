const ChangeLanguage = () => {
    const flags = [
        { name: 'English', image: `${import.meta.env.BASE_URL}icons/Usa.png` },
        { name: 'French', image: `${import.meta.env.BASE_URL}icons/France.png` },
        { name: 'German', image: `${import.meta.env.BASE_URL}icons/Germany.png` },
        { name: 'Italian', image: `${import.meta.env.BASE_URL}icons/Italy.png` }
    ];
    
    return (
        <div className="flex flex-col gap-4 bg-white rounded-xl shadow-md p-2 absolute top-[100%] right-0 mt-1 z-50 w-[100px] overflow-hidden">
            {flags.map((flag) => (
                <div key={flag.name} className="flex items-center gap-2 cursor-pointer">
                    <div>
                        <img 
                            src={flag.image} 
                            alt={`${flag.name} flag`} 
                            className="object-cover w-6 h-4"
                        />
                    </div>
                    <div>
                        <p className="font-light text-gray-800 text-sm">{flag.name}</p>
                    </div>
                </div>
            ))}
            </div>
    )
}   

export { ChangeLanguage };
