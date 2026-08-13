import { Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";

import { format } from "date-fns";


const ThoughtPropHandler = ({ post }) => {

    return (

        <article
            className="
                group

                w-full
                h-full

                flex
                flex-col

                overflow-hidden

                rounded-2xl

                bg-white

                border
                border-[#D6DCEB]

                shadow-sm

                transition-all
                duration-500

                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            <Link
                to={`/leadership-thoughts/${post.slug.current}`}
                className="
                    flex
                    flex-col

                    h-full
                "
            >

                {/* ==================================
                    Image
                ================================== */}

                <div
                    className="
                        relative

                        w-full

                        h-[220px]
                        md:h-[240px]

                        overflow-hidden

                        bg-[#F2F4FA]
                    "
                >

                    {post.mainImage?.asset?.url ? (

                        <img
                            src={post.mainImage.asset.url}
                            alt={
                                post.mainImage.alt ||
                                post.title
                            }
                            className="
                                w-full
                                h-full

                                object-cover

                                transition-transform
                                duration-700

                                group-hover:scale-105
                            "
                        />

                    ) : (

                        <div
                            className="
                                w-full
                                h-full

                                flex
                                items-center
                                justify-center

                                bg-[#F2F4FA]

                                text-[#03045E]

                                font-semibold
                            "
                        >
                            CoreStack Insights
                        </div>

                    )}


                    {/* Image Overlay */}

                    <div
                        className="
                            absolute
                            inset-0

                            bg-gradient-to-t
                            from-[#03045E]/20
                            via-transparent
                            to-transparent

                            pointer-events-none
                        "
                    />

                </div>


                {/* ==================================
                    Content
                ================================== */}

                <div
                    className="
                        flex
                        flex-col
                        flex-1

                        p-6
                        lg:p-7
                    "
                >

                    {/* ==================================
                        Meta
                    ================================== */}

                    <div
                        className="
                            flex
                            items-center
                            flex-wrap

                            gap-3

                            mb-5
                        "
                    >

                        <span
                            className="
                                text-[11px]
                                lg:text-xs

                                uppercase

                                tracking-wide

                                font-semibold

                                text-[#B77F58]
                            "
                        >
                            {post.publishedAt
                                ? format(
                                    new Date(post.publishedAt),
                                    "dd MMMM yyyy"
                                )
                                : "No date"
                            }
                        </span>


                        <span
                            className="
                                w-1
                                h-1

                                rounded-full

                                bg-[#C7C3C8]
                            "
                        />


                        <span
                            className="
                                text-xs

                                text-[#6B7280]
                            "
                        >
                            {post.readTime || "Read"}
                        </span>

                    </div>


                    {/* ==================================
                        Title
                    ================================== */}

                    <h3
                        className="
                            text-xl
                            lg:text-2xl

                            font-bold

                            leading-[1.2]

                            text-[#03045E]

                            mb-4

                            transition-colors
                            duration-300

                            group-hover:text-[#B77F58]
                        "
                    >
                        {post.title}
                    </h3>


                    {/* ==================================
                        Excerpt
                    ================================== */}

                    <p
                        className="
                            text-sm
                            lg:text-base

                            leading-7

                            font-light

                            text-[#4B556F]

                            line-clamp-3

                            flex-1
                        "
                    >
                        {post.excerpt}
                    </p>


                    {/* ==================================
                        Categories
                    ================================== */}

                    {post.categories?.length > 0 && (

                        <div
                            className="
                                flex
                                flex-wrap

                                gap-2

                                mt-6
                            "
                        >

                            {post.categories
                                .slice(0, 3)
                                .map((category) => (

                                    <span
                                        key={category.title}
                                        className="
                                            px-3
                                            py-1.5

                                            rounded-full

                                            bg-[#F2F4FA]

                                            text-[#4B556F]

                                            text-[11px]

                                            font-medium
                                        "
                                    >
                                        {category.title}
                                    </span>

                                ))
                            }

                        </div>

                    )}


                    {/* ==================================
                        Read Article
                    ================================== */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between

                            mt-7
                            pt-5

                            border-t
                            border-[#E5E7EB]
                        "
                    >

                        <span
                            className="
                                text-sm

                                font-semibold

                                text-[#03045E]
                            "
                        >
                            Read Article
                        </span>


                        <span
                            className="
                                flex
                                items-center
                                justify-center

                                w-9
                                h-9

                                rounded-full

                                bg-[#F2F4FA]

                                text-[#03045E]

                                transition-all
                                duration-300

                                group-hover:bg-[#03045E]
                                group-hover:text-white
                            "
                        >

                            <VscArrowSmallRight
                                size={22}
                                className="
                                    transition-transform
                                    duration-300

                                    group-hover:translate-x-1
                                "
                            />

                        </span>

                    </div>

                </div>

            </Link>

        </article>

    );
};


export default ThoughtPropHandler;