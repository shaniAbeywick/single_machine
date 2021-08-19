import "./quality.css"
import Rejections from "./Rejections"
import MinorStoppages from "./MinorStoppages"
import Breakdown from "./Breakdown"


export default function Quality() {
    return (
        <div className="quality">
            <h3 className="topic">REJECTIONS</h3>
              
            <Rejections/>
            <h3 className="topic">MINOR STOPPAGES</h3>
             
            <MinorStoppages/>
            <h3 className="topic">BREAKDOWN</h3>
             
            <Breakdown/>
            
        </div>
    )
}
