import "./Home.css"
import Production from "../../components/production/Production";
import Oee from "../../components/oee/Oee";
import Quality from "../../components/quality/Quality";

export default function Home() {
    return (
        <div className="home">
          <Production /> 
          <div className="homeWidget">
           <Oee/>
           <Quality/>
          </div>
          


        </div>
    )
}
