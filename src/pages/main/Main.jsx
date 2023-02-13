import User from '../../components/user/User'
import './Main.css'

const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

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
                <div className='sp-userFriend'>
                    <img className='sp-userFriend-avatar' src={image} alt="" />
                    <div className="sp-userFriend-info">
                        <div className="sp-userFriend-nameAndMsg">
                            <div className='sp-userFriend-name'>george bush</div>
                            <div className='sp-userFriend-lastMsg'>  Hello Hello Hello mike how do you do ?</div>
                        </div>
                        <div className="sp-userFriend-time">5 min ago</div>

                    </div>
                </div>

            </div>
        </div>
        <div className='chatBoard'>

        </div>
    </div>
}

export default Main