import {
    FaShoppingCart,
    FaUserEdit,
    FaHeart,
    FaMoneyCheckAlt,
    FaLock
} from "react-icons/fa";

const UserDashboardBtn = () => {


    const menuItems = [
        { title: "Order", icon: <FaShoppingCart /> },
        { title: "Edit Profile", icon: <FaUserEdit /> },
        { title: "Wishlist", icon: <FaHeart /> },
        { title: "Your Transaction", icon: <FaMoneyCheckAlt /> },
        { title: "Change Password", icon: <FaLock /> },
    ];
    return (
        <div className="grid md:grid-cols-3 gap-8 my-8">
            {
                menuItems.map(item => <div className="w-48 h-48 flex flex-col items-center justify-center bg-white shadow-md rounded-lg border">
                    <div className="text-gray-600 text-3xl">
                        {item.icon}
                    </div>

                    <h2 className="text-md font-medium mt-2">
                        {item.title}
                    </h2>
                </div>)
            }



        </div>
    );
};

export default UserDashboardBtn;