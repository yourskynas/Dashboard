import { useState } from "react";
import { ChangeLanguage } from "./change-language";

const Language = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-start gap-1 relative bg-white rounded-4xl p-2 shadow-md">
            <div>
                <img src="/icons/Usa.png" alt="USA flag" />
            </div>
            <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-gray-500"><path d="M6 10l3 3 3-3"/></svg>
            </button>
            {isOpen && <ChangeLanguage />}
        </div>
    );
}

export { Language };
