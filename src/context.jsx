import React from "react";
import { useContext,useState, useEffect } from "react";



const AppContext = React.createContext();



 

const AppProvider = ({children}) => {

  
   const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employeesList")) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);
  
  const [team,setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")));

  const[groupTeamEmployees,setGroupData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter((employee) => employee.teamName === "TeamA");
    var teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: team === "TeamA"?false:true
    };
    teams.push(teamA);

    var teamBMembers = employees.filter((employee) => employee.teamName === "TeamB");
    var teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: team === "TeamB"?false:true
    };
    teams.push(teamB);

    var teamCMembers = employees.filter((employee) => employee.teamName === "TeamC");
    var teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: team === "TeamC"?false:true
    };
    teams.push(teamC);

    var teamDMembers = employees.filter((employee) => employee.teamName === "TeamD");
    var teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: team === "TeamD"?false:true
    };
    teams.push(teamD);

    return teams;
  };

  const handleGroupTeamEmployees = (event) => {
      const transformGroupData = groupTeamEmployees.map((gtemployee) => (gtemployee.team === event.currentTarget.id)?{...gtemployee,collapsed: !gtemployee.collapsed}:gtemployee);

    setGroupData(transformGroupData);
    setTeam(event.currentTarget.id);
};

  


  const handleSelectedTeamChange = (event) => {
    setTeam(event.target.value)
  };

  const handleTeamMembers = (id) => {
    const transformCondition = employees.map((employee) => (employee.id === parseInt(id))? (employee.teamName === team)? 
      {...employee,teamName: ''}: {...employee,teamName: team}: employee);
    setEmployees(transformCondition);
  };

  useEffect(() => {
    localStorage.setItem("employeesList",JSON.stringify(employees))
  },[employees])

   useEffect(() => {
    localStorage.setItem("selectedTeam",JSON.stringify(team))
  },[team])
  
return (
     <AppContext.Provider  value={{employees,team,handleSelectedTeamChange,handleTeamMembers,groupTeamEmployees,handleGroupTeamEmployees}}>
  
  {children}
  
  </AppContext.Provider>
   )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext,AppProvider } 
