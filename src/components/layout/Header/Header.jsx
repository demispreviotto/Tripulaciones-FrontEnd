import React from 'react'
import Navbar from '../../common/Navbar/Navbar'
import Hamburguer from '../../../assets/Hamburguer'
import Calendar from '../../../assets/Calendar'

const Header = () => {
    return (
        <header>
            <div>
                <Hamburguer height={"26px"} />
                <Calendar />
                {/* <span>SubHeader1/</span>
                <span>SubHeader2</span> */}
            </div>
            {/* <Navbar /> */}
        </header>
    )
}

export default Header