import { EditDashboard } from "../edit-dashboard";  
import { useState } from "react";
import { Widgets } from "../widgets";

const Dashboard = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditDashboard = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {!isEditing ? <EditDashboard onClick={handleEditDashboard} /> : <Widgets onClick={handleEditDashboard} />}
        </div>
    )
}   

export { Dashboard };
