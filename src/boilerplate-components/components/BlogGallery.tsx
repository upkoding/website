import type { IFrontmatter } from '../types/IFrontMatter';
import { BlogCard } from './BlogCard';

type IRecentPostsProps = {
  postList: IFrontmatter[];
};

const BlogGallery = (props: IRecentPostsProps) => (
  <div className="flex flex-col divide-y divide-ink-border">
    {props.postList.map((post) => (
      <BlogCard key={post.canonical_url} instance={post} />
    ))}
  </div>
);

export { BlogGallery };
