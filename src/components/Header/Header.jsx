import "./Header.css";
import ChevronUp from "../../assets/icons/ChevronUp.svg"

export default function Header() {

    return (
        <header className="main-header">
            <div className="logo">
                REACT Component Guide
            </div>
            <a href="#hero-section" className="back-top-btn">Back to top <img src={ChevronUp} alt="chevrno up icon" /></a>
        </header>
    )
}