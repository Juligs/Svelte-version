<script>
    import valores from "$lib/valores";
    import { userData, setSelectedComponent } from "$stores";
    import { Button } from "$components";

    $: ciudadEscogida = $userData.ciudadEscogida;

    let mostrarOpciones = true; // Variable para controlar la visibilidad de las opciones
    let mostrarTarjeta = false; // Variable para controlar si se muestra la tarjeta

    function descontarOpcion(valor) {
        if ($userData.presupuesto >= valor) {
            $userData.presupuesto -= valor;
            mostrarOpciones = false; // Ocultar opciones
            mostrarTarjeta = true; // Mostrar la tarjeta
        } else {
            alert("No tienes suficiente presupuesto para esta opción.");
        }
    }
</script>

<div class="cont cont--m pad--t80">
    <div class="txt">
        <p>
            {#if $userData.presupuesto < 150}
                Oh te queda muy poco dinero para sobrevivir en {ciudadEscogida}! Te recomendamos que busques un trabajo.
            {:else}
                ¡Tu presupuesto es suficiente para sobrevivir en {ciudadEscogida}! ¿Quieres buscar un trabajo para tener un dinerillo extra?
            {/if}
        </p>
    </div>
    <div class="buttonCont pad--t80">
        {#if mostrarOpciones}
            <!-- Solo mostrar las opciones si mostrarOpciones es true -->
            <button
                class="buttonOcio"
                on:click={() => {
                    descontarOpcion(0);
                    setSelectedComponent("work");
                }}
            >
                Prefiero tener mis fines de semana libre
            </button>
            <button
                class="buttonOcio"
                on:click={() => {
                    descontarOpcion(25);
                    setSelectedComponent("work");
                }}
            >
                Buscar un trabajo
            </button>
            <button
                class="buttonOcio"
                on:click={() => {
                    descontarOpcion(25);
                    setSelectedComponent("work");
                }}
            >
                Le pediré dinero a mis padres
            </button>
        {/if}
    </div>

    <!-- Mostrar la tarjeta solo si mostrarTarjeta es true -->
    {#if mostrarTarjeta}
        <div class="tarjeta">
            <p>¡Has decidido buscar un trabajo el sueldo medio de media jornada en España con un contrato de 20h es de 600€</p>
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
   .txt{
        color: white;
    }
 .bottonNext {
        width: 5px;
        height: 5px;
        position: absolute;
        right: 8rem;
        bottom: 4.5rem;
        cursor: pointer;
    }
   .buttonCont {
        display: flex;
        flex-direction: column;
        justify-content: center;
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

    .tarjeta {
        background-color: #c237db;
        color: white;
        border-radius: 10px;
        padding: 10px;
        margin-top: 20px;
        text-align: center;
    }

    @media (max-width: 768px) {
        .buttonCont {
            align-items: center; 
        }
    }
</style>
