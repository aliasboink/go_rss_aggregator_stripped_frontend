import { writable } from 'svelte/store';

export interface Post {
  ID: string;
  CreatedAt: string;
  UpdatedAt: string;
  Title: string;
  Url: string;
  Description: {
    String: string;
    Valid: boolean;
  };
  PublishedAt: string;
  FeedID: string;
}

let loading = false;
let noMoreData = false;
let offset = 0;
let data: Post[] = [];
let limit = 15;

const posts = writable({
  data,
  noMoreData,
});

export default {
  subscribe: posts.subscribe,
  async fetchMore() {
    if (loading || noMoreData) return;
    loading = true;
    const response = await fetch(`https://api.adrian-docs.com//v1/posts/${offset}`);
    const newPosts = await response.json();
    offset = offset + limit
    loading = false;
    noMoreData = newPosts.length === 0;
    data.push(...newPosts)
    posts.set({ data, noMoreData });
  }
}