<script>
    import { userData, setSelectedComponent } from "$stores";
    function descontarOpcion(valor) {
        if ($userData.presupuesto >= valor) {
            $userData.presupuesto -= valor;
        } else {
            alert("No tienes suficiente presupuesto para esta opción.");
        }
    }
</script>

<div class="cont cont--m pad--t80 pad--b80">
    <div class="txt">
        <p>
            Luego de una semanas, tienes un tiempo libre para ti
        </p>
      
    </div>
</div>
<div class="buttonCont">
    <button
        class="buttonOcio"
        on:click={() => {
            descontarOpcion(0);
            setSelectedComponent("work");
        }}
    >
        Ir al gimnasio
    </button>
    <button
        class="buttonOcio"
        on:click={() => {
            descontarOpcion(25);
            setSelectedComponent("work");
        }}
    >
        Aprender un idioma 
    </button>
    <button
        class="buttonOcio"
        on:click={() => {
            descontarOpcion(25);
            setSelectedComponent("work");
        }}
    >
        Aprender a tocar un instrumento 
    </button>
    <button
        class="buttonOcio"
        on:click={() => {
            descontarOpcion(0);
            setSelectedComponent("work");
        }}
    >
        Salir a caminar, leer 0€
    </button>
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
