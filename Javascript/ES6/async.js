//Async JS Programming
//Calbacks, Promise, Async & Await

const datas = [
     {name:"Ajay", Profession:"Software Engineer"},
     {name:'Anuj', Profession:'Software Engineer'}
    ];
    
    function getDatas(){
        setTimeout(() => {
            let output = "";
    datas.forEach((data, index)=>{
         output+= `<li>${data.name}</li>`;
    })
    document.body.innerHTML=output
        }, 1000);
    }
    
    function createdata(newdata, callback){
        return new Promise ((resolve, reject)=>{
            setTimeout(() => {
                datas.push(newdata);
                // callback();
                let error=false;
                if (!error){
                    resolve();
                }
                else{
                    reject("kuch sahi nhi hai...")
                }
            }, 2000);
        })
        
    }
    
    // createdata({name:'Vivek', Profession:'Software Engineer'}).then(getDatas).catch(err => console.log(err))

    // getDatas();

    async function start(){
        await createdata({name:'Vivek', Profession:'Software Engineer'})
        getDatas();
    }

    start();