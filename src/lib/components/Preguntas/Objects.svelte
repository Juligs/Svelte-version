<script>
    import { userData, setSelectedComponent } from "$stores";
    import valores from "$lib/valores";
    import { Button } from "$components";
    
    let subopciones = null;
    let opcionEscogida = null;

    $: objects = valores.Objects.objects;

    function handleOnClick(button) {
        if (!button.valor && button.subopciones && button.subopciones.length) {
            subopciones = button.subopciones;
        } else {
            descontarOpcion(button.valor);
            setSelectedComponent("food");
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
</script>

<div class="cont cont--m pad--t80">
    <p>
     Necesitas comprar cosas para el hogar para vivir cómodo o prefieresconformarte con los muebles que ya hay
    </p>
</div>

<div class="cont cont--m pad--t20">
    <div class="buttonCont">
        {#each objects as objects}
            <Button
                class="option"
                on:click={() => handleOnClick(objects)}
                active={opcionEscogida === objects}
            >
                <h6>{objects.title}</h6>
            </Button>
        {/each}
    </div>
    {#if subopciones && opcionEscogida.title === "Ir de compras"}
        <div class="subopciones">
            {#each subopciones as subopcion}
                <div class="buttonContainer">
                    <Button
                        on:click={() => {
                            if (subopcion.seleccionada) {
                                subopcion.seleccionada = false;
                                descontarOpcion(-subopcion.valor); // Resta el valor al deseleccionar
                            } else {
                                subopcion.seleccionada = true;
                                descontarOpcion(subopcion.valor); // Suma el valor al seleccionar
                            }
                        }}
                    >
                        <h6>
                            {subopcion.title}
                            {#if subopcion.seleccionada}
                                <span class="selected-icon">✕</span>
                            {/if}
                        </h6>
                    </Button>
                </div>
            {/each}
        </div>
      
        <div class="bottonNext" on:click={() => setSelectedComponent("food")}> 
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-arrow-right"
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
                <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                <path d="M16 12l-4 -4" />
                <path d="M16 12h-8" />
                <path d="M12 16l4 -4" />
            </svg>
        </div>
    {/if}
</div>

<style>
    .bottonNext {
        width: 5px;
        height: 5px;
        position: absolute;
        right: 8rem;
        bottom: 4.5rem;
        cursor: pointer;
    }
    * {
        color: white;
    }
    .selected-icon {
        margin-left: 5px;
        color: rgb(231,18,196 ); 
    }
</style>
