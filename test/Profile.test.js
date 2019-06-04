import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('Profile Component');

test('renders with full user props', assert => {
    // arrange
    const user = {
        displayName: 'Claire Cassidy',
        photoURL: 'https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg'
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div class="profile">
            <img src="https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg">
            <span>Claire Cassidy</span>
            <button>Sign Out</button>
        </div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});

test('renders with no image', assert => {
    // arrange
    const user = {
        displayName: 'Claire Cassidy',
        photoURL: null
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div class="profile">
            <img src="./assets/avatar.png">
            <span>Claire Cassidy</span>
            <button>Sign Out</button>
        </div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});

test('renders with no user', assert => {
    // arrange
    const user = null;
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div></div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});