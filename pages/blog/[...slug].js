import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>blop posts page</h1>
      <Link href='/about'>about link</Link>
    </div>
  );
};

export default BlogPostsPage;
