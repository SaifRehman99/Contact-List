    // getting the refrences here
   
    const input = document.querySelector('#inputContact');
   
    const listItem = document.querySelector('#contactsList');

   
    // adding event listener here

    input.addEventListener('keyup',()=>{


        // getting the input value here
        const value = input.value.toLowerCase();


        // getting the ul's li here array form
        const li = listItem.querySelectorAll('li.collection-item');


        // looping throung the li list
        
        li.forEach((item)=>{
        
            let a = item.getElementsByTagName('a')[0];


            // if matched show or hide
            
            if(a.innerHTML.toLowerCase().indexOf(value) > -1){
                item.style.display = '';
            
            }
            
            else{
            
                item.style.display = 'none';
        
            }
        
        })

        

    })