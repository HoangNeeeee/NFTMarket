"use client"
import React from "react"
import "./index.css"
import { Input, QRCode, Space } from "antd"

const TestAntDesign: React.FC = () => {
    const [text, setText] = React.useState("https:emhoangdangthooxy.vercel.app")

    return (
        <Space direction="vertical" align="center">
            <QRCode value={text || "-"} />
        </Space>
    )
}

export default TestAntDesign
