import './App.css'
import Employees from './Employees'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import NotFound from './NotFound'
import GroupTeamMembers from './GroupTeamMembers'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <>
    <Router>
      
    <Nav/>
     <Header/>
       <Routes>
         <Route path='/' element={<Employees/>}>
         </Route>
         <Route path='/GroupTeamMembers' element={<GroupTeamMembers/>}>
         </Route>
          <Route path='*' element={<NotFound/>}>
         </Route>
       </Routes>
      <Footer/>
    </Router>
    </>
  )
}
