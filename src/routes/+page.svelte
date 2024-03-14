<script>
	export let data;
	const posts = data.posts;
</script>

<div class="main-wrapper row top-xs red">
	<div class="header-wrapper center-xs col-xs-12 blue">
		<div class="header-content row middle-xs cyan">
			<div class="col-xs-2 title-wrapper">
				<div class="box">
					<a href="https://www.adrian-docs.com/" class="title" title="Adrian Docs">Adrian Docs</a>
				</div>
			</div>
		</div>
	</div>
	<div class="posts-wrapper row center-xs top-xs col-xs-12 black">
		{#each data.posts as post}
			<div class="post col-xs-8 red">
				<div class="box">
					<h1>{post.Title}</h1>
					<span>Published on {new Date(post.PublishedAt).toISOString().split('T')[0]}</span>
					<div class="post-content">{@html post.Description.String}</div>
					<a href={post.Url}>Read More</a>
				</div>
			</div>
		{/each}
	</div>
</div>
