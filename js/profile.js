const image = document.querySelector("#demo-ava");
const input = document.querySelector("#file-avatar");

input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
})

      