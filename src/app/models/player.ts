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
    public photo?: string
  ) {  }
}
