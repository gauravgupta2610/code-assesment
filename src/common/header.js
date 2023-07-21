import { humanize } from "../utils/helper"
import Logout from "./logout"


const Header = ({ navigate, currentrole, setModule, module }) => {

    const getModuleCss = {
        backgroundColor: 'white',
        color: 'rgb(99, 56, 128, 0.5)' ,
        borderTop:  '5px solid rgb(99, 56, 128, 0.5)',
    }

    return (
        <div className='adminTab'>
            <div 
                onClick={() => setModule('welcome')} 
                style={(module === 'welcome') ? getModuleCss : {}}
            >
                Welcome
            </div >
            <div 
                onClick={() => setModule('dashboard')}
                style={(module === 'dashboard') ?  getModuleCss : {}}
            >
                Dashboard
            </div >
            {currentrole === 'user' && (
                <div 
                    onClick={() => setModule('userPage')} 
                    style={(module === 'userPage') ? getModuleCss : {}}
                >
                    {humanize(`${currentrole} Page`)}
                </div>
            )}
            <Logout navigate={navigate}/>
        </div>
    )
}

export default Header;