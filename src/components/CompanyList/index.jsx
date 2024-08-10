import { nvidia_logo } from "../../assets";
import UpDownText from "../UpDownText";

function CompanyList(){
    return(
        <button style={{width:320,padding:'5px 0px ' ,display:'flex', justifyContent:"space-between", margin:'10px'}}>
            <div style={{display:'flex', alignItems:"center"}}>
                <img src={nvidia_logo} height='30px' style={{borderRadius:'100%', marginRight:8}}/>
                <div>아침운동</div>
            </div>
            <div style={{textAlign:'right'}}>
                <div>12,345원</div>
                <UpDownText>-560 (-3.8%)</UpDownText>
            </div>
        </button>
    )
}

export default CompanyList;