import React from "react";
import Myparagraph from "./Myparagraph";
const Demoparagraph = (porps) => {
    console.log("Demo");
    return (
        <Myparagraph>{porps.show ? 'Testing for component reExecute' : ''}</Myparagraph>
    )
};
export default React.memo(Demoparagraph);