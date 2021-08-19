import "./sidebar.css"
import  MachineInfo from "../machineInfo/MachineInfo";
import temp from "../../images/temp.png";
import humidity from "../../images/humid.png";

export default function Sidebar() {
    return (
        <div className="sidebar">
            < MachineInfo/>
            <div className="sidebarWrapper">
              
            <div className="sidebarMenu">
                

                <h3 className="sidebarTitle"></h3>
                 <ul className="sidebarList">
                    <li className="sidebarListItem ">
                      Shift :Day  
                    </li>
                 
                    <li className="sidebarListItem">
                      Product :Atlas Chooty T  
                    </li>
                    <li className="sidebarListItem">
                      Shift Target : 9000Nos
                    </li>
                    <li className="sidebarListItem">
                      Hourly Target : 4500Nos 
                    </li>

                </ul>
                </div>
                <div className="sidebarMenu">
                <h3 className="sidebarTitle"></h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                    Status : Running
  
                    </li>
                    <li className="sidebarListItem">
                    Machine Speed : 
  
                    </li>
                    <li className="sidebarListItem">
                    Power Consumption:

                    </li>
                    

                </ul>
                </div>
            </div>
            <div className="alert">
              <span><img src={temp} alt="temperature" className="temp" /></span>
              <span className="tempRate"> <h4>30</h4></span>

              <span><img src={humidity} alt="humidity" className="humid" /></span> 
              <span className="humidRate"> <h4>80%</h4></span> 
            </div>
            
            
        </div>
    )
}
