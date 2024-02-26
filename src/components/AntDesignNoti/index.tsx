"use client"
import React, { useMemo } from "react"
import { Button, Divider, InputNumber, notification, Space, Switch } from "antd"

const Context = React.createContext({ name: "Default" })

const AntDesignNoti: React.FC = () => {
    const [api, contextHolder] = notification.useNotification({
        stack: {
            threshold: 3,
        },
    })

    const openNotification = () => {
        api.open({
            message: "Notification Title",
            description: `${Array(Math.round(Math.random() * 5) + 1)
                .fill("This is the content of the notification.")
                .join("\n")}`,
            duration: null,
        })
    }

    const contextValue = useMemo(() => ({ name: "Ant Design" }), [])

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
            <div>
                <Divider />
                <Button type="primary" onClick={openNotification}>
                    Open the notification box
                </Button>
            </div>
        </Context.Provider>
    )
}

export default AntDesignNoti
