import React, {Component} from 'react';
import './results.css';
import { Repo } from "./repo/repo";
import { TableStudents } from "./tablestudents/table.js";

export class Results extends Component {
    render(props) {
        return(
            <div className='body'>
                <Repo totRepos="10"/>
                <TableStudents />
            </div>
        )
    }
}