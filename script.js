function loadpk() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  let dados = url + nomePokemon.value;
  console.log(dados);
  fetch(dados)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.clear();
      console.log(data);
      document.querySelector("#nome").innerHTML = data["name"];
      document.querySelector("#numero").innerHTML = data["id"];
      let img = data["sprites"]["front_default"];
      document.querySelector("#foto").setAttribute("src", img);
    })
    .catch((erro) => {
      console.log(`Erro: ${erro}`);
    });
}
const nomePokemon = document.querySelector("#digita-nome")
nomePokemon.addEventListener("keyup",function(e) {
    if(e.key === 'Enter') {       
        loadpk();
        nomePokemon.value = ''
    }
  }) 
document.querySelector("#but1").onclick = loadpk;

