<script>
  import {  setSelectedComponent, userData } from "$stores";
  import { Button } from "$components";

  function descontarOpcion(valor) {
    if ($userData.presupuesto >= valor) {
      $userData.presupuesto -= valor;
    } else {
      alert("No tienes suficiente presupuesto para esta opción.");
    }
  }
  const ciudades = ["Madrid", "Barcelona", "Granada", "Valencia", "ACoruña", "Salamanca"];

  function handleOnClick(ciudad) {
    $userData.ciudadEscogida = ciudad;
    setSelectedComponent("cities");
  }
</script>

<div class="cont cont--m pad--t80">
  <div class="txt">
    <p>
    Has ahorrado para llegar a este momento, sea trabajando en el verano o guardando el dinero que te ofrecían en tu cumple. En este interactivo, te proponemos elegir entre las mejores ciudades para estudiantes Madrid, Barcelona y Valencia, según el ranking QS Best Student Cities 2023. Desde El Mundo, se agregaron los sitios históricos: Granada, Salamanca y Pamplona.
    </p>
   
  </div>
  <div class="buttonCont">
    <!-- Esto sirve para hacer un loop de las ciudades con el array que creamos -->
    {#each ciudades as ciudad}
      <Button on:click={() => handleOnClick(ciudad)}>{ciudad}</Button>
    {/each}
  </div>
</div>

<style>
</style>
