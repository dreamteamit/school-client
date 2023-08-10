

const Navbar = () => {

    const tabItem = <>

        <li><a>HOME</a></li>
        <li><a>ABOUT US</a></li>
        <li><a>ACADEMICS</a></li>
        <li><a>ADMISSION</a></li>
        <li><a>RESULTS</a></li>
        <li><a>FACILITES</a></li>
        <li><a>NOTICE</a></li>
        <li><a>CONTACT US</a></li>

    </>

    return (
        <div className="navbar  bg-green-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-bold w-52">
                        {tabItem}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-bold text-white px-1">
                {tabItem}
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Navbar;