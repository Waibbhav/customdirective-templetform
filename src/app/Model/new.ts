
export class User {
    fname:string | undefined;
    lname:string | undefined;
     gender:string | undefined;
     hobby:string[] | undefined;
     city:string |undefined;
    email:string | undefined;
    password:string | undefined

    constructor(f:string, l:string, g:string, h:string[], c:string, e:string, p:string){
        this.fname=f;
        this.lname=l;
         this.gender=g;
         this.hobby=h;
         this.city=c;
        this.email=e;
        this.password=p;
    }

}

export class Users {
    fname:string | undefined;
    lname:string | undefined;
    email:string | undefined;
    password:string | undefined

    constructor(f:string, l:string, e:string, p:string){
        this.fname=f;
        this.lname=l;
        this.email=e;
        this.password=p;
    }

}

//
