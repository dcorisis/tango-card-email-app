export class EmailModel{
    id: number;
    dateSent: Date;
    fromEmail: string;
    toEmail: string;
    content: string;
    sent: boolean;
    mailGunErrorCode: number;
    sendGridErrorCode: number;
}