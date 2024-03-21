import type { IFrontmatter } from '../types/IFrontMatter';

type IBlogCardProps = {
  instance: IFrontmatter;
};

const BlogCard = (props: IBlogCardProps) => (
  <a
    className="hover:translate-y-1"
    href={props.instance.canonical_url}
    target="_blank"
    title={props.instance.title}
  >
    <div className="h-full overflow-hidden rounded-md bg-slate-800">
      <div className="aspect-h-2 aspect-w-3">
        <img
          className="size-full object-cover object-center"
          src={props.instance.imgSrc}
          alt={props.instance.imgAlt}
          loading="lazy"
        />
      </div>

      <div className="px-4 pb-6 pt-4">
        <h2 className="text-xl font-semibold leading-tight">
          {props.instance.title}
        </h2>

        <div className="mt-1 text-sm text-gray-400">
          Published on {props.instance.pubDate}
        </div>

        <div className="mt-3 text-base text-slate-400">
          {props.instance.description}
        </div>
      </div>
    </div>
  </a>
);

export { BlogCard };
