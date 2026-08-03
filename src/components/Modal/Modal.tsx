import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import type { ReactElement } from "react";
import "./Modal.css"

export default function Modal({opened, children} : {opened : boolean, children : ReactElement}) {
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if(opened) dialog.current?.showModal();
        else dialog.current?.close();
    }, [opened])

    return createPortal(<dialog className="modal" ref={dialog}>{children}</dialog>, document.getElementById("modal")!)
}