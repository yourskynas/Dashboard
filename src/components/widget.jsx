import { Button } from "./button";
import { useState } from "react";

const Widget = ({children, onClick}) => {
    const [isAddedWidget, setIsAddedWidget] = useState(false);
    const backgroundColor = isAddedWidget ? "bg-blue-100" : "bg-white";

    const handleWidgetToggle = () => {
        setIsAddedWidget(!isAddedWidget);
        onClick(isAddedWidget, children);
    };

    return (
        <div className={`${backgroundColor} border border-blue-300 rounded-lg p-6 flex gap-2 items-center justify-between`}>
            <div className="flex gap-2 items-center">
                {children.includes("Task") && (
                    <img src={`${import.meta.env.BASE_URL}icons/task.png`} alt="Task" className="w-12 h-12" />
                )}
                <p className="text-gray-600 font-medium">{children}</p>
            </div>
            <div>
                <Button classes="bg-white border border-gray-300" onClick={handleWidgetToggle}>{isAddedWidget ? "Remove" : "Add"}</Button>
            </div>
        </div>
    )
}

export { Widget };
