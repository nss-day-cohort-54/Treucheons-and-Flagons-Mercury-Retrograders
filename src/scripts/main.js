import { TF } from "./T-F.js"

const htmlTarget = document.querySelector(".mainContainer")
const renderHTML = () => {
    htmlTarget.innerHTML = TF()
}

renderHTML()