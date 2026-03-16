import { ArrowRight } from '@/components/ArrowRight';
import type { IFrontmatter } from '../types/IFrontMatter';

type IBlogCardProps = {
  instance: IFrontmatter;
};

const BlogCard = (props: IBlogCardProps) => (
  <a
    className="group flex items-center justify-between gap-4 py-4 transition-colors duration-200 hover:text-flame"
    href={props.instance.canonical_url}
    target="_blank"
    title={props.instance.title}
  >
    <div className="flex-1">
      <h3 className="font-sans text-base font-medium text-sand-100 transition-colors duration-200 group-hover:text-flame">
        {props.instance.title}
      </h3>
      {props.instance.description && (
        <p className="mt-1 line-clamp-1 text-sm text-sand-300">
          {props.instance.description}
        </p>
      )}
      <p className="mt-1 text-xs text-sand-400">{props.instance.pubDate}</p>
    </div>
    <div className="shrink-0 text-sand-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-flame">
      <ArrowRight />
    </div>
  </a>
);

export { BlogCard };
