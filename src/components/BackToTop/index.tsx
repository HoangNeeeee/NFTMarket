import React from "react"
import ReactDOM from "react-dom"
import { BackTop } from "antd"

ReactDOM.render(
    <div className="bg-black">
        <BackTop />
        <strong style={{ color: "rgba(64, 64, 64, 0.6)" }}> gray </strong>
    </div>,
    document.getElementById("container")
)
