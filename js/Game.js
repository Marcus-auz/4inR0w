class Game{
    constructor(){
        this.boards=new Board();
        this.ready=false;
        this.players=this.createPlayers();
    }
    createPlayers(){
        const players=[new Player('Player 1',1,'#e15258',true),
                       new Player('Player 2',2,'#e59a13')];

        return players;
    }
}