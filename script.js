const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //const today = "10/01"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("dia já incluso🚫")
    return
  }

  alert("Adiconado com sucesso✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
//const data = {
//  run: ["01-01", "01-03", "01-05", "01-06", "01-08", "01-10"],
// play: ["01-02", "01-04"],
// football: ["01-07", "01-09"],
//}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
