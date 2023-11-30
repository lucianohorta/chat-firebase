import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContainer, Body, Header, Main, HeaderTitle, ButtonLogin, ButtonLogout, Section, StyledContent, InputMsg, Form, StyledIcon, ButtonSubmit, Message } from './css/styles';

// import { v4 as uuidv4 } from 'uuid';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyD-60aPR1PUa4DR-ZONIsnN8h-6DCCVSIs",
  authDomain: "chat-f4ebd.firebaseapp.com",
  projectId: "chat-f4ebd",
  storageBucket: "chat-f4ebd.appspot.com",
  messagingSenderId: "1065881182843",
  appId: "1:1065881182843:web:5ce3820c84bce6fc0138de"
});

//const app = initializeApp(firebaseConfig);  // Initialize Firebase

const auth = firebase.auth();
const firestore = firebase.firestore();




function App() {

  const [user] = useAuthState(auth);

  return (
    <AppContainer>
      <Body className="App">
        <Header>
          <HeaderTitle>React Chat w/ Firebase</HeaderTitle>
          <SignOut />
        </Header>

        <Section>
          {user ? <ChatRoom /> : <SignIn />}
        </Section>

      </Body>
    </AppContainer>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });   // this line to force google to ALWAYS show the sign in dialog
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <ButtonLogin className="sign-in" onClick={signInWithGoogle}>Sign in with Google</ButtonLogin>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <ButtonLogout className="sign-out" onClick={() => auth.signOut()}>Sign Out</ButtonLogout>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    const newMessage = {
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      //id: uuidv4(), // Generate a unique ID for each message
    };
  
    await messagesRef.add(newMessage);

    //LOG EACH MESSAGE ID:
    // const docRef = await messagesRef.add(newMessage);
    // console.log('Document ID:', docRef.id);

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <StyledContent className="content">

      <Main>
        {messages && messages.map(msg => (
          <ChatMessage key={msg.id} message={msg} />
          // <ChatMessage key={msg.id || uuidv4()} message={msg} />
        ))}
        <span ref={dummy}></span>
      </Main>

      <Form onSubmit={sendMessage}>
        <InputMsg value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type a message" />
        <ButtonSubmit type="submit" disabled={!formValue}>
          <StyledIcon>
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
          </StyledIcon>
        </ButtonSubmit>
      </Form>

    </StyledContent>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <Message className={`message ${messageClass}`}>
      <img src={photoURL || 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='} alt="photoURL" />
      <p>{text}</p>
    </Message>
  </>)
}


export default App;