import './search.css'

const Search = () => {
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
                <div className={'sr-panier'}></div>
            </div>
            <div className={'search-right'}></div>
        </div>
    )
}

export default Search
