import { Link, useLocation } from 'react-router-dom';
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col items-center">
          <Link to={'/'}>
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          {/* Dashboard */}
          <Link to={'/'}>
            <div className={`${pathname === '/' ? "bg-purple-800 hover:bg-purple-900 text-white" : "bg-gray-100"}  hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block`}>
              <RxDashboard size={20} title="Dashboard" />
            </div>
          </Link>
          {/* Customers */}
          <Link to={'/customers'}>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxPerson size={20} title="Customers" />
            </div>
          </Link>
          {/* Orders */}
          <Link to={'/orders'}>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} title='Orders' />
            </div>
          </Link>
          {/* Setting */}
          <Link to={'/setting'}>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} title='Setting' />
            </div>
          </Link>
        </div>
  )
}

export default Sidebar