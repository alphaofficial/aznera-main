import Iframe from 'react-iframe'
import {navigate} from '../utils/functions'
import HeadFile from '../components/HeadFile'


export default function Shop(){
    return(
        <><HeadFile />
        <style global jsx>{`
                .homebtn {
                    z-index: 999;
                    position: fixed;
                    bottom: -1px;
                    left: -1;
                    right: 0;
                    background: #FF6B05;
                    border-color: #FF6B05;
                    color: white;
                    padding: 1em;
                    margin: .2em;
                    box-shadow: none;
                    width: 100%
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
                <button onClick={()=>{navigate()}} className="btn btn-primary homebtn"><span><i className="fa fa-caret-left"></i>{"Go To Home"}</span></button>
        </>
    )
}
