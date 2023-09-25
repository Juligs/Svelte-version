<script>
    import { userData, setSelectedComponent } from "$stores";
    import valores from "$lib/valores";
    import { Button } from "$components";

    let subopciones = null;
    let opcionEscogida = null;

    $: Supermercado = valores.Food.Supermercado;

    function handleOnClick(button) {
        if (!button.valor && button.subopciones && button.subopciones.length) {
            subopciones = button.subopciones;
        } else {
            descontarOpcion(button.valor);
            setSelectedComponent("ocio");
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
    <p>Comida</p>
</div>

<div class="cont cont--m pad--t20">
    <div class="buttonCont">
        {#each Supermercado as Supermercado}
            <Button
                class="option"
                on:click={() => handleOnClick(Supermercado)}
                active={opcionEscogida === Supermercado}
            >
                <h6>{Supermercado.title}</h6>
            </Button>
        {/each}
    </div>
    {#if subopciones && opcionEscogida.title === "Ir al supermercado"}
        <div class="subopciones ir-al-supermercado">
            <p class="text">Selecciona los productos que deseas comprar:</p>
            {#each subopciones as subopcion}
                <div class="buttonContainer">
                    <div
                        class="buttonList-ir"
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
                        <h6 class="list">
                            <span class="selected-icon">-</span>
                            {subopcion.title}
                            {#if subopcion.seleccionada}
                                <span class="selected-icon">✕</span>
                            {/if}
                        </h6>
                    </div>
                </div>
            {/each}
            <p class="metodología">
                Metodología: El precio de los alimentos fue hecho a partir del
                promedio entre el precio presentado en Carrefour y en Lidl en el
                site, ya que estas dos marcas están en las seis ciudades
                elegidas en este trabajo
            </p>
            <div
                class="bottonNext"
                on:click={() => setSelectedComponent("ocio")}
            >
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
        </div>
    {/if}
    {#if subopciones && opcionEscogida.title === "No iré al supermercado"}
        <div class="subopciones">
            {#each subopciones as subopcion}
                <div class="buttonList">
                   <Button
                        on:click={() => {
                            descontarOpcion(subopcion.valor);
                            setSelectedComponent("ocio");
                        }}
                    >
                        <h6>{subopcion.title}</h6>
                    </Button>
                </div>
            {/each}
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
        color: rgb(231, 18, 196);
    }
    .subopciones.ir-al-supermercado {
        background-color: white;
        height: 100%;
        border: 1px solid #c237db;
        padding: 10px;
        margin-bottom: 20px;
    }
    .buttonList-ir,
    .list {
        color: black;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
    }
    .metodología {
        margin-top: 20px;
        color: black;
        font-size: 12px;
        font-weight: 500;
    }
    .text {
        padding: 20px 0;
        color: black;
        font-size: 14px;
        font-weight: 500;
    }
</style>
