import React from "react";
import {Link} from 'react-router-dom'
function DivSecretivSection (props){
return (
    <ul>
<li><Link to="/{props.pagelink}">{props.name}</Link></li>
</ul>
);
}
export default DivSecretivSection;


