<script>
  import { userData, setSelectedComponent } from "$stores"

function descontarOpcion(valor) {
    if ($userData.presupuesto >= valor) {
      $userData.presupuesto -= valor;
    } else {
      alert("No tienes suficiente presupuesto para esta opción.");
    }
  }

</script>
<main class="prueba">
 
  <div class="header__middleContainer">
    <div class="header__yourContent">
      <div class="header__cont">
        <h1 class="header__title">"Tu guía financiera para la vida universitaria en España" </h1>
        <h2 class="header__subtitle pad--b20">Explora ciudades, ajusta gastos y vive al máximo tu etapa universitaria en España!"</h2>
        <div class="presupuestoCont">
        <label class="txt__presupuesto" for="inputPresupuesto">Ingresa tu presupuesto:</label>  
        <input
        type="number"
        id="inputPresupuesto"
        bind:value={$userData.presupuesto}
        />
        </div>
      
        <div class="neon" on:click={() => setSelectedComponent("pickCity")}>
          <h6> Empezar </h6>
        </div>
      </div>
                  
  
      <div class="cont">
        <div class="credits flex flex--col">
          <div class="credits__block flex flex--row ">
            <div class="credits__names">
              <div class="credits__name">
                <a class="flex flex--row  flex--gap4" href="https://twitter.com/cglucio" target="_blank">
                  Ana Sousa
                </a>
              </div>
              <span class="credits__line">|</span>
              <div class="credits__name">
                <a class="flex flex--row  flex--gap4" href="https://twitter.com/Santisaiz" target="_blank">
                  Juliana Suárez
                </a>
              </div>
              <span class="credits__line">|</span>
              <div class="credits__name">
                <a class="flex flex--row  flex--gap4" href="https://twitter.com/rebecayanke" target="_blank">
                  Fernando Anido
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cont cont--s pad--t20 pad--b20">
        <div class="social flex flex-row flex--jcenter">
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://lab.elmundo.es/prevencion-suicidio/index.html" target="_blank">
            <svg id="social__fa" version="1.1" width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
              <path d="M62.65,50h-8.73v29.41H42.15V50h-5.88V38.23h5.83v-5.32c0-4.81,2.29-12.33,12.38-12.33l9.09,0.04V30.7h-6.6 c0,0-2.6,0.53-2.6,2.82v4.71h9.35L62.65,50z" />
            </svg>
          </a>
          <a href="https://twitter.com/intent/tweet?url=https://lab.elmundo.es/prevencion-suicidio/index.html&text=Once vidas surge de la necesidad de romper con el silencio y visibilizar la realidad del suicidio, una muerte evitable&original_referer=https://lab.elmundo.es/prevencion-suicidio/index.html" target="_blank">
            <svg id="social__tw" version="1.1" width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="14.08 17.17 65 65" enable-background="new 14.08 17.17 65 65" xml:space="preserve">
              <path d="M70.06,37.86c0.02,0.51,0.03,1.02,0.03,1.54c0,15.7-12.14,33.8-34.33,33.8c-6.81,0-13.16-1.96-18.5-5.34 c0.95,0.11,1.9,0.17,2.88,0.17c5.66,0,10.85-1.9,14.99-5.09c-5.28-0.09-9.73-3.53-11.27-8.25c0.73,0.14,1.49,0.21,2.27,0.21 c1.1,0,2.17-0.15,3.18-0.42c-5.52-1.1-9.68-5.9-9.68-11.65v-0.15c1.63,0.89,3.49,1.42,5.47,1.48c-3.23-2.13-5.37-5.77-5.37-9.88 c0-2.18,0.6-4.22,1.64-5.97c5.95,7.19,14.84,11.91,24.87,12.41c-0.2-0.87-0.31-1.78-0.31-2.71c0-6.56,5.4-11.88,12.07-11.88 c3.47,0,6.6,1.44,8.8,3.75c2.75-0.53,5.34-1.52,7.67-2.88c-0.9,2.77-2.81,5.1-5.31,6.57c2.44-0.29,4.76-0.92,6.93-1.87 C74.47,34.1,72.42,36.19,70.06,37.86L70.06,37.86z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://lab.elmundo.es/prevencion-suicidio/index.html&title=Once vidas surge de la necesidad de romper con el silencio y visibilizar la realidad del suicidio, una muerte evitable&summary=&source=" target="_blank">
            <svg id="social__li" version="1.1" width="22px" height="22px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
              <path d="M34.31,78.41H20.59V39.2h13.73L34.31,78.41L34.31,78.41z M27.45,33.31c-3.79,0-6.87-3.08-6.87-6.86 c0-3.79,3.07-6.86,6.87-6.86c3.78,0,6.86,3.07,6.86,6.86C34.31,30.24,31.24,33.31,27.45,33.31z M79.41,78.41H67.65V59.3 c0-4.56-0.51-10.42-6.75-10.42c-6.34,0-7.31,4.97-7.31,10.09v19.44H42.16V39.2h10.93v5.29h0.17c1.63-3.09,5.61-5.29,11.54-5.29 c12.33,0,14.62,7.08,14.62,17.66L79.41,78.41L79.41,78.41z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
#inputPresupuesto {
    padding: 5px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    max-width: 100px;
    box-sizing: border-box;
  }
.presupuestoCont{

  padding: 10px;
  margin-bottom:10px;
  border: 1px solid #fff;
}

.neon{
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  width: 100px; 
  height: 40px; border: 1px solid #41FF09;
  border-radius: 5px;
  margin-bottom: 20px
}      

h6{
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
}
.neon:hover{

  color: white;
  box-shadow: 0 0 5px #41FF09,
              0 0 15px #41FF09,
              0 0 30px #41FF09,
              0 0 50px #41FF09;
  -webkit-box-reflect:below 1px linear-gradient(transition, white) ; 
    width: 100px; 
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
