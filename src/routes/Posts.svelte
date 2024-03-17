<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import viewport from './useViewportAction';
	import type { Post } from './data';

	export let data: Post[];
	export let key: keyof Post;
	export let noMoreData: boolean;

	const dispatch = createEventDispatcher();
</script>

<div class="posts-wrapper row center-xs top-xs col-xs-12 black">
	{#each data as post (post[key])}
		<div class="post col-xs-8 red">
			<div class="box">
				<h1>{post.Title}</h1>
				<span>Published on {new Date(post.PublishedAt).toISOString().split('T')[0]}</span>
				<div class="post-content">{@html post.Description.String}</div>
				<a href={post.Url}>Read More</a>
			</div>
		</div>
	{/each}
	{#if !noMoreData}
		<div
			style="height:5px; width:5px"
			use:viewport
			on:enterViewport={() => dispatch('loadMore')}
		></div>
	{/if}
</div>
