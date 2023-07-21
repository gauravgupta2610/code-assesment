import { useNavigate } from "react-router-dom"
import Header from "../common/header";
import { useState } from "react";


const User = () => {
    const [module, setModule] = useState('welcome')
    const currentrole = localStorage.getItem('loginRole')
    const navigate = useNavigate()

    const PageData = () => {
        switch (module) {
            case 'welcome':
                return 'You are logged in as User';
            case 'dashboard':
                return 'User Details';
            case 'userPage':
                return 'User Condition Data'
        }
    }
    return (
        <div className='adminPage'>
            <Header navigate={navigate} setModule={setModule} module={module} currentrole={currentrole} />
            <div className="adminBody">
                {(PageData)()}
            </div>
        </div>
    )
}

export default User;