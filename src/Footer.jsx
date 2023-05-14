const Employees = () => {
  var today = new Date();
  return (
   <footer className="container mt-3">
             <div className="row justify-content-center">
                <div className="col-8"> 
                    <h4>Team Member Allocation - App {today.getFullYear()}</h4>
                </div>
             </div>
           </footer>
  )
}

export default Employees