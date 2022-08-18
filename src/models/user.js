import {v4 as uuidv4} from 'uuid'
import bycrypt from 'bcryptjs'

class User{
    constructor(name, email, password, status, isAdmin){
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = passwordHash(password);
        this.status = isValidStatus(status)
        this.isAdmin = isValidAdmin(isAdmin)

    }

    static passwordHash(password){
        return bycrypt.hash(password, bycrypt.genSaltSync(10));
    }

    static isValidStatus(status){
        return status === 'true' || status === 'false';
    }

    static isValidAdmin(isAdmin){
        return isAdmin === 'true' || isAdmin === 'false';
    }
}

export default User;