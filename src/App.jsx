import { ChatEngine } from 'react-chat-engine';
import { ChatFeed } from './components/ChatFeed';
import { LoginForm } from './components/LoginForm';
import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
      height='100vh'
      projectID='64ff8d2c-b85e-4e05-a83c-1ae0aaa490a1'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
