import "./machineInfo.css"
import status from "../../images/green_button.png";
import profile from "../../images/operator/operator.jpg";
import { Link } from "react-router-dom";




export default function MachineInfo() {
    return (
        <div className="machine">
        <div className="machineItem">
        <div className="machineContainer">
          <span className="machineTitle"><Link className="link" to={{ pathname: '/controller'} } >PA08</Link> </span>
          
          <span><img src={status} alt="machine status" className="status" /></span>
          <div>
            <span className="machineOperator"><img src={profile} alt="machine operator"  className="profile" /></span> 
            <span className="operatorName">
               operator
            </span>
          </div>
          
        </div>  
          <span className="date">04th Aug 2021</span>
        </div>
        </div>
    )
}


