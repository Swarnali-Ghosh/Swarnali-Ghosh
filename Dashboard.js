import React,{useState} from 'react'
import './Dashboard.css';
import {Link} from 'react-router-dom';
const Sidebar = () => {
  const [isMobileDashboard,setIsMobileDashboard] = useState(false);
  return (
      
    <>
    <nav className='dashboardnav'>   
           <ul className={isMobileDashboard ? 'setnavbar2mobile' :'navbar2'}
           onClick={()=>setIsMobileDashboard(false)}>
             <Link to='/admin/products' className='dashboardLink'><li className='dashboardli'>Products</li></Link>
             <Link to='/admin/product/new' className='dashboardLink'><li className='dashboardli'>Create Product</li></Link>
             <Link to='/admin/orders' className='dashboardLink'><li className='dashboardli'>Orders</li></Link>
             <Link to='/admin/users' className='dashboardLink'><li className='dashboardli'>Users</li></Link>
           </ul>
           <button className='dashboardbtn' onClick={()=>setIsMobileDashboard(!isMobileDashboard)}
           >
            {isMobileDashboard ? <i className="fadash fa-solid fa-square-xmark"></i> : <i className="fadash fa-solid fa-bars"> Dashboard</i> }
           </button>
        
    </nav>
    </>
  )
}

export default Sidebar
