import Navbar from '../../Component/SharedFile/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/SharedFile/Footer/Footer';
import bgimage from '../../assets/Image/back-ground.jpg'
import Fixedbar from '../../Component/SharedFile/FixedNav/FixedNav';

const MainLayout = () => {
    return (
        <div className='mx-5 mt-2' style={{
            backgroundImage: `url(${bgimage})`,
          }} >
            <Fixedbar></Fixedbar>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    
    );
};

export default MainLayout;