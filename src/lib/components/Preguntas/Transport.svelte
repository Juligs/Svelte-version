<script>
    import valores from "$lib/valores";
    import { userData, setSelectedComponent } from "$stores";
    import { Button } from "$components";

    let subopciones = null;
    let opcionEscogida = null;

    $: ciudadEscogida = $userData.ciudadEscogida;
    $: transporte = valores[ciudadEscogida]?.Transporte;

    function handleOnClick(button) {
        if (!button.valor && button.subopciones.length) {
            subopciones = button.subopciones;
        } else {
            descontarOpcion(button.valor);
            setSelectedComponent("ocio2");
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
    <p class="txt pad--b40">{valores[ciudadEscogida].subtitle}<p>

    <div class="buttonCont">
        {#if transporte.length}
            {#each transporte as item}
                <button class="buttonOcio" on:click={() => {handleOnClick(item)}}>
                    <h6>{item.title}</h6>
                </button>
            {/each}
        {/if}
    </div>
</div>

<style>
    .txt{
        color: white;
    }
   .buttonCont {
    display: flex;
    flex-direction: column; /* Cambiamos a columna */
    justify-content: center; /* Alineación vertical al centro */
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
}

.buttonOcio {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    height: auto; 
    border: 2px solid #c237db;
    border-radius: 10px;
    margin: 10px auto; 
    padding: 10px 20px; 
    background-color: black;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}

.buttonOcio:hover {
    background-color: #c237db;
    transform: scale(1.05);
    border-color: #c237db;
}

@media (max-width: 768px) {
    .buttonCont {
        align-items: center; 
    }
}
</style>
