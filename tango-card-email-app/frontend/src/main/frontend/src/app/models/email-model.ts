export class EmailModel{
    dateSent: Date;
    fromEmail: string;
    toEmail: string;
    content: string;
    sent: boolean;
    mailGunErrorCode: number;
    sendGridErrorCode: number;
}