import React from 'react'
import NavbarHome from './navbarHome'
import NavbarNotification from './navbarNotif'
import NavbarProfile from './navbarProfile'


class Navbar extends React.Component {
    loadNavbar() {
        switch (this.props.type) {
            case 'home' :
                return <NavbarHome/>;
            case 'notification' :
                return <NavbarNotification/>
            case 'profile' :
                return <NavbarProfile/>
            default:
                return <NavbarHome/>
        }
    }

    render () {
        return (
                <div>
                    {this.loadNavbar()}
                </div>
        )
    }
}

export default Navbar