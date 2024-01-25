import { curruser } from "../../format_curruser";
import { response_messagerie } from "./format_user";
import SideBarConvos from "./components/SidebarConvos";
import ContenuMessage from "./components/ContenuMessage";
export default function Layout({children}){
    const messagerie=response_messagerie.donnee;
    const current_user=curruser.donnee;
    return(<>
        <div className="content">
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <SideBarConvos messagerie={messagerie} current_user={current_user}></SideBarConvos>
                    {children}
                </div>
            </div>
        </div>
    </>);
}