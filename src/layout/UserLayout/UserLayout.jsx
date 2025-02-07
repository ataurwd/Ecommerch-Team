import { Link, Outlet } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";


const UserLayout = () => {
    const { user } = UseAuth()
    return (
        <div className="">
           <div className="m-8 flex gap-3">
           <Link to='/user-dashboard/all' className="btn">Account</Link>
           <Link to='/' className="btn">Home</Link>
           </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-7 mt-10">
                    <img className="rounded-full w-20" src={user?.photoURL} alt="" />
                   <div>
                    <h1 className="font-bold">Hello,</h1>
                   <h1 className="text-4xl font-bold"> {user?.displayName}</h1>
                   </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default UserLayout;