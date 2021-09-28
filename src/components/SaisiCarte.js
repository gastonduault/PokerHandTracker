import '../styles/SaisiCarte.css'

import DEUXH from '../assets/2H.JPG'
import DEUXC from '../assets/2C.JPG'
import DEUXD from '../assets/2D.JPG'
import DEUXS from '../assets/2S.JPG'
import TROISH from '../assets/3H.JPG'
import TROISC from '../assets/3C.JPG'
import TROISD from '../assets/3D.JPG'
import TROISS from '../assets/3S.JPG'
import QUATREH from '../assets/4H.JPG'
import QUATREC from '../assets/4C.JPG'
import QUATRED from '../assets/4D.JPG'
import QUATRES from '../assets/4S.JPG'
import CINQH from '../assets/5H.JPG'
import CINQC from '../assets/5C.JPG'
import CINQD from '../assets/5D.JPG'
import CINQS from '../assets/5S.JPG'
import SIXH from '../assets/6H.JPG'
import SIXC from '../assets/6C.JPG'
import SIXD from '../assets/6D.JPG'
import SIXS from '../assets/6S.JPG'
import SEPTH from '../assets/7H.JPG'
import SEPTC from '../assets/7C.JPG'
import SEPTD from '../assets/7D.JPG'
import SEPTS from '../assets/7S.JPG'
import HUITH from '../assets/8H.JPG'
import HUITC from '../assets/8C.JPG'
import HUITD from '../assets/8D.JPG'
import HUITS from '../assets/8S.JPG'
import NEUFH from '../assets/9H.JPG'
import NEUFC from '../assets/9C.JPG'
import NEUFD from '../assets/9D.JPG'
import NEUFS from '../assets/9S.JPG'
import DIXH from '../assets/10H.JPG'
import DIXC from '../assets/10C.JPG'
import DIXD from '../assets/10D.JPG'
import DIXS from '../assets/10S.JPG'
import JH from '../assets/JH.JPG'
import JC from '../assets/JC.JPG'
import JD from '../assets/JD.JPG'
import JS from '../assets/JS.JPG'
import QH from '../assets/9H.JPG'
import QC from '../assets/9C.JPG'
import QD from '../assets/9D.JPG'
import QS from '../assets/9S.JPG'
import KH from '../assets/KH.JPG'
import KC from '../assets/KC.JPG'
import KD from '../assets/KD.JPG'
import KS from '../assets/KS.JPG'
import AH from '../assets/AH.JPG'
import AC from '../assets/AC.JPG'
import AD from '../assets/AD.JPG'
import AS from '../assets/AS.JPG'


function SaisiCarte(){
    return(
        <div className="listCard" style={{height: 30}}>   
            <div className="zoneClickCard">
                <p className="txtCard">1<sup>ère</sup>carte</p>
                <div className="burgerListCard">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul>
                <li className="cartes">
                    <p className="carteS">2</p>
                    <div className="signe">
                    <img className="imgCartes1" src={DEUXH} alt=''  />
                    <img className="imgCartes1" src={DEUXC} alt=''/>
                    <img className="imgCartes1" src={DEUXD} alt=''/>
                    <img className="imgCartes1" src={DEUXS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">3</p>
                    <div className="signe">
                    <img className="imgCartes1" src={TROISH} alt=''  />
                    <img className="imgCartes1" src={TROISC} alt=''/>
                    <img className="imgCartes1" src={TROISD} alt=''/>
                    <img className="imgCartes1" src={TROISS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">4</p>
                    <div className="signe">
                    <img className="imgCartes1" src={QUATREH} alt=''  />
                    <img className="imgCartes1" src={QUATREC} alt=''/>
                    <img className="imgCartes1" src={QUATRED} alt=''/>
                    <img className="imgCartes1" src={QUATRES} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">5</p>
                    <div className="signe">
                    <img className="imgCartes1" src={CINQH} alt=''  />
                    <img className="imgCartes1" src={CINQC} alt=''/>
                    <img className="imgCartes1" src={CINQD} alt=''/>
                    <img className="imgCartes1" src={CINQS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">6</p>
                    <div className="signe">
                    <img className="imgCartes1" src={SIXH} alt=''  />
                    <img className="imgCartes1" src={SIXC} alt=''/>
                    <img className="imgCartes1" src={SIXD} alt=''/>
                    <img className="imgCartes1" src={SIXS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">7</p>
                    <div className="signe">
                    <img className="imgCartes1" src={SEPTH} alt=''  />
                    <img className="imgCartes1" src={SEPTC} alt=''/>
                    <img className="imgCartes1" src={SEPTD} alt=''/>
                    <img className="imgCartes1" src={SEPTS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">8</p>
                    <div className="signe">
                    <img className="imgCartes1" src={HUITH} alt=''  />
                    <img className="imgCartes1" src={HUITC} alt=''/>
                    <img className="imgCartes1" src={HUITD} alt=''/>
                    <img className="imgCartes1" src={HUITS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">9</p>
                    <div className="signe">
                    <img className="imgCartes1" src={NEUFH} alt=''  />
                    <img className="imgCartes1" src={NEUFC} alt=''/>
                    <img className="imgCartes1" src={NEUFD} alt=''/>
                    <img className="imgCartes1" src={NEUFS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">10</p>
                    <div className="signe">
                    <img className="imgCartes1" src={DIXH} alt=''  />
                    <img className="imgCartes1" src={DIXC} alt=''/>
                    <img className="imgCartes1" src={DIXD} alt=''/>
                    <img className="imgCartes1" src={DIXS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">J</p>
                    <div className="signe">
                    <img className="imgCartes1" src={JH} alt=''  />
                    <img className="imgCartes1" src={JC} alt=''/>
                    <img className="imgCartes1" src={JD} alt=''/>
                    <img className="imgCartes1" src={JS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">Q</p>
                    <div className="signe">
                    <img className="imgCartes1" src={QH} alt=''  />
                    <img className="imgCartes1" src={QC} alt=''/>
                    <img className="imgCartes1" src={QD} alt=''/>
                    <img className="imgCartes1" src={QS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">K</p>
                    <div className="signe">
                    <img className="imgCartes1" src={KH} alt=''  />
                    <img className="imgCartes1" src={KC} alt=''/>
                    <img className="imgCartes1" src={KD} alt=''/>
                    <img className="imgCartes1" src={KS} alt=''/>
                    </div>
                </li>
                <li className="cartes">
                    <p className="carteS">A</p>
                    <div className="signe">
                    <img className="imgCartes1" src={AH} alt=''  />
                    <img className="imgCartes1" src={AC} alt=''/>
                    <img className="imgCartes1" src={AD} alt=''/>
                    <img className="imgCartes1" src={AS} alt=''/>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SaisiCarte