import Iframe from 'react-iframe'
import {navigate} from '../utils/functions'


export default function Shop(){
    return(
        <><style global jsx>{`
                .homebtn {
                    z-index: 999;
                    position: fixed;
                    bottom: 10px;
                    left: 0;
                    background: #FF6B05;
                    border-color: #FF6B05;
                    color: white;
                    padding: .5em;
                    border-radius: 3px;
                    margin: .2em;
                    box-shadow: none;
                }
                body{
                    overflow: hidden;
                    margin: 0;
                    paddimg: 0;  
                }
                .frame {
                    overflow: hidden;
                    height: 100vh;
                    width: 100%
                }
            `} </style>
                <Iframe url="https://azmerarestaurant.curiashops.com/"
                    width="100%"
                    frameBorder={"0"}
                    allowFullScreen={true}
                    className="frame"
                />
                <button onClick={()=>{navigate()}} className="btn btn-primary homebtn"><span><i className="fa fa-caret-left"></i>{"< Go to home"}</span></button>
        </>
    )
}
