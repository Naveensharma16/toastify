// function to create a toastify 
const toast = (message,messagetype) =>{
    //variable to check if mouse is on that toast or not if its false timer will pause so our toast is not removed automatically
    let notHover = true;   


    // creating toast to display
    const toast = document.createElement("div");
    toast.classList.add("toast");   
    toast.classList.add(messagetype);
    // getting length to set diffrent id of each toast
    //  TODO: change id from length to a rando string
    var id = document.querySelector(".mytoast").children.length; 
    // set the toast id
    toast.setAttribute("id",`item${id}`);

    // adding the toast data using the literal template and vaiables
    toast.innerHTML = `
    <img src="./toasticons/${messagetype}.png" />
    ${message}
        <button> <svg fill="#ffffff" height="10px" width="10px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.112 31.112" xml:space="preserve" stroke="#ffffff" stroke-width="1.5555999999999999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 29.698,31.112 31.112,29.698 16.97,15.556 "></polygon> </g></svg></button>
        <div class="progress"</div>
    `;
    // appending the toast motoast class
     document.querySelector(".mytoast").append(toast);

    //  counter for removing toast and progress bar
     let count = 100;
    // setting intervel 
     const intervel = setInterval(() =>{
            // it checks if counter is o clear the intervel and removed the toast whose counter have reached 0
            if(count == 0){
                clearInterval(intervel);
                const passed = "#item"+id;
                // remove toast
                document.querySelector(passed).remove();
            }
            // below code will only execute only when notHover is true i.e if user hover the counter will stop going down
            if(notHover){
                count--;
            // setting the width of progress according to counter
            document.querySelector("#item"+id).querySelector(".progress").style.width=count+"%";
            // changing the border radius
            document.querySelector("#item"+id).querySelector(".progress").style.borderBottomRightRadius="unset";
            }

     },50)

    //  event listner on toast to check if mouse is over it
    document.querySelector("#item"+id).addEventListener("mouseover",() =>{
        // change mousehover to false as mouse is on toast
        notHover = false;
    })
    // event listner on toast to check if mouse is out
    document.querySelector("#item"+id).addEventListener("mouseout",() =>{
        // mouse not on toast
        notHover = true;
    })
}

// event listner to remove the toast when clicked on multiply
const toastList = document.querySelector(".mytoast").addEventListener('click',(event) =>{
         if(event.target.tagName === "BUTTON" || event.target.tagName === "svg" ){
             event.target.closest("button").parentElement.remove(); 
         }

})





// adding the event listner on button which will create a toast

// event listner on success button
document.querySelector(".makeatoastsuccess").addEventListener('click',() =>{
    toast("success message","success");
})
// event listner on fail button
document.querySelector(".makeatoasterror").addEventListener('click',() =>{
    toast("Error message","fail");
})
// event listner on warning button
document.querySelector(".makeatoastwarning").addEventListener('click',() =>{
    toast("Warning message","warning");
})

