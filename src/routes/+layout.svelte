<script>
	import "./styles.scss";


	import "../css/main.scss";
	import {
		Header,
		Cards,
		Footer,
		Inicio,
		PickCity,
		Cities,
		Objects,
		Food,
		Ocio,
		Transport,
		Ocio2,
		Work
	} from "$components";
	import { userData, selectedComponent, setSelectedComponent } from "$stores";
	import { fade } from "svelte/transition";

	const optionComponents = {
		inicio: Inicio,
		pickCity: PickCity,
		cities: Cities,
		objects: Objects,
		food: Food,
		ocio: Ocio,
		transport: Transport,
		ocio2: Ocio2,
		work: Work
	};
</script>

<a
	class="header__logo flex flex--row flex--acenter"
	target="_blank"
	href="https://www.elmundo.es/"
	title="elmundo.es"
>
	<img src="./bola_mundo.svg" alt="El Mundo" />
</a>
<div class="presupuesto">
	<p>Presupuesto disponible: {$userData.presupuesto}€</p>
</div>
<!-- Vuelve al inicio  -->
{#if $selectedComponent !== "inicio"}
	<div
		class="bottonHome"
		on:click={() => {
			setSelectedComponent("inicio");
			$userData.presupuesto = 0; // Reiniciar el presupuesto a 0
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-home"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#ffffff"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 12l-2 0l9 -9l9 9l-2 0" />
			<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
		</svg>
	</div>
{/if}

<main>
	{#if optionComponents[$selectedComponent]}
		{#key $selectedComponent}
			<!-- Cuando cambia esta variable, desmonta lo que esta dentro y lo vuelve a montar -->
			<div transition:fade={{ duration: 250 }}>
				<!-- Transición de fade, desvanecer, necesita una key para hacer la transición -->
				<svelte:component this={optionComponents[$selectedComponent]} />
				<!-- Bind:ciudadEscogida es para pasarle la variable ciudadEscogida a los componentes le pasas la variable y que se cambie en el hijo -->
			</div>
		{/key}
	{:else}
		<p>Opción no válida</p>
	{/if}
</main>

{#if $selectedComponent === "inicio"}
	<Footer />
{/if}

<style>
	main {
		display: grid;
	}
	/* Esto hace que el componente siguiente se vuelva a poner en el mismo lugar, encima del anterior */

	main > * {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;	
	}

	.presupuesto {
		position: absolute;
		right: 1rem;
		top: 0.5rem;
		color: white;
	}
	.bottonHome {
		width: 5px;
		height: 5px;
		position: absolute;
		right: 4rem;
		bottom: 4.5rem;
		color: white;
		cursor: pointer;
	}
</style>
