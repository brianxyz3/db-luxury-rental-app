
const Header = ({ children, bgImg }) => {
    return (
        <header className={`${bgImg} bg-cover`}>
            <section className="bg-white/5 w-full h-full flex items-center">
                <div className="w-10/12 text-center mx-auto hero_div flex flex-col items-center justify-center">
                    {children}
                </div>
            </section>
        </header>)
}

export default Header;