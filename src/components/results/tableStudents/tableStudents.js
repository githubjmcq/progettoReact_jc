import { useState, useEffect } from 'react';
import { listRepos } from '../../api/listRepos';
import './table.css';

export const TableStudents = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const popolateRepos = async () => {
            const dataRepo = await listRepos();
            setRepos(dataRepo);
            console.log("repos: ",repos);
        }
        popolateRepos();
    }, []);

    return (
        <div className="tableee">
            <table>
                <tr className="head">
                    <th>Cognome</th>
                    <th>Nome</th>
                    <th>Utente_github</th>
                    <th>Nome_repo</th>
                    <th>idRepo</th>
                    <th>Data_creazione</th>
                    <th>Ultimo_aggiornamento</th>
                </tr>
                {repos.map((repo) => {
                    return  <tr>
                                <td>{repo.surname}</td>
                                <td>{repo.name}</td>
                                <td>{repo.login}</td>
                                <td>{repo.repoName}</td>
                                <td>{repo.idRepo}</td>
                                <td>{repo.creationDate}</td>
                                <td>{repo.lastUpdate}</td>
                            </tr>
                })}

            </table>
        </div>
    )
}