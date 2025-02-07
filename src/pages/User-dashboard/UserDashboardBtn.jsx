import {
    FaShoppingCart,
    FaUserEdit,
    FaHeart,
    FaMoneyCheckAlt,
    FaLock
} from "react-icons/fa";
import { Link } from "react-router-dom";

const UserDashboardBtn = () => {


    const menuItems = [
        { title: "Order", icon: <FaShoppingCart />,path: "order" },
        { title: "Edit Profile", icon: <FaUserEdit />,path: "edit-profile" },
        { title: "Wishlist", icon: <FaHeart /> ,path: "Wishlist"},
        { title: "Your Transaction", icon: <FaMoneyCheckAlt /> ,path: "transaction"},
        { title: "Change Password", icon: <FaLock />,path: "passord" },
    ];
    return (
        <div className="grid md:grid-cols-3 gap-8 my-8">
            {
                menuItems.map(item => <Link to={`/user-dashboard/all/${item.path}`} className="w-48 h-48 flex flex-col items-center justify-center bg-white shadow-md rounded-lg border">
                    <div className="text-gray-600 text-3xl">
                        {item.icon}
                    </div>

                    <h2 className="text-md font-medium mt-2">
                        {item.title}
                    </h2>
                </Link>)
            }



        </div>
    );
};

export default UserDashboardBtn;