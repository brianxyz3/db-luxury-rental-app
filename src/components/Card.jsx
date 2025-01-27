
const Card = ({ title, description, style }) => {
    return (
        <div className={`${style} flex flex-col justify-around p-2 lg:px-5 rounded-xl w-full cursor-default`}>
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