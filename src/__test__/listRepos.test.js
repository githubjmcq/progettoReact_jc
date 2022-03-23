import { listRepos } from '../components/api/listRepos';
import mockAxios from "jest-mock-axios";
import axios from 'axios';
import { BASE_URL, fetchUsrs } from 'utils'; 

describe('repos_pieno', () => {
    jest.mock("axios");

    // happy path
    it('chiamata', async () => {
        let arrayTestStuent = [];
        arrayTestStuent = await listRepos();
        let arrayTestStuentNumber = arrayTestStuent.length;
        //let BASE_URL = 'https://github-funtion-ttf.azurewebsites.net/api/httpstudentsrepos';
        expect(arrayTestStuentNumber).toBeGreaterThan(1);

    });
    // edge cases/exeptions
    it('risultato_undefined', () => {
        let arrayTestStuent = [];
        arrayTestStuent = listRepos();
        let numArray = arrayTestStuent.length;
        expect(numArray).to
    });

    it('rete_in_down', () => {
            let arrayTestStuent = [];
            arrayTestStuent = listRepos();
            let numArray = arrayTestStuent.length;
            expect(numArray).not.toBe(1);

    });

    it('error_500', () => {

    });

})