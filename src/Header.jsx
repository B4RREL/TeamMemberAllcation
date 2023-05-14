import { useGlobalContext } from "./context"

const Header = () => {
  const { team,employees } = useGlobalContext();
  var teamMemberCount =  employees.filter((employee) => employee.teamName === team).length;
  return (
    <header className="container">
          <div className="row justify-content-center">
            <div className="col-8">
            <h1>Team Members Allocation</h1>
            <h3>{team} has  
              { (teamMemberCount == 1)?  ' '+teamMemberCount+' Member' : ' '+teamMemberCount+' Members' }</h3>
            </div>
          </div>
        </header>
  )
}

export default Header