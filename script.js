function loadpk() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  let dados = url + nomePokemon.value;
  fetch(dados)
    .then((response) => {
      return response.json();
    })
    .catch((erro) => {
      alert(`${erro}: Esse pokemon não existe, ou foi escrito da maneira errada!`)
    })
    .then((data) => {
      console.clear();
      console.log(data);
      document.querySelector("#nome").innerHTML = data["name"];
      document.querySelector("#numero").innerHTML = `Numero: ${data["id"]}`;
      let img = data["sprites"]["front_default"];
      document.querySelector("#foto").setAttribute("src", img);
      document.querySelector("#butskills").onclick = () => skills(data);
      document.querySelector("#stat").onclick = () => getStats(data);
      document.querySelector("#spin").onclick = () => spin(data);
    })
  nomePokemon.value = "";
  document.querySelector("#paragrafos").innerHTML = ""
}

function spin(data) {
  let img = data["sprites"]["front_default"];
  let back_img = data["sprites"]["back_default"];
  let photo = document.querySelector("#foto");
  if (photo.src === back_img) {
    photo.setAttribute("src", img);
  } else {
    photo.setAttribute("src", back_img);
  }
}

function getStats(data) {
  let dados = document.querySelector("#paragrafos");
  dados.innerHTML = "";
  const status = data.stats;
  status.map((statusBase) => {
    dados.innerHTML += `<p>${statusBase.stat.name}: ${statusBase.base_stat}`;
    console.log(statusBase);
  });
}

function skills(data) {
  let dados = document.querySelector("#paragrafos");
  dados.innerHTML = "";
  let abilities = data.abilities;
  let n = 1;
  abilities.map((skill) => {
    dados.innerHTML += `<p>Skill ${n}: ${skill.ability.name}</p>`;
    n++;
  });
}

const nomePokemon = document.querySelector("#digita-nome");
nomePokemon.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    loadpk();
    nomePokemon.value = "";
  }
});

document.querySelector("#but1").onclick = loadpk;
