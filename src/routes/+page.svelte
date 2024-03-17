<script>
	import Posts from './Posts.svelte';
	import data from './data';
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
	<Posts {...$data} key="ID" on:loadMore={data.fetchMore}></Posts>
</div>
