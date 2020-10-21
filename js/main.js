//intialize the default values to their variables
var values =[149,280,125,200,280,200];

var totalPrice = 0;

var quantity = 0;
var flag=0;
var index = 0;
//catch the dom variables

    //variables for calculating the quantity of the product
    var minus = document.querySelectorAll('.minus');
    var add = document.querySelectorAll('.add');
    var counts = document.querySelectorAll('.count');
    var buy = document.querySelectorAll('.buy');
    //
    var img=0;
    var hide = document.querySelectorAll('.hide');
    //variables for diplaying the data on the items board
    var displayQuantity = document.querySelectorAll('.Quantity');
    var displayTotal = document.querySelectorAll('.product-amount');
    var  quantity_product = document.querySelectorAll('.quantity-product');
    //
    //variable for deleting the entry from the items board.
    var close = document.querySelectorAll('#close');
//
var displayCounts = function(index){
    counts[index].innerHTML=quantity;
}

minus[0].addEventListener('click',function(){
    if(quantity>0)
       quantity--;
    displayCounts(index);
});

minus[1].addEventListener('click',function(){
    if(quantity>0)
    quantity--;
    index=1;
    displayCounts(index);
});

minus[2].addEventListener('click',function(){
    if(quantity>0)
    quantity--;
    index=2;
    displayCounts(index);
});

minus[4].addEventListener('click',function(){
    if(quantity>0)
    quantity--;
    index=4;
    displayCounts(index);
});

minus[5].addEventListener('click',function(){
    if(quantity>0)
    quantity--;
    index=5;
    displayCounts(index);
});

add[0].addEventListener('click',function(){
    if(quantity < 20){
        quantity++;
        index=0;
        displayCounts(index);        
    }
});
add[1].addEventListener('click',function(){
    if(quantity < 20){
        quantity++;
        index=1;
        displayCounts(index);        
    }
});
add[2].addEventListener('click',function(){
    if(quantity < 20){
        quantity++;
        index=2;
        displayCounts(index);        
    }
});
add[3].addEventListener('click',function(){
    if(quantity < 20){
        quantity++;
        index=3;
        displayCounts(index);        
    }
});
add[4].addEventListener('click',function(){
    if(quantity < 20){
        quantity++;
        index=4;
        displayCounts(index);        
    }
});
add[5].addEventListener('click',function(){
    if(quantity < 20){
        quantity++;
        index=5;
        displayCounts(index);        
    }
});

buy[0].addEventListener('click',function(){
    quantity = 0;
    img=0;
    hideImg(img);
});

buy[1].addEventListener('click',function(){
    quantity = 0;
    img=1;
    hideImg(img);
});

buy[2].addEventListener('click',function(){
    quantity = 0;
    img=2;
    hideImg(img);
});


buy[3].addEventListener('click',function(){
    quantity = 0;
    img=3;
    hideImg(img);
});

buy[4].addEventListener('click',function(){
    quantity = 0;
    img=4;
    hideImg(img);
});

buy[5].addEventListener('click',function(){
    quantity = 0;
    img=5;
    hideImg(img);

});
function hideImg(index){
    hide[index].src = "image/check-circle.svg";
    document.querySelector('.message').style.display="none";
    var pQuantity = document.querySelectorAll('.count')[index].textContent;
    displayData(index,pQuantity);
    flag=5;
}
//////////////selection
//displaying the data with their quantity and total price
var displayData = function(index , productQuantity){
   displayQuantity[index].innerHTML= productQuantity;
   var total = productQuantity===0 ? 0 : values[index] * productQuantity;
   displayTotal[index].innerHTML = total; 
   quantity_product[index].style.display="flex";
}
var submit = document.getElementById('submit');
submit.addEventListener('click',function(){
    if(flag==5){
        alert('Your selected items are checkout successfully.\nThank You..');
    }
});

var clear = document.getElementById('clear');
clear.addEventListener('click',function(){
    var i=0;
    if(flag==5){
    for(i=0;i<6;i++){
        quantity_product[i].style.display="none";
    }
    backImg();
    document.querySelector('.message').style.display="block";
    flag=0;
}
});

function backImg(){
    var i=0;
    for(i=0;i<6;i++)
    hide[i].src = "image/shopping-bag.svg";
}
