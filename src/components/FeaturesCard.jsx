
const FeaturesCard = ({ img, imgAltText, description, children }) => {
    return (
        <div className="w-72 duration-150 cursor-default sm:w-1/2 md:w-2/5 hover:shadow-lg hover:-translate-y-2 rounded-b-xl">
            {children}
            <img src={img} alt={imgAltText} className="rounded-t-3xl pt-2" />
            <p className="border-s-4 border-black rounded-b-xl px-2 pt-2 w-full mx-auto pb-3">{description}</p>
        </div>
    )
}

export default FeaturesCard;