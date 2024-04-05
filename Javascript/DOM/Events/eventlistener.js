// const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// // grandparent.addEventListener('click', e =>{
// //     console.log(e.target)
// // });

// // grandparent.addEventListener('click', e =>{
// //     console.log("Grandparent Capture")
// // },
// // {
// //     capture: true
// // }
// // );

// grandparent.addEventListener('click', e =>{
//     console.log("Grandparent Bubble")
// });

// // parent.addEventListener('click', e =>{
// //     e.stopPropagation()// we use this for stop our event from propagating upwards or downwards to capture or bubble phase
// //     console.log("Parent capture")
// // },
// // {
// //     capture: true
// // }
// // );

// // parent.addEventListener('click', e =>{
// //     console.log("Parent Bubble")
// // });


// parent.addEventListener("click", printhi)

// setTimeout(() => {
//     parent.removeEventListener("click", printhi)
// }, 2000);

// // child.addEventListener('click', e =>{
// //     console.log("child capture")
// // },
// // {
// //     capture: true
// // }
// // );

// child.addEventListener('click', e =>{
//     console.log("child Bubble")
// });


// // document.addEventListener('click', e =>{
// //     console.log("Document Capture")
// // },
// // {
// //     capture: true
// // }
// // );

// // document.addEventListener('click', e =>{
// //     console.log("Document Bubble")
// // });



// // grandparent.addEventListener('click', e =>{
// //     console.log("Grandparent 2")
// // });

// // parent.addEventListener('click', e =>{
// //     console.log("parent 1")
// // });

// // child.addEventListener('click', e =>{
// //     console.log("child 1")
// // });

// // document.addEventListener('click', e =>{
// //     console.log("Document 1")
// // });


// // .removeEventListener()

// function printhi(){
//     console.log("Hi");
// }

const divs = document.querySelectorAll("div")

divs.forEach(div =>{
    div.addEventListener("click", () =>{
        console.log("hi")
    })
})


const newdiv = document.createElement('div')
newdiv.style.width = '200px'
newdiv.style.height = '200px'
newdiv.style.backgroundColor = 'purple'
document.body.append(newdiv)