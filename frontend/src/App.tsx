// App.tsx
import React, { useState } from "react";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import ChatsPage from "./pages/ChatsPage";

interface User {
  username: string;
  secret: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const handleAuth = (user: User) => {
    setUser(user);
  };

  if (!user) {
    return <AuthPage onAuth={handleAuth} />;
  } else {
    return <ChatsPage user={user} />;
  }
};

export default App;
