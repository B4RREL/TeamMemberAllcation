import { useGlobalContext } from "./context"
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employees = () => {
  const { employees,team,handleSelectedTeamChange,handleTeamMembers } = useGlobalContext();
 
  return (
    
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
              <select className="form-select form-select-lg" value={team} onChange={(event) => handleSelectedTeamChange(event)}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
            </div>
            </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className='col-8'>
         <div className='card-collection'>
           {
             employees.map((employee) => {
               return (
                 <div  id={employee.id} key={employee.id} className={
                   employee.teamName === team? "card m-2 standout" : "card m-2"
                 } style={{cursor: "pointer"}} onClick={() => handleTeamMembers(employee.id)}>
                   {
                     employee.gender === 'male'? <img src={maleProfile} alt="img"></img>
                                               : <img src={femaleProfile} alt="img"></img>
                   }
          <div className="card-body">
            <h5 className="cart-title">Full Name: <b>{employee.fullName}</b></h5>
            <p className="card-text">Desiganation: <b>{employee.designation}</b></p>
          </div>
        </div>
               )
             })
           }
         </div>
        </div>
      </div>
    </main>
    
  )
}

export default Employees