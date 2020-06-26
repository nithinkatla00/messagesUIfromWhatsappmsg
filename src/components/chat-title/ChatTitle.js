import React from 'react';

// import TrashIcon from '../controls/icons/trash-icon/TrashIcon';

import './ChatTitle.scss';

const ChatTitle = () => {
    let chatTitleContents = null;
    chatTitleContents = (
        <>
            <span>Sai Chandu</span>
        </>
        );
    return (
        <div id="chat-title">
            { chatTitleContents }
        </div>
    );
}

export default ChatTitle;