let input = document.getElementById("input")
let container = document.querySelector(".container")

let generateWord = (n) => {
    let text =""
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (let i = 0; i < n; i++) {
        let random = (Math.random() * 25).toFixed(0)
        text += letters[random]
        
    }

    return text

}

let generatePara = () => {
let noOfWord = Number(input.value)

    let para = document.createElement("p")

    let data = ""

    for (let i = 0; i < noOfWord; i++) {
        let randomWord = (Math.random() * 15).toFixed(0)
        data += generateWord(randomWord) 
        data += " "
        
    }
    para.textContent = data

    para.setAttribute("class","paras")

    container.append(para)
}

