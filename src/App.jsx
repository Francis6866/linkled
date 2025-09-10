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
import Protected from "./components/Protected"


function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<SignUpForm />}/>
          <Route path="signIn" element={<SignInForm />}/>

          {/* Sign in */}
          
          <Route path="main" element={<OverallOut />}>
            <Route index element={
              <Protected>
                <HomeLayout2 />
              </Protected>
            }/>
            <Route path="network" element={
              <Protected>
                <NetworkLayout />
              </Protected>
            }/>
            <Route path="jobs" element={
              <Protected>
                <JobsLayout /> 
              </Protected>
            }/>
            <Route path="message" element={
              <Protected>
                <MessageLayout />
              </Protected>
             }/>
            <Route path="notify" element={
              <Protected>
                <NotifyLayout />
              </Protected>
            }/>
          </Route>
      </Routes>
    </>
  )
}

export default App
