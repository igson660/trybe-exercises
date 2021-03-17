const listaEstados = document.getElementById('estado');

function insereEstados () {
  const estados = ["Acre", "Alagoas","Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goías", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul",  "Rondônia", "Roraíma", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

  let value = 1;

  for (let index = 0; index < estados.length; index += 1) {
    const criaOptions = document.createElement('option');
    listaEstados.appendChild(criaOptions);
    criaOptions.innerText = (estados[index])
    criaOptions.value = (estados[index])
  }
}
insereEstados ();

// const teste = document.querySelector('h1')
// const cria = document.createElement('h2')
//  teste.appendChild(cria)