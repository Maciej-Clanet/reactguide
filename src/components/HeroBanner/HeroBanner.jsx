import "./HeroBanner.css"

export default function HeroBanner() {

    return (
        <>
            <section id="hero-section" className="hero-banner">
                <div className="hero-text">
                    <h1>REACT</h1>
                    <h2>COMPONENT GUIDE</h2>
                </div>
            </section>
            <div className="hero-label-wrapper">
                A visual guide to REACT features with component examples.
            </div>
        </>
    )
}