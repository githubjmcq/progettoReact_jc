import { Search } from '../search/search';
//import { Select } from '../select/select';
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