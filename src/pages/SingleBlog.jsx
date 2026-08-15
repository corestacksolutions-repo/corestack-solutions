// Single Blog Page
// Route: /blog/:slug

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {format} from "date-fns";
import { PortableText } from "@portabletext/react";

import {
    LuArrowLeft,
    LuCalendarDays,
    LuClock3,
} from "react-icons/lu";

import client from "../utils/sanityClient";
import portableTextComponents from "../components/blog components/PortableText";


const SingleBlog = () => {

    const [singlePost, setSinglePost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { slug } = useParams();


    /* =====================================================
       FETCH SINGLE BLOG POST
    ====================================================== */

    useEffect(() => {

        setLoading(true);
        setError(false);

        client
            .fetch(
                `
                    *[
                        _type == "post" &&
                        slug.current == $slug
                    ][0]{

                        _id,

                        title,

                        slug,

                        excerpt,

                        body,

                        publishedAt,

                        readTime,

                        author->{
                            name,
                            bio,

                            image{
                                asset->{
                                    _id,
                                    url
                                }
                            }
                        },

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
                `,
                { slug }
            )

            .then((data) => {

                if (!data) {
                    setError(true);
                    return;
                }

                console.log("FULL POST:", data);
                console.log("BODY:", data.body);
                console.log("AUTHOR:", data.author);

                setSinglePost(data);
            })

            .catch((error) => {

                console.error(
                    "Failed to load article:",
                    error
                );

                setError(true);
            })

            .finally(() => {

                setLoading(false);

            });

    }, [slug]);


    /* =====================================================
       LOADING STATE
    ====================================================== */

    if (loading) {

        return (
            <main
                className="
                    min-h-screen

                    flex
                    items-center
                    justify-center

                    bg-[#F8FAFC]

                    px-6
                    pt-24
                    pb-16
                "
            >

                <div className="text-center">

                    <div
                        className="
                            mx-auto
                            mb-6

                            h-10
                            w-10

                            rounded-full

                            border-4
                            border-[#03045E]/10
                            border-t-[#03045E]

                            animate-spin
                        "
                    />

                    <p
                        className="
                            text-sm
                            font-medium
                            tracking-wide

                            text-[#4B556F]
                        "
                    >
                        Loading article...
                    </p>

                </div>

            </main>
        );
    }


    /* =====================================================
       ARTICLE NOT FOUND
    ====================================================== */

    if (error || !singlePost) {

        return (
            <main
                className="
                    min-h-screen

                    flex
                    items-center
                    justify-center

                    bg-[#F8FAFC]

                    px-6
                    pt-24
                    pb-16
                "
            >

                <div
                    className="
                        max-w-xl
                        text-center
                    "
                >

                    <p
                        className="
                            uppercase
                            tracking-[0.25em]

                            text-xs
                            font-bold

                            text-[#B77F58]

                            mb-4
                        "
                    >
                        Article unavailable
                    </p>

                    <h1
                        className="
                            text-3xl
                            md:text-4xl

                            font-bold

                            text-[#03045E]

                            mb-5
                        "
                    >
                        We couldn't find that article.
                    </h1>

                    <p
                        className="
                            text-[#4B556F]
                            leading-7

                            mb-8
                        "
                    >
                        The article may have been moved, removed,
                        or the link may no longer be valid.
                    </p>

                    <Link
                        to="/leadership-thoughts"
                        className="
                            inline-flex
                            items-center
                            justify-center

                            gap-2

                            rounded-full

                            bg-[#03045E]

                            px-7
                            py-3.5

                            text-sm
                            font-semibold
                            uppercase
                            tracking-wide

                            text-white

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:shadow-lg
                        "
                    >

                        <LuArrowLeft size={18} />

                        Back to Insights

                    </Link>

                </div>

            </main>
        );
    }


    return (

        <main
            className="
                w-full

                bg-[#F8FAFC]

                pt-20
            "
        >


            {/* =================================================
                ARTICLE IMAGE
            ================================================== */}

            {/* max-w-[1400px]

                    mx-auto

                    px-5
                    md:px-10
                    lg:px-16

                    pt-6
                    md:pt-10 */}

            <section
                className="
                    w-full

                    
                "
            >

                <div
                    className="
                        relative

                        w-full

                        h-[300px]
                        sm:h-[400px]
                        md:h-[520px]
                        lg:h-[620px]

                        overflow-hidden

                        

                        bg-[#D6DCEB]

                        shadow-sm
                    "
                >

                    {singlePost?.mainImage?.asset?.url ? (

                        <img
                            src={singlePost.mainImage.asset.url}
                            alt={
                                singlePost.mainImage.alt ||
                                singlePost.title
                            }

                            className="
                                absolute
                                inset-0

                                w-full
                                h-full

                                object-cover
                                object-center
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

                                bg-[#E9EDF5]

                                text-[#4B556F]
                            "
                        >
                            No featured image
                        </div>

                    )}

                </div>

            </section>


            {/* =================================================
                ARTICLE INFORMATION
            ================================================== */}

            <section
                className="
                    w-full

                    max-w-[1400px]

                    mx-auto

                    px-5
                    md:px-10
                    lg:px-16

                    pt-10
                    md:pt-14
                    lg:pt-16

                    pb-4
                    md:pb-8
                "
            >

                <div className="max-w-5xl">

                    {/* Categories */}

                    {singlePost.categories?.length > 0 && (

                        <div
                            className="
                                flex
                                flex-wrap

                                items-center

                                gap-2

                                mb-6
                            "
                        >

                            {singlePost.categories.map(
                                (category) => (

                                    <span
                                        key={category.title}

                                        className="
                                            inline-flex
                                            items-center

                                            rounded-full

                                            border
                                            border-[#B77F58]/20

                                            bg-[#B77F58]/5

                                            px-4
                                            py-2

                                            text-xs
                                            md:text-sm

                                            font-semibold

                                            tracking-wide

                                            text-[#B77F58]
                                        "
                                    >
                                        {category.title}
                                    </span>

                                )
                            )}

                        </div>

                    )}


                    {/* Article Title */}

                    <h1
                        className="

                            hidden

                            max-w-5xl

                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl

                            font-bold

                            leading-[105%]

                            tracking-tight

                            text-[#03045E]

                            break-words

                            mb-6
                        "
                    >
                        {singlePost.title}
                    </h1>


                    {/* Excerpt */}

                    {singlePost.excerpt && (

                        <p
                            className="
                                max-w-4xl

                                text-base
                                md:text-lg
                                lg:text-xl

                                leading-7
                                md:leading-8

                                text-[#4B556F]

                                mb-8
                            "
                        >
                            {singlePost.excerpt}
                        </p>

                    )}


                    {/* Article Meta */}

                    <div
                        className="
                            flex
                            flex-wrap

                            items-center

                            gap-x-5
                            gap-y-3

                            text-sm

                            text-[#4B556F]
                        "
                    >

                        {/* Date */}

                        <div
                            className="
                                flex
                                items-center

                                gap-2
                            "
                        >

                            <LuCalendarDays
                                size={17}
                                className="text-[#B77F58]"
                            />

                            <span>
                                {singlePost.publishedAt
                                    ? format(
                                        new Date(
                                            singlePost.publishedAt
                                        ),
                                        "dd MMMM yyyy"
                                    )
                                    : "No date"
                                }
                            </span>

                        </div>


                        {/* Divider */}

                        <span
                            className="
                                hidden
                                sm:block

                                h-1
                                w-1

                                rounded-full

                                bg-[#C7C3C8]
                            "
                        />


                        {/* Read Time */}

                        <div
                            className="
                                flex
                                items-center

                                gap-2
                            "
                        >

                            <LuClock3
                                size={17}
                                className="text-[#B77F58]"
                            />

                            <span>
                                {singlePost.readTime ||
                                    "5 min read"
                                }
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                ARTICLE BODY
            ================================================== */}

            <section
                className="
                    w-full

                    max-w-[1400px]

                    mx-auto

                    px-5
                    md:px-10
                    lg:px-16

                    py-12
                    md:py-16
                    lg:py-20
                "
            >

                <div
                    className="
                        w-full

                        bg-white

                        rounded-2xl

                        border
                        border-[#D6DCEB]/70

                        shadow-sm

                        overflow-hidden
                    "
                >

                    {/* Article Content Header */}

                    <header
                        className="
                            px-6
                            md:px-10
                            lg:px-16

                            pt-8
                            md:pt-10
                            lg:pt-12

                            pb-6
                        "
                    >

                        <div className="flex items-center gap-4">

                            <span
                                className="
                                    h-px
                                    w-10

                                    bg-[#B77F58]
                                "
                            />

                            <p
                                className="
                                    uppercase

                                    text-[11px]
                                    md:text-[12px]

                                    tracking-[0.25em]

                                    font-bold

                                    text-[#B77F58]
                                "
                            >
                                CoreStack Insights
                            </p>

                        </div>


                        <div
                            className="
                                mt-5

                                flex
                                items-center
                                justify-between

                                gap-6
                            "
                        >

                            <h2
                                className="
                                    text-xl
                                    md:text-2xl

                                    font-bold

                                    text-[#03045E]
                                "
                            >
                                From the Insight Desk
                            </h2>

                            <span
                                className="
                                    hidden
                                    md:block

                                    h-px
                                    flex-1

                                    bg-[#D6DCEB]
                                "
                            />

                        </div>

                    </header>


                    {/* Divider */}

                    <div
                        className="
                            mx-6
                            md:mx-10
                            lg:mx-16

                            border-t
                            border-[#D6DCEB]/70
                        "
                    />


                    {/* Article Body */}

                    <div
                        className="
                            px-6
                            md:px-10
                            lg:px-16

                            py-10
                            md:py-14
                            lg:py-16
                        "
                    >

                        <article
                            className="
                                max-w-4xl

                                mx-auto

                                min-w-0
                            "
                        >

                            <PortableText
                                value={singlePost.body}
                                components={portableTextComponents}
                            />

                        </article>

                    </div>


                    {/* Bottom Accent */}

                    <div
                        className="
                            h-1

                            w-full

                            bg-gradient-to-r
                            from-[#03045E]
                            via-[#B77F58]
                            to-[#03045E]
                        "
                    />

                </div>

            </section>


{/* =================================================
    AUTHOR PROFILE
================================================== */}

<section
    className="
        w-full

        max-w-[1400px]

        mx-auto

        px-5
        md:px-10
        lg:px-16

        pb-20
        md:pb-28
    "
>

    <div
        className="
            max-w-5xl

            mx-auto

            border-t
            border-[#D6DCEB]

            pt-10
            md:pt-14
        "
    >

        {/* Section Label */}

        <div
            className="
                flex
                items-center
                gap-4

                mb-8
            "
        >

            <span
                className="
                    h-px
                    w-10

                    bg-[#B77F58]
                "
            />

            <p
                className="
                    uppercase

                    text-[11px]
                    md:text-xs

                    tracking-[0.25em]

                    font-bold

                    text-[#B77F58]
                "
            >
                About the Author
            </p>

        </div>


        {/* Author Card */}

        <div
            className="
                relative

                overflow-hidden

                rounded-2xl

                border
                border-[#D6DCEB]/80

                bg-white

                p-6
                md:p-8
                lg:p-10

                shadow-sm
            "
        >

            {/* Decorative Accent */}

            <div
                className="
                    absolute
                    top-0
                    left-0

                    h-1
                    w-full

                    bg-gradient-to-r
                    from-[#03045E]
                    via-[#B77F58]
                    to-[#03045E]
                "
            />


            <div
                className="
                    flex
                    flex-col
                    md:flex-row

                    gap-7
                    md:gap-10

                    items-start
                "
            >

                {/* =================================================
                    AUTHOR IMAGE
                ================================================== */}

                <div
                    className="
                        relative

                        w-24
                        h-24
                        md:w-28
                        md:h-28

                        shrink-0

                        rounded-full

                        overflow-hidden

                        bg-[#E9EDF5]

                        border
                        border-[#D6DCEB]

                        ring-4
                        ring-[#F8FAFC]
                    "
                >

                    {singlePost.author?.image?.asset?.url ? (

                        <img
                            src={
                                singlePost.author.image.asset.url
                            }

                            alt={
                                singlePost.author.name ||
                                "Article author"
                            }

                            className="
                                w-full
                                h-full

                                object-cover
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

                                bg-[#03045E]

                                text-white

                                text-2xl
                                font-bold
                            "
                        >
                            {singlePost.author?.name
                                ?.charAt(0)
                                ?.toUpperCase() || "C"
                            }
                        </div>

                    )}

                </div>


                {/* =================================================
                    AUTHOR INFORMATION
                ================================================== */}

                <div
                    className="
                        min-w-0

                        flex-1
                    "
                >

                    {/* Author Name */}

                    <h3
                        className="
                            text-2xl
                            md:text-3xl

                            font-bold

                            text-[#03045E]

                            leading-tight

                            mb-2
                        "
                    >
                        {singlePost.author?.name ||
                            "CoreStack"
                        }
                    </h3>


                    {/* Author Role */}

                    <p
                        className="
                            text-sm

                            font-semibold

                            tracking-wide

                            text-[#B77F58]

                            mb-5
                        "
                    >
                        CoreStack Solutions
                    </p>


                    {/* Author Bio */}

                    {singlePost.author?.bio?.length > 0 && (

                        <div
                            className="
                                max-w-2xl

                                text-[#4B556F]

                                leading-7

                                [&>p]:mb-3
                                [&>p:last-child]:mb-0
                            "
                        >

                            <PortableText
                                value={singlePost.author.bio}
                            />

                        </div>

                    )}

                </div>

            </div>

        </div>

    </div>

</section>

        </main>
    );
};


export default SingleBlog;