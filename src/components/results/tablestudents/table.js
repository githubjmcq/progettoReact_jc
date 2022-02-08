import { useState, useEffect } from 'react';
import { listRepos } from '../../api/listRepos';
import './table.css';

export const TableStudents = () => {
    const [repos, setRepos] = useState=([]);

    useEffect(() => {
        const popolateRepos = async () => {
            const dataRepo = await listRepos();
            setRepos(dataRepo);
        }
        popolateRepos();
    }, []);

    return(
        <div className="tableee">
            <table>
                <tr className="head">
                    <th>Cognome</th>
                    <th>Nome</th>
                    <th>Utente_github</th>
                    <th>Nome_repo</th>
                    <th>Totale_Commit</th>
                    <th>Data_creazione</th>
                    <th>Ultimo_aggiornamento</th>
                </tr>
                <tr>
                    <td>Condori</td>
                    <td>Josue</td>
                    <td>githubjmcq</td>
                    <td>condori-josue-github</td>
                    <td>2</td>
                    <td>10/01/2022</td>
                    <td>02/02/2022</td>
                </tr>
            </table>
        </div>
    )
}