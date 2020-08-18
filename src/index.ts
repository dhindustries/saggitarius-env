
declare let process: {
    platform?: string,
    cwd?: () => string,
    env?: Record<string, string>,
} | undefined;

export const Environment: Record<string, string> = (process && process.env) || {};

export class Env {

    public static get Cwd(): string {
        return (process && process.cwd()) || "/";
    }

    public static get Vars(): Record<string, string> {
        return Environment;
    }

    public static isWindows(): boolean {
        return process && process.platform === "win32";
    }

    public static isOSX(): boolean {
        return process && process.platform === "darwin";
    }
}
