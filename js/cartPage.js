var addForm = document.getElementById("addForm");
var quantityInput = document.getElementById("quantity");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");

incrementButton.addEventListener('click', function() {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

decrementButton.addEventListener('click', function() {
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

var addCard = document.getElementById("addCard");

addForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var selectedMealInput = document.querySelector('input[name="meal"]:checked');
    if (!selectedMealInput) {
        console.error("No meal selected");
        return;
    }
    var selectedMealLabel = selectedMealInput.nextElementSibling;
    var selectedMealImage = selectedMealLabel.querySelector('img');
    if (!selectedMealImage) {
        console.error("No image found for selected meal");
        return;
    }
    var selectedMeal = selectedMealImage.src;

    var selectedAdditionalItemInput = document.querySelector('input[name="additionalItem"]:checked');
    if (!selectedAdditionalItemInput) {
        console.error("No additional item selected");
        return;
    }
    var selectedAdditionalItemLabel = selectedAdditionalItemInput.nextElementSibling;
    var selectedAdditionalItemImage = selectedAdditionalItemLabel.querySelector('img');
    if (!selectedAdditionalItemImage) {
        console.error("No image found for selected additional item");
        return;
    }
    var selectedAdditionalItem = selectedAdditionalItemImage.src;

    var note = document.getElementById("note").value;

    var deliveryDate = document.getElementById("deliveryDate").value;
    var deliveryTime = document.getElementById("deliveryTime").value;

    var quantity = quantityInput.value;

    var card = document.createElement('div');
    card.className ='card';

    var content = document.createElement('div');
    content.className = 'card-content';

    var newImage = document.createElement('img');
    newImage.className = 'card-img-top';
    newImage.src = selectedMeal;

    var NewTitle = document.createElement('h5');
    NewTitle.className = 'card-title';
    NewTitle.innerHTML= "Meal";

    var quantityContent = document.createElement('p');
    quantityContent.className = 'card-text';
    quantityContent.innerHTML = "Quantity: " + quantity;

    var additionalItemImage = document.createElement('img');
    additionalItemImage.className = 'card-img-top';
    additionalItemImage.src = selectedAdditionalItem;

    var additionalItemTitle = document.createElement('h5');
    additionalItemTitle.className = 'card-title';
    additionalItemTitle.innerHTML= "Additional Item";

    var noteContent = document.createElement('p');
    noteContent.className = 'card-text';
    noteContent.innerHTML = "Note: " + note;

    var deliveryDetails = document.createElement('p');
    deliveryDetails.className = 'card-text';
    deliveryDetails.innerHTML = "Delivery Date: " + deliveryDate + ", Time: " + deliveryTime;

    var updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.className = 'card-button';
    updateButton.addEventListener('click', function() {
    var mealImageSrc = selectedMealInput.value;
    var additionalItemImageSrc = selectedAdditionalItemInput.value;
    var noteValue = noteContent.innerHTML.replace('Note: ', '');
    var deliveryDateTime = deliveryDetails.innerHTML.replace('Delivery Date: ', '').replace('Time: ', '');

    image.value = mealImageSrc;
    additionalItem.value = additionalItemImageSrc;
    note.value = noteValue;

    var dateTimeParts = deliveryDateTime.split(', ');
    deliveryDate.value = dateTimeParts[0];
    deliveryTime.value = dateTimeParts[1];
});

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'card-button delete';
    deleteButton.addEventListener('click', function() {
        console.log('Delete button clicked');
        card.remove(); 
    });

    content.append(NewTitle);
    content.append(newImage);
    content.append(quantityContent); 
    content.append(additionalItemTitle);
    content.append(additionalItemImage);
    content.append(noteContent);
    content.append(deliveryDetails);
    content.append(updateButton); 
    content.append(deleteButton); 
    card.append(content);

    addCard.appendChild(card);
});

var doneButton = document.getElementById("doneButton");

doneButton.addEventListener('click', function() {
    var updatedMealImageSrc = image.value;
    var updatedAdditionalItemImageSrc = additionalItem.value;
    var updatedNoteValue = note.value;
    var updatedDeliveryDate = deliveryDate.value;
    var updatedDeliveryTime = deliveryTime.value;
    newImage.src = updatedMealImageSrc;
    additionalItemImage.src = updatedAdditionalItemImageSrc;
    noteContent.innerHTML = "Note: " + updatedNoteValue;
    deliveryDetails.innerHTML = "Delivery Date: " + updatedDeliveryDate + ", Time: " + updatedDeliveryTime;
});
