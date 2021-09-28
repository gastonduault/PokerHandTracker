import '../styles/Hand.css';
import SaisiCarte from './SaisiCarte';


function Hand(){
    return(
        <div className='Hand'>
            <h3>Votre main</h3>
            <SaisiCarte/>
            <SaisiCarte/>
        </div>
    )
}

export default Hand