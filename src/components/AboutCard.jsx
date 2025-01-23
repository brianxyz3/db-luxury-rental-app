
const AboutCard = ({ index, title, description }) => {
    return (
        <div className="bg-white p-5 shadow-lg rounded-xl md:w-2/5 duration-200 hover:-translate-y-2 cursor-default">
            <h2 className="text-4xl font-semibold">
                {index}
            </h2>
            <h3 className="text-2xl font-semibold my-3">
                {title}
            </h3>
            <div>
                {description}
            </div>
        </div>
    )
}

export default AboutCard;