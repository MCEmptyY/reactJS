
import { Link } from "react-router-dom";
import { STAFFS } from "./staffs/staffs";


const DetailsStaff = () => {


  const Stafflist = STAFFS.map(staff => {
  return(
        <div className="col-lg-2 col-md-4 col-sm-6 g-4">
          <div className="card mt-3 text-center"  style={{background:"#f45632" }}>
              <Link to={`/staff/${staff.id}`} key={staff.id}>
                <img src={require('./staffs/staff.png')} alt="..." className="w-50"/>
                <div className="card-title">{staff.name}</div>
              </Link>
          </div>
        </div>
    )
  })

  return (
    <>
      <div className="container">
        <div className="row">{Stafflist}</div>
      </div>
      
    </>
  )
}

  
  


export default DetailsStaff