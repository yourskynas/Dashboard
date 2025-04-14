import { Input } from "./input";
import { Language } from "./language";
import { NotificationsWrapper } from "./notifications-wrapper";
const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center gap-4 p-6">
                <Input />
                <div className="flex items-center gap-4">
                    <NotificationsWrapper />
                    <Language />
                </div>
            </div>
        </header>
    )
}   

export { Header };
