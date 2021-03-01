
let estado = "aprovado";
estado = "quase"

switch (estado) {
    case "aprovado":
        console.log("Parabéns você foi aprovado(a)")
        break;

    case "lista":
        console.log("Você esta na nossa lista de espera")
        break;

    case "reprovdado":
        console.log("Você foi reprovado(a)")
        break;

    default:
    console.log("não se aplica");
}