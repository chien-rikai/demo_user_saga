import ListUser from './list_user';
import FormCreate from './form_create';
import SearchUser from './search_user';

function User(){
    return(
        <>
            <FormCreate/>
            <SearchUser/>
            <ListUser/>
        </>
    )
}

export default User;