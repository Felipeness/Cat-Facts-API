document.addEventListener("DOMContentLoaded", async()=>{
    getCatFact();

    document.getElementById("buttoncat").addEventListener("click", () => {
      getCatFact();
    });
    document.getElementById("buttoncat02").addEventListener("click", async()=>{
        getCatFact();
    });
})

async function getCatFact(){
    let result = await fetch("https://catfact.ninja/fact");
    let data = await result.json();
    document.getElementById("catFactText").innerText = data.fact;
}
