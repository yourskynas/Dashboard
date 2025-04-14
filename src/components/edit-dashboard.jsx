import { Button } from "./button";

const EditDashboard = ({ onClick }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <img src="/icons/card_design.png" alt="edit-dashboard" />
            <p className="text-gray-600 font-normal">Welcome to the dashboard editor</p>
            <p className="text-gray-600 font-extralight">Click “Edit Dashboard” to add a new widget</p>
            <Button onClick={() => onClick()}>Edit Dashboard</Button>
        </div>
    )
}       

export { EditDashboard };
