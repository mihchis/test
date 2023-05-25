const img  = document.querySelectorAll('.zoom-in')

const lengthImg = img.length
for (let i = 0; i < lengthImg; i++) {
    img[i].addEventListener("click", () => {
        const p  = document.querySelectorAll('#p-item')
        console.log(p[i])
    });
}
