import{v4 as uuidv4} from 'uuid';
import bycrypt from 'bcryptjs';

class Client{
    constructor(name, email, password)
    {
        this.id = uuidv4();
        this.name = name;
        this.email = email; 
        this.password = createHash(password);
    }

    static createHash(password){
        return bycrypt.hash(password, bycrypt.genSaltSync(10));
    }
}

export default Client;