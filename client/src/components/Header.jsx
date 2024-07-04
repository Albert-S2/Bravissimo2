import ImgLogo from "../assets/logo.svg";

const Header = () => {
    return (
        <div className="flex flex-wrap m-auto">
            <img src={ImgLogo} className="header-logo m-auto mt-4 mb-4" alt="Bravissimo Logo" />
        </div>
    )
}

export default Header;
