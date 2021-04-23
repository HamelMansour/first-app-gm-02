import './navbar.css'

const Navbar = () => {
    return (
        <div className={'navbar-main'}>
            <div className={'navbar-left'}></div>
            <div className={'navbar-content'}>
                <div className={'navbar-items-left'}>
                    <div className={'navbar-first'}>
                        <span>Appelez-nous au : 01 30 95 56 10.</span>
                    </div>
                    <div className={'navbar-secend'}>
                        <span>Livraison offerte en point de retrait dès 59€ *</span>
                    </div>
                </div>
                <div className={'navbar-items-right'}>
                    <span>Blog</span>
                    <span>Contacter-nous</span>
                    <span>Connexion</span>
                </div>
            </div>
            <div className={'navbar-right'}></div>
        </div>
    )
}
export default Navbar
