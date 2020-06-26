import React from 'react';
import { data } from "./data";
import ChatShell from "./chatShell";
import './mainshell.scss'
import ConversationSearch from './conversation/conversation-search/ConversationSearch';
// import NoConversations from './conversation/no-conversations/NoConversations';
import ConversationList from './conversation/conversation-list/ConversationList';
import NewConversation from './conversation/new-conversation/NewConversation';
import ChatTitle from './chat-title/ChatTitle';
import ChatForm from './chat-form/ChatForm';


const mainShell = () =>{
    return(
    <div id="chat-container">
        <ConversationSearch conversations={data}/>
        <ConversationList />
        <NewConversation />
        <ChatTitle />
        <ChatShell data={data}/>
        <ChatForm />
    </div>
    );
}
export default mainShell;