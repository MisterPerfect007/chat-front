import './UserFriend.css'

export const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

const UserFriend = function(){
    return <div className='sp-userFriend'>
        <img className='sp-userFriend-avatar' src={image} alt="" />
        <div className="sp-userFriend-info">
            <div className="sp-userFriend-nameAndMsg">
                <div className='sp-userFriend-name'>george bush</div>
                <div className='sp-userFriend-lastMsg'>  Hello Hello Hello mike how do you do ?</div>
            </div>
            <div className="sp-userFriend-time">5 min ago</div>

        </div>
    </div>
}


export default UserFriend