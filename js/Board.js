class Board{
   constructor(){
       this.row=6;
       this.columns=7;
       this.spaces=this.createSpaces();
   }
//Generate a 2D array of space object
   createSpaces(){
        const spaces=[];
        for(let x=0;x<this.columns;x++){
            const column=[];
            for(let y=0;y<this.row;y++){
                const space=new Space(x,y);
                column.push(space);
            }
            space.push(column);
        }
        return spaces;
   }
}