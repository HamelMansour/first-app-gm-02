import './search.css'
import {AiFillCaretDown, FaShoppingBasket} from "react-icons/all";

const Search = () => {
    let retation = 'rotate(0)';
    const chageRetation = () => {
        retation = 'rotate(20deg)'
        document.getElementById('icon').style.transform = retation
    }
    return (
        <div className={'search-main'}>
            <div className={'search-left'}></div>
            <div className={'search-content'}>
                <div className={'sr-logo'}>
                    <img
                        src={'https://www.medicament.com/img/medicamentcom-vente-en-ligne-de-m%C3%A9dicaments-logo-1502891216.jpg'}/>
                </div>
                <div className={'sr-input'}>
                    <input placeholder={'Chercher'}/>
                </div>
                <div className={'sr-panier'}>
                    <div className={'sr-panier-content'}>
                        <FaShoppingBasket/>
                        <span>Panier</span>
                        <AiFillCaretDown/>
                    </div>
                </div>
            </div>
            <div className={'search-right'}></div>
        </div>
    )
}

export default Search
