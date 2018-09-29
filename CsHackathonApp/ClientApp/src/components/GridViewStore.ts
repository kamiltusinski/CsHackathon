import { observable, action } from 'mobx';

import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';

export class GridViewStore {
    private connection: HubConnection;
    @observable msg: string[] = [];

    constructor() {
        this.connection = new HubConnectionBuilder()
            .withUrl('https://localhost:5001/basicHub')
            .configureLogging(LogLevel.Information)
            .build();

        this.connection.on('ReceiveMessage', (user, message) => this.onReceiveMessage(user, message));
    }

    @action start() {
        this.msg = [];

        this.connection.start().catch(err => console.error(err.toString()));
    }

    @action onReceiveMessage(user: string, message: string) {
        const encodedMsg = `${user} says ${message}`;
        this.msg.push(encodedMsg);
    }

    sendMsg(user: string, message: string) {
        this.connection.invoke('SendMessage', user, message).catch(err => console.error(err.toString()));
    }
}

export default new GridViewStore();
