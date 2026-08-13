// Single Blog Page
// Route: /blog/:slug

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";

import {
    LuArrowLeft,
    LuCalendarDays,
    LuClock3,
    LuUser,
    LuArrowUpRight,
} from "react-icons/lu";

import client from "../utils/sanityClient";
import portableTextComponents from "../components/blog components/PortableText";


const SingleBlog = () => {

    console.log('🔥 SINGLE BLOG COMPONENT MOUNTED')

    const [singlePost, setSinglePost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { slug } = useParams();

    console.log('📝 Current slug:', slug)


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
                            bio
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
                }

                setSinglePost(data);
                console.log("Fetched single post:", data);

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

                bg-white

                pt-20
            "
        >


            {/* =================================================
                ARTICLE HERO
            ================================================== */}

            <section
                className="
                    relative

                    w-full

                    min-h-[520px]
                    md:min-h-[620px]

                    overflow-hidden

                    flex
                    items-end
                "
            >

                {/* Background Image */}

                {singlePost?.mainImage?.asset?.url && (

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

                            scale-[1.01]
                        "
                    />

                )}


                {/* Image Overlay */}

                <div
                    className="
                        absolute
                        inset-0

                        bg-gradient-to-t

                        from-[#03045E]/95
                        via-[#03045E]/65
                        to-[#03045E]/10
                    "
                />


                {/* Hero Content */}

                <div
                    className="
                        relative
                        z-10

                        w-full

                        max-w-[1400px]

                        mx-auto

                        px-5
                        md:px-12
                        lg:px-20

                        pb-12
                        md:pb-16
                    "
                >

                    <div className="max-w-5xl">


                        {/* Categories */}

                        <div
                            className="
                                flex
                                flex-wrap
                                items-center

                                gap-2

                                mb-6
                            "
                        >

                            {singlePost.categories?.map(
                                (category) => (

                                    <span
                                        key={category.title}
                                        className="
                                            rounded-full

                                            border
                                            border-white/20

                                            bg-white/10

                                            backdrop-blur-md

                                            px-4
                                            py-2

                                            text-xs
                                            md:text-sm

                                            font-medium

                                            tracking-wide

                                            text-white
                                        "
                                    >
                                        {category.title}
                                    </span>

                                )
                            )}

                        </div>


                        {/* Article Title */}

                        <h1
                            className="
                                max-w-5xl

                                text-3xl
                                sm:text-4xl
                                md:text-6xl
                                lg:text-7xl

                                font-bold

                                leading-[105%]

                                tracking-tight

                                text-white

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
                                    max-w-3xl

                                    text-base
                                    md:text-lg
                                    lg:text-xl

                                    leading-7
                                    md:leading-8

                                    text-white/80

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

                                text-white/80
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

                                    bg-white/40
                                "
                            />


                            {/* Author */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >

                                <LuUser size={17} />

                                <span>
                                    {singlePost.author?.name ||
                                        "CoreStack"}
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

                                    bg-white/40
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
                                />

                                <span>
                                    {singlePost.readTime ||
                                        "5 min read"}
                                </span>

                            </div>

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

                    px-5
                    md:px-12
                    lg:px-20

                    py-16
                    md:py-20
                "
            >

                <div
                    className="
                        max-w-4xl

                        mx-auto
                    "
                >

                    <article
                        className="
                            prose
                            prose-lg

                            max-w-none

                            text-[#4B556F]

                            prose-headings:text-[#03045E]

                            prose-headings:font-bold

                            prose-h2:text-3xl
                            prose-h3:text-2xl

                            prose-p:leading-8

                            prose-a:text-[#B77F58]

                            prose-strong:text-[#03045E]

                            prose-blockquote:border-[#B77F58]

                            prose-blockquote:text-[#4B556F]

                            prose-img:rounded-2xl

                            overflow-hidden

                            break-words
                        "
                    >

                        <PortableText
                            value={singlePost.body}
                            components={
                                portableTextComponents
                            }
                        />

                    </article>


                    {/* =================================================
                        AUTHOR / ARTICLE FOOTER
                    ================================================== */}

                    <div
                        className="
                            mt-16
                            pt-8

                            border-t
                            border-[#D6DCEB]
                        "
                    >

                        <div
                            className="
                                flex
                                flex-col
                                sm:flex-row

                                sm:items-center
                                sm:justify-between

                                gap-6
                            "
                        >

                            {/* Author */}

                            <div>

                                <p
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]

                                        font-bold

                                        text-[#B77F58]

                                        mb-2
                                    "
                                >
                                    Written by
                                </p>

                                <h3
                                    className="
                                        text-lg

                                        font-semibold

                                        text-[#03045E]
                                    "
                                >
                                    {singlePost.author?.name ||
                                        "CoreStack Solutions"}
                                </h3>

                                {singlePost.author?.bio && (

                                    <p
                                        className="
                                            mt-1

                                            max-w-xl

                                            text-sm

                                            leading-6

                                            text-[#6B7280]
                                        "
                                    >
                                        {singlePost.author.bio}
                                    </p>

                                )}

                            </div>


                            {/* Back to Blog */}

                            <Link
                                to="/leadership-thoughts"
                                className="
                                    group

                                    inline-flex
                                    items-center
                                    justify-center

                                    gap-2

                                    shrink-0

                                    rounded-full

                                    border
                                    border-[#D6DCEB]

                                    px-6
                                    py-3

                                    text-sm
                                    font-semibold

                                    text-[#03045E]

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1

                                    hover:bg-[#03045E]

                                    hover:text-white

                                    hover:border-[#03045E]
                                "
                            >

                                Back to Insights

                                <LuArrowUpRight
                                    size={17}
                                    className="
                                        transition-transform
                                        duration-300

                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                    "
                                />

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );
};

export default SingleBlog;