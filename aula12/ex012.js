var agora = new Date() //Comando que possibilita pegar datas, horas, minutos, etc.
var hora = agora.getHours() 
var minuto = agora.getMinutes()
console.log(`Agora são ${hora}:${minuto}`)
if (hora < 6) {
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom Dia!")
} else if (hora < 19) {
    console.log("Boa Tarde!")
} else if (hora < 24) {
    console.log("Boa Noite!")
} else {
    console.log("Horário inexistente")
}