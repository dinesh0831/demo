class movie{
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }
    setTitle(title){
        this.title=title;
    }
    setStudio(studio){
        this.studio=studio;
    }
    setRating(rating){
        this.rating=rating;
    }
    
    getTitle(title){
        console.log(this.title)
    }
    getStudio(studio){
        console.log(this.studio);
    }
    getRating(rating){
        console.log(this.rating);
    }

}
var ans=new movie("Casino Royale","Eon Productions","PG13");

ans.getRating();
ans.getStudio();
ans.getTitle();
