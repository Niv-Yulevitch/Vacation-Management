let mainDiv = document.createElement('div');
let alfaDiv = document.createElement('div');
let firstDiv = document.createElement('div');
let secendDiv = document.createElement('div');
let thirdDiv = document.createElement('div');
let h1 = document.createElement('h1');
let myForm = document.createElement('form');
let myFormDiv1 = document.createElement('div');
let myFormDiv2 = document.createElement('div');
let myFormDiv3 = document.createElement('div');
let myFormDiv4 = document.createElement('div');
let myFormDiv5 = document.createElement('div');
let myVacationName = document.createElement('input');
let myVacationNameLabel = document.createElement('label');
let myVacationPhoto = document.createElement('input');
let myVacationPhotoLabel = document.createElement('label');
let myVacationPrice = document.createElement('input');
let myVacationPriceLabel = document.createElement('label');
let myVacationRate = document.createElement('select');
let rateOption = document.createElement('option');
let rateOption1 = document.createElement('option');
let rateOption2 = document.createElement('option');
let rateOption3 = document.createElement('option');
let rateOption4 = document.createElement('option');
let myVacationRateLabel = document.createElement('label');
let myFormBtnSend = document.createElement('button');
let myFormBtnClear = document.createElement('button');

mainDiv.className = "container";

alfaDiv.className = "card";

firstDiv.className = 'card-header';
secendDiv.className = 'card-body';

h1.innerHTML = 'Vacation Management';
h1.style.textAlign = 'center';

myFormDiv1.className = 'form-group';
myFormDiv2.className = 'form-group';
myFormDiv3.className = 'form-group';
myFormDiv4.className = 'form-group';
myFormDiv5.className = 'form-group';

myVacationNameLabel.innerText = 'Vacation Name:'
myVacationPhotoLabel.innerText = 'Vacation Photo:'
myVacationPriceLabel.innerText = 'Vacation Price:'
myVacationRateLabel.innerText = 'Vacation Rate:'

myVacationName.type = 'text';
myVacationName.required = true;
myVacationName.placeholder = 'Enter the Name of the vacation'
myVacationName.className = 'form-control';
myVacationName.style.width = '94%';

myVacationPhoto.type = 'url';
myVacationPhoto.required = true;
myVacationPhoto.placeholder = 'Enter the URL of the photo from the vacation'
myVacationPhoto.className = 'form-control';
myVacationPhoto.style.width = '94%';

myVacationPrice.type = 'number';
myVacationPrice.required = true;
myVacationPrice.min = '0';
myVacationPrice.placeholder = 'Enter the who much the vacation costed'
myVacationPrice.className = 'form-control';
myVacationPrice.style.width = '94%';

rateOption.selected = true;
rateOption.hidden = true;
rateOption.disabled = true;

rateOption.innerText = "Rate here!";
rateOption1.innerText = 'Excellent';
rateOption1.value = '4';
rateOption2.innerText = 'Good';
rateOption2.value = '3';
rateOption3.innerText = 'Regular';
rateOption3.value = '2';
rateOption4.innerText = 'Bad';
rateOption4.value = '1';

myVacationRate.className = 'form-control'
myVacationRate.style.width = '94%';
myVacationRate.required = true;

myFormBtnSend.type = 'submit';
myFormBtnSend.innerText = 'Submit';
myFormBtnSend.className = 'btn btn-success';
myFormBtnSend.style.marginLeft = '43%';

myFormBtnClear.type = 'reset';
myFormBtnClear.innerText = 'Reset';
myFormBtnClear.className = 'btn btn-danger';

const onSubmit = e => {
    e.preventDefault();

    if (!myVacationName.value || myVacationName.value === "" || myVacationName.value.length === 0) {
      return false;
    }
    if (!myVacationPhoto.value || myVacationPhoto.value === "" || myVacationPhoto.value.length === 0) {
      return false;
    }
    if (!myVacationPrice.value || myVacationPrice.value < 0) {
      return false;
    }

    let details = {
        name: myVacationName.value,
        photo: myVacationPhoto.value,
        price: myVacationPrice.value,
        rate: myVacationRate.value
    }

    details.id = makeCard(details);

    return true;
};

