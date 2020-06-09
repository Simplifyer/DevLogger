type logArgs = [(message?: any, ...optionalParams: any[]) => void, Console | null, ...any[]];

const log = (args: logArgs): void => Function.prototype.bind.call(...args);

class DevLogger {
    isDev: boolean;

    constructor(isDev: boolean) {
        this.isDev = isDev;
    }

    get log(): void {
        const args: logArgs = isDev ? [ console.log, console, ...arguments ] : [ () => {}, null ];
        return log(args);
    }

    get error(): void {
        const args: logArgs = isDev ? [ console.error, console, ...arguments ] : [ () => {}, null ];
        return log(args);
    }

    get logInProd():void {
        const args: logArgs = !isDev ? [ console.log, console, ...arguments ] : [ () => {}, null ];
        return log(args);
    }

    get errorInProd(): void {
        const args: logArgs = !isDev ? [ console.error, console, ...arguments ] : [ () => {}, null ];
        return log(args);
    }
}

export default DevLogger;