class Player{
    constructor(name,id,color,active=false){
        this.name=name;
        this.id=id;
        this.color=color;
        this.active=active;
        this.token=this.createTokens(21); //21 is the half of the tokens available 
    }
    //creating token objects for the player
    createTokens(num){
        const tokens=[];
        for(let i=0;i<num;i++){
            let token=new Token(i,this);
            tokens.push(token);
        }
        return tokens;
    }
}