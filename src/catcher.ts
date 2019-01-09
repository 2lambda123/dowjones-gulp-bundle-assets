import { Transform, TransformCallback } from "stream";
import { LogLevel } from "./config";

/**
 * All this does is collect all stream data and once all read resolves a promise with the collected chunks.
 * TODO Handle when the stream source has no chunks to pass
 */
export class Catcher extends Transform {
    /**
     * Promise that will be resolved with the stream contents once they've been collected.
     */
    public Collected: Promise<any[]>;

    /**
     * Holds caught stream content.
     */
    private Results: any[] = [];

    /**
     * Logger function.
     */
    private Logger: (value: string, level: LogLevel) => void;

    /**
     * Resolver for promise, may not be immeditately set.
     */
    private Resolve?: (value?: any[] | PromiseLike<any[]>) => void;
    
    constructor(logger: (value: string, level: LogLevel) => void) {
        super({
            objectMode: true
        });

        this.Logger = logger;

        // Set promise
        this.Logger("Creating promise with external completion source", LogLevel.Silly);
        this.Collected = new Promise<any[]>(resolve => {
            this.Resolve = resolve;
        });
    }

    /**
     * Collects incoming chunks.
     * @param chunk Incoming chunk to catch.
     * @param encoding Its encoding, if applicable.
     * @param callback Callback used to indicate method completion.
     */
    _transform(chunk: any, encoding: string, callback: TransformCallback): void {
        this.Logger("Catching a chunk", LogLevel.Silly);
        this.Results.push(chunk);
        callback();
    }

    /**
     * Resolves collection promise.
     * @param callback Callback used to indicate method completion.
     */
    _flush(callback: TransformCallback): void {
        this.Logger("Starting resolution of catcher promise", LogLevel.Silly);
        const resolver = () => {
            if (this.Resolve) {
                this.Resolve(this.Results);
                this.Logger("Catcher promise has resolved", LogLevel.Silly);
                callback();
            }
            else {
                this.Logger("Catcher promise not yet ready, waiting 5ms", LogLevel.Silly);
                setTimeout(resolver, 5);
            }
        };
        resolver();
    }
}