<script>
    import { Button } from "$components";
    import { userData, setSelectedComponent } from "$stores";
    import valores from "$lib/valores";
    function descontarOpcion(valor) {
        if ($userData.presupuesto >= valor) {
            $userData.presupuesto -= valor;
        } else {
            alert("No tienes suficiente presupuesto para esta opción.");
        }
    }
</script>

<div class="cont cont--m pad--t80">
    <div class="txt">
        <p>
            Has tenido un día largo, muchas cosas en qué pensar. Mañana es tu
            primer día de clases. Conocerás gente de toda España y también de
            otras partes del mundo. Descansa.
        </p>
        <p>
            Conociste gente muy maja. Como estais todos solos en la nueva
            ciudad, vais a quedar con tus compañeros a cenar. Habéis decidido ir
            a tepeo ¿Aceptas la invitación?
        </p>
    </div>
</div>
<div class="buttonContainer">
    <button
        class="buttonOcio"
        on:click={() => {
            descontarOpcion(0);
            setSelectedComponent("transport");
        }}
    >
        Quedarse en casa
    </button>
    <button
        class="buttonOcio"
        on:click={() => {
            descontarOpcion(25);
            setSelectedComponent("transport");
        }}
    >
        Salir con tus compañeros 25€
    </button>
</div>

<style>
    .buttonContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .buttonOcio {
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        border: 2px solid #c237db;
        border-radius: 10px;
        margin: 80px auto;
        padding: 15px 30px;
        background-color: black;
        color: white;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease,
            border-color 0.3s ease;
    }

    .buttonOcio:hover {
        background-color: #c237db;
        transform: scale(1.05);
        border-color: #c237db;
    }

    @media (max-width: 768px) {
        .buttonContainer {
            flex-direction: column;
            align-items: stretch;
        }

        .buttonOcio {
            margin: 10px auto;
            padding: 10px 20px;
            font-size: 14px;
        }
    }
</style>
