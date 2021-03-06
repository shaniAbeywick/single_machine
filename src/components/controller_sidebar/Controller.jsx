import "./controller.css"
import "../sidebar/sidebar.css"
import "../machineInfo/machineInfo.css"
import profile from "../../images/operator/operator.jpg";
import temp from "../../images/temp.png";
import humidity from "../../images/humid.png";
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';


import ArrowDropUpTwoToneIcon from '@material-ui/icons/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';




export default function Controller() {
    return (
        <div className="sidebar">
            <div className="machine">
                <div className="machineItem">
                    <div className="machineContainer">
                        <span className="machineTitle">PA08 </span>
          
                        <span><Switch /></span>
                      <div>
                        <span className="machineOperator"><img src={profile} alt="machine operator"  className="profile" /></span> 
                        <span className="operatorName">
                        operator
                        </span>
                      </div>
                      
                      
                    
                     
                    </div>
                    <div className="main_div">
                      <span className="Title"><h3>Speed</h3></span>
                      <div className="center_div">
                          <h3 id="display">0</h3>
                      </div>
                      <div className="btn">
                      <span className="btnUp"><Button><ArrowDropUpTwoToneIcon/></Button></span>
                      <span className="btnDown"><Button>< ArrowDropDownTwoToneIcon/></Button></span>
                      </div>
                      
                      
                      
                      
                      
                    </div>
                </div>  
               
            </div>

            <div className="alert_controller">
              <span><img src={temp} alt="temperature" className="temp" /></span>
              <span className="tempRate"> <h4>30</h4></span>

              <span><img src={humidity} alt="humidity" className="humid" /></span> 
              <span className="humidRate"> <h4>80%</h4></span> 
            </div>
        </div>    
        
            
                  
               
              
          
                
      
                
            
            
            
       
    )
}
