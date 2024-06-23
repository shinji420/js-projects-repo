  // const seatButtons = document.querySelectorAll('.seat');

  //  for(const seats of seatButtons){
  //     seats.addEventListener('click', function(){
  //      seats.style.backgroundColor='#1DD100'

  //      let totalSeat=parseInt(
  //        document.getElementById('bus-seat').innerText
  //      );
  //      totalSeat-=1;
  //      document.getElementById('bus-seat').innerText=totalSeat

  //      let seatCount=parseInt(document.getElementById('add-seat').innerText);
  //      seatCount+=1
  //      document.getElementById('add-seat').innerText=seatCount
  //     }) 
     
  //  }


  function elementId(elementID) {
    return document.getElementById(elementID);
}


function setElement(elementID, value) {
    document.getElementById(elementID).innerText = value;
}


function createItems(seat, ticketPrice) {
    let li = document.createElement("li");

    let p1 = document.createElement("p");
    p1.innerText = seat;

    let p2 = document.createElement("p");
    p2.innerText = "Economy";
    let p3 = document.createElement("p");
    p3.innerText = ticketPrice;

    li.appendChild(p1)
    li.appendChild(p2)
    li.appendChild(p3)
     elementId('ticket-number').appendChild(li)
}

let count = 0;
let totalTicket = 0;
let checkArr = [];
let conditionArr = [];
let seatItems = document.getElementsByClassName('seat');

for (const seat of seatItems) {
    seat.addEventListener('click', function (e) {
        
        if (count < 4) {
            if (checkArr.includes(seat)) {
                return;

            }
           else {
                count += 1;
                
                totalTicket += parseInt(elementId('seat-price').innerText);
                let seatAvailable = parseInt(elementId('bus-seat').innerText);
                setElement('bus-seat', seatAvailable - 1)
            
                setElement('total-price', totalTicket);
                setElement('grand-total', totalTicket);
                
                seat.style.backgroundColor='#1DD100'
                e.target.classList.add('pointer-events-none')


                setElement('add-seat', count)

                
                createItems(seat.innerText, elementId('seat-price').innerText);
            }
        }
        else {
            alert("You are not eligible for more than 4 seats")
        }
        
        checkArr.push(seat);
    })
}

elementId('coupon').addEventListener('keyup', function () {
    let userInput =elementId('coupon').value;
    if (userInput !== '') {
        elementId('apply-btn').removeAttribute('disabled');

    }
})

function couponApply() {
    let userInput = elementId('coupon').value;
    const coupon1 = elementId("coupon-1").innerText;
    const coupon2 = elementId("coupon-2").innerText;
    if (userInput === coupon1) {
        let discount1 = totalTicket * 0.15;
        setElement('grand-total', totalTicket - discount1);
        setElement('discount-price',discount1)
        elementId('input-filed').classList.add("hidden");
        elementId('discount').classList.remove("hidden");
    }
    else if (userInput === coupon2) {
        let discount2 = totalTicket * 0.20;
        setElement('grand-total', totalTicket - discount2);
        setElement('discount-price', discount2)
        elementId('input-filed').classList.add("hidden");
        elementId('discount').classList.remove("hidden");
    }
    else {
        alert("Invalid")
    }
}

const phone = elementId('phoneNumber')
phone.addEventListener('input', function (e) {
    const inputValue=e.target.value
   if(count>0 && inputValue.length>0){
    document.getElementById("buttonmodal").removeAttribute("disabled");
   }
    
})


function reload(){
    location.reload()
}

   