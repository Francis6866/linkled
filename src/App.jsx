import { Route, Routes } from "react-router"
import Header from "./components/header/Header"
import HomeLayout2 from "./layouts/HomeLayout2"
import JobsLayout from "./layouts/JobsLayout"
import MessageLayout from "./layouts/MessageLayout"
import NetworkLayout from "./layouts/NetworkLayout"
import NotifyLayout from "./layouts/NotifyLayout"
import SignInForm from "./pages/signIn/SignInForm"
import SignUpForm from "./pages/signUp/SignUpForm"
import OverallOut from "./layouts/OverallOut"


function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<SignUpForm />}/>
          <Route path="signIn" element={<SignInForm />}/>

          {/* Sign in */}
          <Route path="main" element={<OverallOut />}>
            <Route index element={<HomeLayout2 />}/>
            <Route path="network" element={<NetworkLayout />}/>
            <Route path="jobs" element={<JobsLayout /> }/>
            <Route path="message" element={<MessageLayout /> }/>
            <Route path="notify" element={<NotifyLayout />}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
