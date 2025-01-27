
const Card = ({ title, description }) => {
    return (
        <div className="bg-white h-72 lg:h-56 flex flex-col justify-around p-2 shadow-lg rounded-xl w-full duration-200 hover:-translate-y-2 cursor-default">
            <h3 className="text-2xl font-semibold">
                {title}
            </h3>
            <div>
                {description}
            </div>
        </div>
    )
}

export default Card;