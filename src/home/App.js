import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddChat from './AddRoom.js';
import ChatList from './ChatList.js';
import { roomsRef } from '../services/firebase.js';

class App extends Component {

    render() {

        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addChat = new AddChat();
        dom.appendChild(addChat.render());

        const chatList = new ChatList({ chatRooms: [] });
        main.appendChild(chatList.renderDOM());

        roomsRef.on('value', snapshot => {
            const value = snapshot.val();
            const chatRooms = value ? Object.values(value) : [];
            chatList.update({ chatRooms });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;