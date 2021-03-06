
interface keypair {
	publicKey?: string
	privateKey?: string
	keyLength: string
	nikeName: string
	createDate: string
	email: string
	passwordOK: boolean
    verified: boolean
    publicKeyID: string
}
interface INewKeyPair {
    email: string
    keyLength: string
    nikeName: string
    password: string
}
interface install_config {
    alreadyInit: boolean
    multiLogin: boolean
    firstRun: boolean
    version: string
    newVersion?: string
    newVersionCheckFault?: boolean
    newVersionDownloadFault?: number 
    newVerReady?: boolean
    keypair: keypair
    salt?: Buffer
    iterations?: number
    keylen?: number
    localIpAddress: string []
    digest?: string
    QTGateConnectImapUuid: string
    freeUser: boolean
    account: string
    serverGlobalIpAddress: string
    serverPort: number
    connectedQTGateServer: boolean
    lastConnectType: number
}

interface imapConnect {
    imapServer: string
    imapUserName: string
    imapUserPassword: string
    imapPortNumber: string
    imapSsl: boolean
    imapIgnoreCertificate: boolean
}

interface newReleaseData {
    ver: string,
    RELEASE: string
}

interface IQtgateConnect {
    qtgateConnectImapAccount: string
    qtGateConnecting: number
    isKeypairQtgateConform: boolean
    error: number
}

interface IinputData extends imapConnect {
    account:string
    email: string
    smtpServer:string
    smtpUserName:string
    smtpUserPassword:string
    smtpPortNumber:string
    smtpSsl:boolean
    smtpIgnoreCertificate: boolean
    imapTestResult: number
    language: string
    clientFolder: string
    serverFolder: string
    imapCheck: boolean
    smtpCheck: boolean
    sendToQTGate: boolean
    timeZoneOffset: number
    randomPassword: string
    uuid: string
    canDoDelete: boolean
    clientIpAddress: string
}
interface IinputData_server extends IinputData {
    connectEmail: boolean;
    validated: boolean;
}
interface QTGateAPIRequestCommand {
	command: string
    myIpServer?: QTGate_DnsAddress []
    account?: string
	error: number
	requestSerial: string
    Args: any[]
    fingerprint?: string

}
interface iTransferData {
    startDate: Date
    transferDayLimit: number
    transferMonthly: number
    account: string
    resetTime: Date
    usedDayTransfer: number
    productionPackage: string
    usedMonthlyTransfer: number
    availableDayTransfer: number
    availableMonthlyTransfer: number
    usedMonthlyOverTransfer: number
    uploaded?: number
    downloaded?: number
    power: number
    timeZoneOffset: number
}
interface QTGate_DnsAddress {
	dnsName: string,
	ipv4: string,
	url: string
}


interface IConnectCommand {
    region: string
    account: string
    imapData: IinputData
    connectType: number
    transferData?: iTransferData
    error: number
    runningDocker?: string
    fingerprint: string
    gateWayIpAddress?: string
    gateWayPort?: number
    connectPeer?: string
    AllDataToGateway: boolean
    localServerPort: number
    localServerIp: string
}

interface QTGateCommand {
    account: string
    QTGateVersion: string
    command: string
    imapData?: IinputData
    language: string
    error: Error
    callback: any
    publicKey: string
}
declare namespace NodeJS {
    export interface Process extends NodeJS.EventEmitter {
        mas: boolean
    }
}
interface keyPair {
    publicKey: string;
    privateKey: string;
}
interface VE_IPptpStream {
    type?: string;
    buffer: string;
    host: string;
    port: number;
    cmd: number;
    ATYP: number;
    uuid?: string;
    length?:number;
    randomBuffer?: Buffer
    ssl: boolean
}

declare module "dns" {
    interface lookup_option {
        family?: number;
        hints?: number;
        all?: boolean
    }
    interface address {
        address: string;
        family: number;
        expire: number;
        connect?: number []
    }
    export function lookup ( domain: string, option: lookup_option , callback: ( err: Error, address: address[] ) => void ): string;

}

interface feedBackData {
    attachImagePath: string
    attachedLog: string
    comment: string
    date: string
    attachImage?: string
}

interface dnsAddress {
	address: string
	family: number
	expire: Date
	connect: Date []
}
interface domainData {
	dns: dnsAddress[]
	expire: number
}