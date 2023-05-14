import {useGlobalContext} from './context';

const GroupTeamMembers = () => {
  const { groupTeamEmployees,handleGroupTeamEmployees } = useGlobalContext();
  return (
    <main className="container">
          <div className="row justify-content-center">
            <div className="col-8">
            {
                groupTeamEmployees.map((item) => {
                    return (
                        <div id={item.team} key={item.team} className="card mt-3" style={{cursor: "pointer"}} onClick={(event) => handleGroupTeamEmployees(event)}>
                           <h4 id={item.team} className="card-header text-secondary bg-white"> 
                                Team : {item.team}
                           </h4>
                            <div id={"collapse_" + item.team} 
                            className={item.collapsed == true?"collapse":""}>
                            <hr />
                             {
                                item.members.map((employData) => {
                                    return (
                                        <div className="mt-2">
                                            <h5 className="card-title mt-2">
                                               <span className="text-dark">Full name: {employData.fullName}</span>
                                            </h5>
                                            <p>Desiganation: {employData.designation}</p>
                                        </div>
                                    )
                                    
                                
                                })
                             }

                            </div>
                        </div>
                    )
                }) 
            }
            </div>
          </div>
        </main>
  )
}

export default GroupTeamMembers