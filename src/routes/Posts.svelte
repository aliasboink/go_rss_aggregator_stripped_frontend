<script>
	import { createEventDispatcher } from 'svelte';
	import viewport from './useViewportAction';
	export let data;
	export let key;
	export let noMoreData;

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
		<div class="uwu" use:viewport on:enterViewport={() => dispatch('loadMore')}></div>
	{/if}
</div>
