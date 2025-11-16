<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>밸런스 게임</title>
	<meta name="description" content="세상의 모든 밸런스 게임" />
</svelte:head>

<section>
	<h1>밸런스 게임 목록</h1>

	<a href="/create" class="create-link">
		+ 새 게임 만들기
	</a>
	
	<ul>
		{#each data.games as game (game.id)}
			<li>
				<a href="/game/{game.id}">
					<span class="option-a">{game.optionA}</span>
					<span class="vs">vs</span>
					<span class="option-b">{game.optionB}</span>
				</a>
			</li>
		{/each}
	</ul>

</section>

<style>
	section {
		padding: 2rem;
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
	}
	ul {
		list-style: none;
		padding: 0;
		margin-top: 2rem;
	}
	li a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		margin: 0.5rem 0;
		border: 1px solid #ddd;
		border-radius: 8px;
		text-decoration: none;
		color: black;
		transition: all 0.2s;
	}
	li a:hover {
		background-color: #f9f9f9;
		border-color: #aaa;
	}
	.option-a {
		color: #007bff; /* 파란색 */
		font-weight: bold;
	}
	.option-b {
		color: #ff4136; /* 빨간색 */
		font-weight: bold;
	}
	.vs {
		font-weight: bold;
		color: #555;
	}
	.create-link {
		display: inline-block;
		padding: 0.8rem 1.5rem;
		background-color: #ff3e00; /* Svelte 오렌지색 */
		color: white;
		text-decoration: none;
		border-radius: 20px;
		font-weight: bold;
		transition: background-color 0.2s;
	}
	.create-link:hover {
		background-color: #c93000;
	}
</style>