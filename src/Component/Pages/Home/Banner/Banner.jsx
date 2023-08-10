
import img1 from '../../../../assets/Image/school.jpg';
import img2 from '../../../../assets/Image/school-ground.jpg';
import img3 from '../../../../assets/Image/School-01.jpg';
import img4 from '../../../../assets/Image/School-02.jpg';


const Banner = () => {
    return (
        <div className="flex">
            <div className="w-3/4 flex items-center justify-center">
                <div className="carousel w-3/4 h-3/4">
                    <div id="slide1" className="carousel-item relative w-full h-full">
                        <img src={img1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-full">
                        <img src={img2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-full">
                        <img src={img3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full h-full">
                        <img src={img4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4">
                <h2>Notice Board</h2>

            </div>

        </div>
    );
};

export default Banner;