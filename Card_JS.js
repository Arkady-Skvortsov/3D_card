let Parent = document.querySelectorAll('.cards');
           
    	Parent.forEach((par) => {
    	   let Child = par.children[0];

           par.addEventListener('mousemove', Move);

           function Move(event) {
           	 if(Child) {
                let halfHeight = Child.offsetHeight / 2;
                let halfWidth = Child.offsetWidth / 2;

                Child.style.transform = 'rotateY(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateX(' + -(event.offsetX - halfWidth) / 5 + 'deg)'; 
           	 }
           }

           par.addEventListener('mouseout', Out); 

           function Out() {
              Child.style.transform = 'rotate(0)';   
           }

           par.addEventListener('click', function() {
              if(Child) {
              	 Child.style.transform = 'translateX(-50px)';

              	 Child.style.height = '1000px';
              	 Child.style.width = '1000px';

              	 Child.style.transition = '0.3s';

              	 par.removeEventListener('mousemove', Move);
              } 
           });

           par.addEventListener('dblclick', function() {
              Child.style.height = '400px';
              Child.style.width = '400px';
              par.addEventListener('mousemove', Move);
           });
    	});