<script>
  export let active = false
</script>

<div class="option" class:active on:click>  
<span><slot/></span>
</div>


<style>
    span{
    text-transform: uppercase;
    color: #fff
}

.option{
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    border: 2px solid #C237DB;
    border-radius: 10px;
    margin: 10px auto;
    padding: 15px 30px;
    background-color: black;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}
.option:hover, .option.active{
 background-color: #C237DB;
 transform: scale(1.05);
 border-color: #C237DB;
}
@media (max-width: 768px) {
    .option {
        padding: 10px 20px;
        font-size: 14px;
    }
}

</style>
