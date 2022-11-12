import React from 'react'
import TopMenu from '../../Components/TopMenu/TopMenu'
import MenuIndex from '../../Components/Menu/MenuIndex'
import Image from '../../Components/Image/Image'
import './Message.scss'
import Footer from '../../Components/Footer/Footer'
import img1 from "../../Image/image1.jpg"
function Message() {
    return (
        <div className='message'>
            <div className="topmenu">
                <TopMenu />
            </div>
            <div className="menuContainer">
                <MenuIndex />
            </div>
            <div className="image">
                <Image />
            </div>
            <div className='content'>
                <div className='first'>
                   <div className="images"> <img id='img' src={img1} alt="img1" className="img" /></div>
                   <div className='second'>
                    <p className="p1">Message from the President</p>
                   <p className="p2">
                    Establishing a World-Class University of Multifaceted Excellence through International Outreach and Applied Research
                   </p>
                   <p className="p3">
                    The National Taiwan University of Science and Technology (Taiwan Tech), under the outstanding leadership of successive presidents, has been recognized by all sectors of society for its academic and practical achievements in such areas as cooperation with industry, promotion of entrepreneurship, and technology licensing. We are focusing our efforts on structuring a campus that nurtures creativity, with a vision of building a world-class university through international outreach and applied research.
                   </p>
                   </div>
                </div>
                <div className="third">
                    <p className="p4">The First Technological University in Taiwan</p>
                    <p className="p5">
                    Taiwan Tech was formerly known as the National Taiwan Institute of Technology, the first higher education institution of its kind within our nation's technical and vocational education system, seeking to develop highly trained engineers and managers. After thirty years of growth and evolution, at present Taiwan Tech is comprised of seven colleges (engineering, electrical engineering, and computer science, management, design, liberal arts and social sciences, applied sciences, and intellectual property studies), twenty-four separate departments, and graduate schools, fourteen interdisciplinary programs, and over thirty-one technological research and development laboratories, as well as research centers for Taiwan building technology, commatrix, materials science and technology, automation and control, ecological and hazard mitigation engineering, nanotechnology, communication and electromagnetic technology, Opto-mechatronics technology, power electronics technology, intelligent robot, construction safety, and health, the study of lottery and commercial gaming, e-learning, color technology, information security, sustainable energy development, and IoT Innovation. Our faculty have abundant experience in teaching and research and have at their disposal the best in teaching facilities, including an all-campus wireless network.
                    </p>
                    <p className="p4">
                    Academic Excellence and Effective Cooperation with Industry
                    </p>
                    <p className="p5">
                    Publications by Taiwan Tech faculty in international scholarly journals rank our university among the top ten of Taiwan's more than 170 institutions of higher education, and we are ranked third in technology licensing, as well as receiving recognition from the National Science Council for excellence in this area. Taiwan Tech's practical education and applied research are also highly valued by Taiwan's industries. Taiwan Tech has been rated among the top five universities in Taiwan by 1,000 large enterprises surveyed by Cheers magazine. In addition, Taiwan Tech is the only university in Taiwan to have been recognized seven years in a row by the Chinese Institute of Engineers for excellence in cooperation with industry.
                    </p>
                    <p className="p5">
                    In a related area, Taiwan Tech's Business Incubation Center has frequently been recognized for its outstanding success in mobilizing the university's extensive expertise, research facilities, resources, and experience in cooperation with industry to help small and medium enterprises to create and upgrade their businesses. The Center has received the Ministry of Economic Affairs' Award for Excellence in Innovative Research four years in a row. The research achievements of Taiwan Tech's faculty and students have great commercial potential, and the university has derived considerable income from its intellectual property rights, technology transfers, and licensing fees, placing Taiwan Tech in the first rank of Taiwan's universities for its research capabilities.
                     </p>
                    <p className="p4">Training Students with an International Outlook and Creative Vision</p>
                    <p className="p5">In pursuit of the goal of international outreach, Taiwan Tech established the Office of International Affairs to facilitate its efforts in this area in 2006. In addition, a Creativity Center has been established to develop our students' creative potential through a wide variety of activities and contests.
                    </p>
                    <p className="p5">
                     In the future, Taiwan Tech will continue to maintain a balanced emphasis on theory and practice, science and technology, and the humanities, advancing on the university's superior foundation its excellence in research, achievement in cooperation with industry, and promotion of international academic exchange. By mobilizing resources on and off-campus, at home and abroad, Taiwan Tech will develop into a world-class university of applied research.
                     </p>
                </div>
            </div>
            <div className="bottom2">
                <Footer />
            </div>
            <div className="footer3">Copyright &copy; 2022 Addiss Gafat Technology College</div>
        </div>
    )
}

export default Message