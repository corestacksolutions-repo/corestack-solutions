import ThoughtPropHandler from "./ThoughtsHandler";
import client from "../../utils/sanityClient";

import { useState, useEffect } from "react";


const Thoughts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        client
            .fetch(`
                *[_type == "post"]{
                    title,
                    slug,
                    body,

                    publishedAt,

                    author->{
                        name,
                        bio
                    },

                    readTime,

                    excerpt,

                    categories[]->{
                        title,
                        description
                    },

                    mainImage{
                        alt,
                        asset->{
                            _id,
                            url
                        }
                    }
                }
            `)
            .then((data) => {
                setPosts(data);
            })
            .catch(console.error);

    }, []);


    return (
        <section
            id="latest-insights"
            className="
                w-full

                bg-[#F8FAFC]

                px-5
                md:px-12
                lg:px-20

                py-16
                lg:py-24
            "
        >

            <div
                className="
                    max-w-[1400px]

                    mx-auto
                "
            >

                {/* =====================================
                    Header
                ====================================== */}

                <header
                    className="
                        max-w-4xl

                        mb-14
                        lg:mb-20
                    "
                >

                    {/* Eyebrow */}

                    <p
                        className="
                            uppercase

                            tracking-[0.25em]

                            text-[11px]
                            lg:text-[12px]

                            font-bold

                            text-[#B77F58]

                            mb-4
                        "
                    >
                        From the CoreStack Desk
                    </p>


                    {/* Heading */}

                    <h2
                        className="
                            text-[#03045E]

                            text-3xl
                            md:text-5xl
                            lg:text-6xl

                            font-bold

                            leading-[1.05]

                            tracking-tight

                            mb-6
                        "
                    >
                        Ideas, Insights &
                        <span className="text-[#B77F58]">
                            {" "}Perspectives.
                        </span>
                    </h2>


                    {/* Description */}

                    <p
                        className="
                            max-w-3xl

                            text-[#4B556F]

                            text-base
                            md:text-lg

                            leading-8

                            font-light
                        "
                    >
                        Practical thinking on technology, digital
                        transformation, business growth, and the
                        evolving digital economy.
                    </p>

                </header>


                {/* =====================================
                    Blog Grid
                ====================================== */}

                {posts.length > 0 ? (

                    <div
                        className="
                            grid

                            grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-3

                            gap-6
                            lg:gap-8
                        "
                    >

                        {posts.map((post) => (

                            <ThoughtPropHandler
                                key={post.slug.current}
                                post={post}
                            />

                        ))}

                    </div>

                ) : (

                    /* Empty / Loading State */

                    <div
                        className="
                            w-full

                            min-h-[240px]

                            flex
                            items-center
                            justify-center

                            rounded-2xl

                            border
                            border-[#D6DCEB]

                            bg-white
                        "
                    >

                        <p
                            className="
                                text-[#6B7280]

                                text-sm
                            "
                        >
                            Loading insights...
                        </p>

                    </div>

                )}

            </div>

        </section>
    );
};


export default Thoughts;