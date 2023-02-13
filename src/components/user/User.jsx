import './User.css'

const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

const User = function () {
    return <div className='user'>
        <img className='user-image' src={image} alt="" />
        <div className='user-nameAndStatus'>
            <h1 className='user-name'>Jimmy</h1>
            <div className='user-status'>
                <div className='user-status-dot'></div>
                <div className='user-status-text'>online</div>

            </div>

        </div>
    </div>
}

export default User