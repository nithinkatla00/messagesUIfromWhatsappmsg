import React from 'react';
import Message from './message/Message';
import './chatShell.css'

const chatShell = (props) =>{
    return(
        <div className="chat-message-list">
        {
            props.data.map((res,id) => {
                return(
                    <div key={id}>
                        <h4>- - - -{res.date}- - - -</h4>
                        {
                            res.messages.map((dat,id) => {
                            return(
                                <div key={id}>
                                    <h5>{dat[1]}</h5>
                                {
                                    dat[0].map((msg,id) => (
                                        <div key={id}>
                                        <Message isMyMessage={msg.sender=== 'Nithin00'?true:false} message={msg.message}/>
                                        {/* // <h5 key={id}>{msg.sender}--{msg.message}</h5> */}
                                        </div>
                                    ))
                                }
                                </div>
                            );
                            })
                        }
                    </div>
                )
            })
        }
        </div>
    );
}
export default chatShell;