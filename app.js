// reviews data
const reviews = [
    {
      id: 1,
      name: "Jane Doe 1",
      job: "anonymus job 1",
      img:
        "picture-1.jpg",
      text:
        "Abbati, medico, patrono que intima pande."
    },
    {
      id: 2,
      name: "Jane Doe 2",
      job: "anonymus job 2",
      img:
        "picture-2.jpg",
      text:
        "Vestis virum reddit.",
    },
    {
      id: 3,
      name: "Jane Doe 3",
      job: "anonymus job 3",
      img:
        "picture-3.jpg",
      text:
        "Crede quod habes, et habes.",
    },
    {
      id: 4,
      name: "Jane Doe 4",
      job: "anonymus job 4",
      img:
        "picture-4.jpg",
      text:
        "Cuiusvis hominis est errare, nullius nisi insipientis in errore perseverare.",
    },
    {
      id: 5,
      name: "Jane Doe 5",
      job: "anonymus job 5",
      img:
        "picture-5.jpg",
      text:
        "In vino veritas.",
    },
  ];

  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
  showPerson()
});

// show person based on item
function showPerson(){
  const item = reviews[currentItem]
  img.src = item.img 
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function() {
  currentItem++;
  if (currentItem > reviews.length-1){
    currentItem = 0;
  };
  showPerson();
})

// show prev person
prevBtn.addEventListener("click", function() {
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length - 1;
  };
  showPerson()
})

// show random person
randomBtn.addEventListener("click", function() {
  const randomNumber = getRandomNumber();
  currentItem = randomNumber;
  showPerson();

})

function getRandomNumber(){
  return Math.floor(Math.random() * 5);
}