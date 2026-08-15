import { urlFor } from "../../utils/sanityImage";

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-700 text-lg leading-9 mb-8">
        {children}
      </p>
    ),

    h1: ({ children }) => (
      <h1
        className="
          text-3xl
          md:text-4xl
          font-bold
          text-[#03045E]
          mt-16
          mb-8
        "
      >
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2
        className="
          text-2xl
          md:text-3xl
          font-bold
          text-[#03045E]
          mt-14
          mb-6
        "
      >
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3
        className="
          text-xl
          md:text-2xl
          font-semibold
          text-[#03045E]
          mt-10
          mb-4
        "
      >
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4
        className="
          text-lg
          md:text-xl
          font-semibold
          text-[#03045E]
          mt-8
          mb-3
        "
      >
        {children}
      </h4>
    ),

    blockquote: ({ children }) => (
      <blockquote
        className="
          border-l-4
          border-[#B77F58]
          pl-6
          py-2
          my-8
          italic
          text-gray-600
        "
      >
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul
        className="
          list-disc
          pl-6
          md:pl-8
          mb-8
          space-y-3
          text-gray-700
        "
      >
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol
        className="
          list-decimal
          pl-6
          md:pl-8
          mb-8
          space-y-3
          text-gray-700
        "
      >
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="leading-8">
        {children}
      </li>
    ),

    number: ({ children }) => (
      <li className="leading-8">
        {children}
      </li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">
        {children}
      </strong>
    ),

    em: ({ children }) => (
      <em className="italic">
        {children}
      </em>
    ),

    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-[#B77F58]
          font-medium
          underline
          underline-offset-4
          hover:text-[#03045E]
          transition-colors
        "
      >
        {children}
      </a>
    ),
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      return (
        <figure className="my-10 md:my-14">
          <img
            src={urlFor(value)
              .width(1200)
              .quality(85)
              .auto("format")
              .url()}
            alt={value.alt || ""}
            className="
              w-full
              h-auto
              rounded-xl
              object-cover
            "
          />

          {value.caption && (
            <figcaption
              className="
                mt-3
                text-sm
                text-gray-500
                text-center
                leading-6
              "
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default portableTextComponents;