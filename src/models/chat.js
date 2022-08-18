import {v4 as uuidv4} from 'uuid';

class Chat{
    constructor(data){
        this.id = uuidv4();
        this.sessionID = data.sessionID;
        this.userID = data.userID;
        this.moderatorID = data.moderatorID;
        this.moderatorMessage = data.moderatorMessage;
        this.status = isValidStatus(data.status);
        this.dateMessage = data.dateMessage;
    }

    static isValidStatus(status){
        return status === 'true' || status === 'false';
    }

}

export default Chat;