const Member = ({ img, alt, name, role, description, socials }) => {
  return (
    <article
      className="
        w-full h-full border border-black/10
        p-6 space-y-6 rounded-xl
      "
    >
      <div className="w-full flex gap-4 shrink-0 overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="size-15 rounded-full object-cover"
        />

        <div>
          <p className="text-[1.1rem] font-bold">
            {name}
          </p>

          <p className="text-[0.8rem] text-[#B77F58] font-semibold">
            {role}
          </p>
        </div>
      </div>

      <p className="font-light text-[1.1rem]">
        {description}
      </p>

      <div className="flex items-center gap-6 text-gray-600 w-fit">
        {socials.map(({ label, icon: Icon, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-colors hover:text-[#B77F58]"
          >
            <Icon size={26} className="cursor-pointer" />
          </a>
        ))}
      </div>
    </article>
  );
};

export default Member;