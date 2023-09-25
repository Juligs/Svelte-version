<script>
    import valores from "$lib/valores";
    import { userData, setSelectedComponent } from "$stores";
    import { Button } from "$components";

    let subopciones = null;
    let opcionEscogida = null;

    $: ciudadEscogida = $userData.ciudadEscogida;
    $: Vivienda = valores[ciudadEscogida].Vivienda;

    function handleOnClick(button) {
        if (!button.valor && button.subopciones.length) {
            subopciones = button.subopciones;
        } else {
            descontarOpcion(button.valor);
            setSelectedComponent("objects");
        }
        opcionEscogida = button;
    }

    function descontarOpcion(valor) {
        if ($userData.presupuesto >= valor) {
            $userData.presupuesto -= valor;
        } else {
            alert("No tienes suficiente presupuesto para esta opción.");
        }
    }
    // console.log(ciudadEscogida)
</script>

<div class="cont cont--m pad--t80">
    <h2>{valores[ciudadEscogida].title}</h2>
    <div class="buttonCont">
        {#each Vivienda as Vivienda}
            <Button
                class="option"
                on:click={() => handleOnClick(Vivienda)}
                active={opcionEscogida === Vivienda}
            >
                <h6>{Vivienda.title}</h6>
            </Button>
        {/each}
    </div>

    {#if subopciones && opcionEscogida.title === "Alquiler"}
        <div class="subopciones">
            {#each subopciones as subopcion}
                <div class="buttonContainer">
                    <Button
                        on:click={() => {
                            descontarOpcion(subopcion.valor);
                            setSelectedComponent("objects");
                        }}
                    >
                        <h6>{subopcion.title}</h6>
                    </Button>
                </div>
            {/each}
        </div>
    {/if}
    <div class="bottonBack" on:click={() => setSelectedComponent("pickCity")}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-circle-arrow-left"
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
            <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
            <path d="M8 12l4 4" />
            <path d="M8 12h8" />
            <path d="M12 8l-4 4" />
        </svg>
    </div>
</div>

<style>
    * {
        color: white;
    }

    .buttonContainer {
        width: 100%;
    }
    .subopciones {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .bottonBack {
        width: 5px;
        height: 5px;
        position: absolute;
        right: 8rem;
        bottom: 4.5rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
    }
</style>
