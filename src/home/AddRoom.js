import Component from '../Component.js';
import { auth, roomsRef } from '../services/firebase.js';

class AddChat extends Component {

    render() {

        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();

            // const formData = new FormData(form);

            // const nameOfRoom = formData.get('link');

            const roomRef = roomsRef.push();

            const room = {
                key: roomRef.key,
                owner: auth.currentUser.uid,
                name: input.value,
            };

            roomRef.set(room).then(() => {
                form.reset();
            });
        });
        
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <label>Add Chat Room!
                    <input type="text" name="link">
                </label>
            </form>
        `;
    }
}

export default AddChat;