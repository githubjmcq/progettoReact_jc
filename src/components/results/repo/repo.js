import { Search } from '../search/search';
import './repo.css';

export const Repo = (props) => {
    return(
        <>
        <div className='repo'>
            
            <h5>Totale Repos : {props.totRepos}</h5>

            <Search />

        </div>
        </>
    )
}