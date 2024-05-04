var addForm = document.getElementById("addForm");
var image = document.getElementById("image");
var title = document.getElementById("title");
var description = document.getElementById("desc");
var price = document.getElementById("price");

var addCard = document.getElementById("addCard");


addForm.addEventListener('submit', function(e){
    console.log("0000000000000000000000")
    e.preventDefault();

    var newImage = document.createElement('img');
    newImage.className = 'card-img-top';
    newImage.src = image.value;

    var NewTitle = document.createElement('h5');
    NewTitle.className = 'card-title';
    NewTitle.innerHTML= title.value;

    var NewDescription = document.createElement('p');
    NewDescription.className = 'card-img-top';
    NewDescription.innerHTML = description.value;

    var NewPrice = document.createElement('a');
    NewPrice.className = 'card-img-top';
    NewPrice.innerHTML = price.value;

    var content = document.createElement('div');
    var card = document.createElement('div');
    card.className ='card'

    
    content.append(NewTitle);
    content.append(NewDescription);
    content.append(NewPrice);

    card.append(newImage);
    card.append(content);
    
    addCard.append(card);

})