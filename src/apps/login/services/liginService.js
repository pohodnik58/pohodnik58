import { post } from '../../../helpers/httpClient';

export default function loginAsync({ login, password }) {
    const data = {
        login,
        pass: password
    };

    return post('ajax/login_start.php', data);
}
