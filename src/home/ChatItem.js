import Component from '../Component.js';
import ChatList from './ChatList.js';
import { roomsRef } from '../services/firebase.js';

class ChatItem extends Component {

    render() {
        const dom = this.renderDOM();
        const chat = this.props.chat;
        const button = dom.querySelector('button');

        button.addEventListener('click', () => {
            roomsRef.child(chat.key).remove();

        });

        return dom;

    }
    renderTemplate() {
        const chat = this.props.chat;

        return /*html*/`
            <li>
                <a href="./chat.html?key=${chat.key}">${chat.name}</a>
                <button>X</button>
            </li>
        `;
    }
}
export default ChatItem;