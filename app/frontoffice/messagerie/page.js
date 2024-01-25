import { Col } from "react-bootstrap";

export default function Page(){
    return(<>
        <div className="col-9" style={{height:"95vh",overflowY:"auto"}}>
            <div className="h-100 bg-secondary rounded p-4">
                <h6>Aucune conversation selectionnee</h6>
            </div>
        </div>
    </>);
}