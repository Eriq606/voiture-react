'use client';

import { curruser } from "@/app/format_curruser";
import { response_messagerie } from "./format_user";
import SideBarConvos from "./components/SidebarConvos";
import { useEffect } from "react";

export default function Layout({children}){
    const messagerie=response_messagerie.donnee;
    const current_user=curruser.donnee;
    useEffect(()=>{
        localStorage.setItem("current_user", JSON.stringify(current_user));
    },[])
    return(<>
        <div>
            <SideBarConvos messagerie={messagerie} current_user={current_user}></SideBarConvos>
            {children}
        </div>
    </>);
}