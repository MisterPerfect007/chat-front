import './Messages.css'
import { RiCheckFill, RiCheckDoubleLine } from "react-icons/ri";

const Messages = function () {
    return (
        <div className='messages'>
            <OutComingMassage />
            <OutGoingMessage />

        </div>)
}

export default Messages

const OutGoingMessage = function () {
    return <div className="msg-out-going">
        <div className="msg-container">
            <div className='msg-out-going-message'>
                Hey bro, how are you shlgh gsdkghsjkdg sdghlsdgs sjkdfhsd fsdkfhbsdkfsd dskfbkjdshfkjsdhfksjdh
                
            </div>
            <div className="msg-out-going-time">
                <div className='msg-out-view-check'>
                    {/* <RiCheckFill color='orange' size='16px' /> */}
                    <RiCheckDoubleLine color='orange' size='16px' />
                </div>
                02:20</div>
        </div>

    </div>
}

const OutComingMassage = function () {
    return <div className="msg-out-coming">
        <div className="msg-container">
            <div className='msg-out-coming-message'>
                Hey bro, how are you, sjdhlqsdh dsfklsjdflkqsd

            </div>
            <div className="msg-out-coming-time">02:20</div>
        </div>

    </div>
}