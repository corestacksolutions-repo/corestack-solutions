const SolutionCard = ({ id, icon, title, description }) => {
    const Icon = icon;

    return (
        <article
            className="
                group
                w-full

                p-2

                transition-all
                duration-300

                hover:-translate-y-1
            "
        >
            <div className="flex items-start gap-4">

                {/* Icon */}
                <div
                    className="
                        flex-shrink-0

                        w-9
                        h-9

                        rounded-full
                        bg-[#03045E]

                        flex
                        items-center
                        justify-center
                    "
                >
                    <Icon className="text-white text-lg" />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3
                        className="
                            text-lg
                            font-semibold
                            leading-tight
                            text-[#03045E]
                        "
                    >
                        {title}
                    </h3>

                    <p
                        className="
                            mt-2

                            text-[15px]
                            leading-7

                            text-[#4B556F]
                        "
                    >
                        {description}
                    </p>
                </div>

            </div>
        </article>
    );
};

export default SolutionCard;