
const Card = ({ title, description, style }) => {
    return (
        <div className={`${style} flex flex-col justify-around p-5 md:p-2 lg:px-5 rounded-xl w-full cursor-default -z-10`}>
            <h3 className="text-xl md:text-2xl font-semibold">
                {title}
            </h3>
            <div className="text-sm md:text-base text-gray-800">
                {description}
            </div>
        </div>
    )
}

export default Card;