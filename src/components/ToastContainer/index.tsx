"use client"

import React from "react"
import { ToastContainer as ToastContainerT } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ToastContainer = () => {
    return (
        <ToastContainerT
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    )
}