const makeCard = details => {
    console.log("details", details);

    let cardMainDiv = document.createElement('div');
    let cardFirstDiv = document.createElement('div');
    let cardSecendDiv = document.createElement('div');
    let cardName = document.createElement('h1');
    let cardPhoto = document.createElement('img');
    let cardPrice = document.createElement('p');
    let cardRate = document.createElement('p');
    let cardDelBtn = document.createElement('button');
    
    cardMainDiv.id = details.id ? details.id : "card_" + Date.now();

    cardMainDiv.style.width = '300px';
    cardMainDiv.className = "card";
    cardMainDiv.style.float = 'left';

    cardFirstDiv.className = 'card-header';
    cardSecendDiv.className = 'card-body';

    cardName.style.textAlign = 'center';
    cardName.innerHTML = `${details.name}`;

    cardPhoto.src = `${details.photo}`;
    cardPhoto.className = 'card-img-top';

    cardPrice.innerText = `${details.price} ₪`;
    cardPrice.style.textAlign = 'center';

    if (details.rate == '1'){cardRate.innerText='⭐'}
    else if (details.rate == '2'){cardRate.innerText='⭐⭐'}
    else if (details.rate == '3'){cardRate.innerText='⭐⭐⭐'}
    else if (details.rate == '4'){cardRate.innerText='⭐⭐⭐⭐'};

    cardRate.style.textAlign = 'center';

    cardDelBtn.style.float = 'right';
    cardDelBtn.style.width = '25px'
    cardDelBtn.className = 'glyphicon glyphicon-remove';
    cardDelBtn.setAttribute('aria-hidden', 'true');
    

    function delCard() {
        event.target.parentElement.remove();
    }

    cardDelBtn.addEventListener('click', delCard)

    cardMainDiv.appendChild(cardDelBtn);
    cardFirstDiv.appendChild(cardName);
    cardSecendDiv.appendChild(cardPhoto);
    cardSecendDiv.appendChild(cardPrice);
    cardSecendDiv.appendChild(cardRate);
    cardMainDiv.appendChild(cardFirstDiv);
    cardMainDiv.appendChild(cardSecendDiv);
    thirdDiv.appendChild(cardMainDiv);
}

myForm.onsubmit = onSubmit;
myForm.className = "container h-100";

myVacationRate.appendChild(rateOption);
myVacationRate.appendChild(rateOption1);
myVacationRate.appendChild(rateOption2);
myVacationRate.appendChild(rateOption3);
myVacationRate.appendChild(rateOption4);

myFormDiv1.appendChild(myVacationNameLabel);
myFormDiv1.appendChild(myVacationName);
myFormDiv2.appendChild(myVacationPhotoLabel);
myFormDiv2.appendChild(myVacationPhoto);
myFormDiv3.appendChild(myVacationPriceLabel);
myFormDiv3.appendChild(myVacationPrice);
myFormDiv4.appendChild(myVacationRateLabel);
myFormDiv4.appendChild(myVacationRate);
myFormDiv5.appendChild(myFormBtnSend);
myFormDiv5.appendChild(myFormBtnClear);

myForm.appendChild(myFormDiv1);
myForm.appendChild(myFormDiv2);
myForm.appendChild(myFormDiv3);
myForm.appendChild(myFormDiv4);
myForm.appendChild(myFormDiv5);

firstDiv.appendChild(h1);
secendDiv.appendChild(myForm);

alfaDiv.appendChild(firstDiv);
alfaDiv.appendChild(secendDiv);
alfaDiv.appendChild(thirdDiv);

mainDiv.appendChild(alfaDiv);

document.body.appendChild(mainDiv);