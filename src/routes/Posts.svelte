<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import viewport from './useViewportAction';
	import type { Post } from './data';

	export let data: Post[];
	export let key: keyof Post;
	export let noMoreData: boolean;

	const dispatch = createEventDispatcher();
</script>

<div class="posts-wrapper row center-xs top-xs col-xs-12 revolver">
	{#each data as post (post[key])}
		<div class="post col-xs-6 revolver">
			<div class="box">
				<h1 class="post-title"><a href={post.Url}>{post.Title}</a></h1>
				<span class="post-publish"
					>Published on {new Date(post.PublishedAt).toISOString().split('T')[0]}</span
				>
				<div class="post-content">{@html post.Description.String}</div>
				<div class="post-footer"><a class="blue-text" href={post.Url}>Read More</a></div>
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
