import type { IFrontmatter } from '../types/IFrontMatter';
import { BlogCard } from './BlogCard';

type IRecentPostsProps = {
  postList: IFrontmatter[];
};

const BlogGallery = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((post) => (
      <BlogCard key={post.canonical_url} instance={post} />
    ))}
  </div>
);

export { BlogGallery };
