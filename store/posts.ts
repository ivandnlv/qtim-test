import { defineStore } from 'pinia';
import { type IPost } from '~/types';

export const usePostsStore = defineStore('posts', () => {
  const allPosts = ref<IPost[] | null>(null);
  const posts = ref<IPost[] | null>(null);

  const currentPage = ref<number>(1);
  const allPagesCount = ref<number>(1);
  const postsPerPage = 8;

  const setAllPosts = (value: IPost[]) => {
    allPosts.value = value;
    posts.value = allPosts.value.slice(0, postsPerPage);
    allPagesCount.value = Math.ceil(allPosts.value.length / postsPerPage);
  };

  const setPosts = (firstPostsIndex: number, lastPostsIndex: number) => {
    if (allPosts.value) {
      posts.value = allPosts.value.slice(firstPostsIndex, lastPostsIndex);
    }
  };

  const setCurrentPage = (page: number) => {
    currentPage.value = page;
    const lastPostsIndex = currentPage.value * postsPerPage;
    const firstPostsIndex = lastPostsIndex - postsPerPage;
    setPosts(firstPostsIndex, lastPostsIndex);
  };

  const setPagesCount = (count: number) => {
    allPagesCount.value = count;
  };

  return {
    setPagesCount,
    setPosts,
    posts,
    setAllPosts,
    currentPage,
    allPagesCount,
    setCurrentPage,
  };
});
