import { writable } from 'svelte/store';

let loading = false;
let noMoreData = false;
let offset = 0;
let data = [];
let limit = 15;

const posts = writable({
  data,
  noMoreData,
});

export default {
  subscribe: posts.subscribe,
  async fetchMore() {
    console.log("Testi")
    if (loading || noMoreData) return;
    loading = true;
    const response = await fetch(`http://localhost:8080/v1/posts/${offset}`);
    const newPosts = await response.json();
    offset = offset + limit
    loading = false;
    noMoreData = newPosts.length === 0;
    data.push(...newPosts)
    posts.set({ data, noMoreData });
  }
}