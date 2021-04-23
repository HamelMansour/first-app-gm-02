import './login.css'
import loginImg from '../../assets/images/paypal-logo-129x32.svg'

const Login = () => {

    const hello = () => {
        alert('hello')
    }
    return (
        <div className="container">
            <div className="card">
                <div onClick={hello} className="logo">
                    <img src={loginImg} alt="Logo paypal"/>
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Email ou némuro de mobile"/>
                    <input type="password" placeholder="Mot de passe"/>
                    <div classNameName="btn next">
                        <span>Suivant</span>
                    </div>
                    <div className="divider">
                        <div className="left"></div>
                        <span>OU</span>
                        <div className="right"></div>
                    </div>
                    <div className="btn register-btn">
                        <span>Ouvrir un compte</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
