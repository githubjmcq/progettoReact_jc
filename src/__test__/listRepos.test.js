import { listRepos } from '../components/api/listRepos';
describe('repos_pieno', () => {
    // happy path
    it('verifica_struttura_risultato_corretto', async () => {
        let arrayTestStuent = [];
        arrayTestStuent = await listRepos();
        let numArray = arrayTestStuent.length;
        expect(numArray).toBeGreaterThan(1);

    });
    // edge cases/exeptions
    it('risultato_undefined', () => {
        let arrayTestStuent = [];
        arrayTestStuent = listRepos();
        let numArray = arrayTestStuent.length;
        expect(numArray).toEqual(undefined);
    });

    it('rete_in_down', () => {

    });

    it('error_500', () => {

    });

})