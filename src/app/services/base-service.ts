export class ServiceBase {

    private Path = 'https://localhost:44323/api/';
    public get path(): string {
        return this.Path;
    }
    public set path(v: string) {
        this.Path = v;
    }

}