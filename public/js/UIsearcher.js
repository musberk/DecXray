class SearcherUI{

    constructor(){
        this.messageholder= document.getElementById("messageseach");
        this.titles= document.querySelectorAll(".title");
        this.categories= document.querySelectorAll(".categoriesof")
        this.caseholder=[];
        this.flag=false;
    }

    allertUser(message){
        const realmessage= this.messageseach.textContent;

        messageseach.textContent= message;

        setTimeout(function(){
            this.messageseach.textContent= realmessage;
        },1000);
    }

    setMessage(message){
        this.messageholder.textContent=message;
    }

    searchforCategory(sellectedCat){
        this.flag=true;
        this.caseholder=[];

        this.categories.forEach(element=>{
            const catg=element.lastElementChild.textContent.trim();
            console.log(catg+" "+sellectedCat);

            if(catg.toLowerCase()==sellectedCat.toLowerCase() || sellectedCat=="All Posts"){
                this.caseholder.push(element.parentElement.parentElement.parentElement.firstElementChild);

                element.parentElement.parentElement.parentElement.parentElement.style.display="block";
            }
            else{
                element.parentElement.parentElement.parentElement.parentElement.style.display="none";
            }
        }); 
        
    }
    
    search(key){
        let cases=[];
        if(this.flag){
            cases=this.caseholder;
        }else{
            cases=this.titles;
        }
        console.log(this.caseholder);
        cases.forEach(element=>{
            const title=element.firstElementChild.textContent
            if(title.toLowerCase().indexOf(key.toLowerCase())==-1){
                element.parentElement.parentElement.style.display="none";
                console.log(0);
            }else{
                element.parentElement.parentElement.style.display="block";
                console.log(1);
            }
        })
    }

}