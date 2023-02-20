import User, { UserStatus } from '../../components/user/User'
import UserFriend, { image } from '../../components/userFriend/UserFriend'
import './Main.css'
import { RiSendPlaneFill } from "react-icons/ri";
import Messages from '../../components/messages/Messages';



const users = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const Main = function () {


    return <div className='main'>
        <div className='sidePanel'>
            <User />
            <div className='sp-navBar'>
                <div className='sp-navBar-item sp-navBar-item-selected' title='Discussions'>Disc.</div>
                <div className='sp-navBar-item' title='Online Users'>Online</div>
                <div className='sp-navBar-item' title='All Users'>All</div>
            </div>
            <div className='sp-body'>
                {
                    users.map((_, index) => <div key={index}>{<UserFriend />}</div>)
                }

            </div>
        </div>
        <div className='chatBoard'>

            <Header />

            <Messages />

            <div className="chatBoard-msg">
                <div className="chatBoard-msg-container">
                    <div className='chatBoard-msg-input' contentEditable> <br /> </div>
                    <button className='chatBoard-msg-btn'><RiSendPlaneFill size='2em' /></button>

                </div>
            </div>
        </div>
    </div>
}

const Header = function(){
    return <div className="chatBoard-header">
        <div className="chatBoard-h-Cuser">
            <div className="chatBoard-h-Cuser-img">
                <img src={image} alt="" />
                <div title='Online' className="chatBoard-h-Cuser-status-dot">
                    <div></div>
                </div>

            </div>
            <div className="chatBoard-h-Cuser-nameStatus">
                <h1 className="chatBoard-h-Cuser-name">John</h1>
            </div>
        </div>
    </div>
}

const messages = [
    
]


export default Main