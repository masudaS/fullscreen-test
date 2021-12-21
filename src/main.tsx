import React, { useRef } from "react"
import ReactDOM from "react-dom"

const fullscreenBtn = document.getElementById("fullscreen") as HTMLButtonElement
fullscreenBtn.onclick = () => {
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

const documentFullscreenBtn = document.getElementById("document-fullscreen") as HTMLButtonElement
documentFullscreenBtn.onclick = () => {
  const doc = document.documentElement as any;

  console.log(typeof doc.requestFullscreen)
  if (typeof doc.requestFullscreen === "function") {
    doc.requestFullscreen()
  }

  console.log(typeof doc.webkitRequestFullscreen)
  if (typeof doc.webkitRequestFullscreen === "function") {
    doc.webkitRequestFullscreen()
  }
}

const App: React.VFC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onClickFullScreen = () => {
    const rect = ref.current as any
    console.log(typeof rect.requestFullscreen)
    if (typeof rect.requestFullscreen === "function") {
      rect.requestFullscreen()
    }

    console.log(typeof rect.webkitRequestFullscreen)
    if (typeof rect.webkitRequestFullscreen === "function") {
      rect.webkitRequestFullscreen()
    }
  }


  return (
    <div>
      react:
      <div className="rect" ref={ref}></div>
      <button onClick={onClickFullScreen}>fullscreen</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);

