import Download from "../../../assets/svg/download";
import Github from "../../../assets/svg/github";
import Linkedin from "../../../assets/svg/linkedin";
const InfoSidebar = () => {
    return (
        <div className='lg:fixed flex lg:flex-col justify-around items-center lg:w-11 h-44 lg:h-44 lg:rounded-r-xl bottom-16 bg-port-superlight-green dark:bg-port-darker-blue'>
            <a href="https://www.github.com/bernasx" target="_blank" rel="noreferrer"><Github width={30} height={30} className="fill-port-dark-green" viewBox='0 0 24 24' title="Github Link"></Github></a>
            <a href="https://www.linkedin.com/in/bernardoribeiro99/" target="_blank" rel="noreferrer"><Linkedin width={30} height={30} className="fill-port-dark-green" viewBox='0 0 24 24' title="Linkedin Link"></Linkedin></a>
            <a href="https://www.github.com/bernasx" target="_blank" rel="noreferrer"><Download width={30} height={30} className="fill-port-dark-green" viewBox='0 0 24 24' title="CV Download Link"></Download></a>
        </div>
    )
}

export default InfoSidebar;