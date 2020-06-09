/* eslint-disable no-console */
/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prefer-rest-params */

type logArgs = [(message?: any, ...optionalParams: any[]) => void, Console | null, ...any[]];

const log = (args: logArgs) => Function.prototype.bind.call(...args);

class DevLogger {
    get log() {
        const args: logArgs = isDev ? [ console.log, console, ...arguments ] : [ () => {}, null ];
        return log(args);
    }
}

export default new DevLogger();