"use client"

import { useState } from "react"

export default function FlowContainer({children}) {
   const [show,isShow]=useState(false)
    return <div>
            {children}
        </div>
}

