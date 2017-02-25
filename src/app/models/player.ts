export class Player {
  constructor(
    public name: string,
    public grade: string,
    public position: string,
    public number: number,
    public email: string,
    public height: string,
    public school: any ={},
    public season: any ={},
    public region: any ={},
    public seasonshistory: any =[],
    public regionshistory: any =[],
    public gameshistory: any =[],
    public schoolhistory: any=[],
    public photo?: string
  ) {  }
}
