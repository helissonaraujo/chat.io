import {v4 as uuidv4} from 'uuid';

class Sessiion{
    constructor(url, clientId, moderation, status){
        this.id = uuidv4();
        this.clientId = clientId;
        this.moderation = isValidModeration(moderation);
        this.status = isValidStatus(status);
    }

    static isValidModeration(moderation){
        return moderation === 'true' || moderation === 'false';
    }

    static isValidStatus(status){
        return status === 'true' || status === 'false';
    }
}

export default Session;