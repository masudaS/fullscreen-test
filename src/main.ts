
const btn = document.getElementById("btn") as HTMLButtonElement
btn.onclick = () => {
  const rect = document.getElementById("rect") as any

  console.log(typeof rect.requestFullscreen)
  if (typeof rect.requestFullscreen === "function") {
    rect.requestFullscreen()
  }

  console.log(typeof rect.webkitRequestFullscreen)
  if (typeof rect.webkitRequestFullscreen === "function") {
    rect.webkitRequestFullscreen()
  }
}
