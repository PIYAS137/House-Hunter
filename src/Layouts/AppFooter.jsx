import { FaBuildingColumns } from "react-icons/fa6";

const AppFooter = () => {


    
    return (
        <div className=" bg-base-200">
            <footer className="footer p-10 mx-auto container text-base-content flex justify-around">
                <aside>
                    <FaBuildingColumns className=" text-5xl text-yellow-600"/>
                    <p className=" text-lg font-bold">House Hunter Ltd.<br /><small className=" font-light">Providing reliable tech since 1992</small></p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

export default AppFooter