export class Application {
  constructor(
    public schoolid: string,
    public schoolname: string,
    public managername: string,
    public captainname: string,
    public teamname: string,
    public managerphone: string,
    public captainphone: string,
    public description: string,
    public seasonid: string,
    public regionid: string,
    public players: any=[],
    public photo?: string
  ) {  }
}
