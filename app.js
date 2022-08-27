const text = document.querySelector(".text");
text.innerHTML = text.innerText
    .split("")
    .map(
        (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
    )
    .join("");

      /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
 let formBtn = formbutton("create", {
    
    action: "https://formspree.io/f/xdojkzaq",
    title: "How can we help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "rgb(232, 159, 48)"
      },
      button: {
        backgroundColor: "rgb(232, 159, 48)"
      }
    }
    
  });

  /*time function*/
var now = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let checkTime = function () {
      let today = weekday[now.getDay()];
      let timeDiv = document.getElementById('timeDiv');
      let dayOfWeek = now.getDay();
      let hour = now.getHours();
      let minutes = now.getMinutes();
      let time = now.getTime();


      //add AM or PM
      var suffix = hour >= 12 ? "P.M." : "A.M.";

      // add 0 to one digit minutes
      if (minutes < 10) {
          minutes = "0" + minutes
      };

      if ((dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 6) && hour >= 10 && hour <= 13) {
          hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15

          timeDiv1.innerHTML = `It's ${today} ${hour}:${minutes} ${suffix} we're open and accepting your orders`;
          timeDiv1.className = 'open2';
      }

      else if ((dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5) && hour >= 10 && hour <= 13) {
          hour = ((hour + 11) % 12 + 1);

          timeDiv1.innerHTML = `It's ${today} ${hour}:${minutes} ${suffix} we're open accepting and your orders`;
          timeDiv1.className = 'open2';
      }

      else {
          if (dayofweek = 0 || hour == 0 || hour > 12) {
              hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
          }

          timeDiv1.innerHTML = `It's ${today} ${hour}:${minutes} ${suffix} sorry we're closed, but it's never to early to pre-order your next meal \n\n   We Open at 10:00 A.M.`;
          timeDiv1.className = 'closed2'

      }

  };
  var currentDay = weekday[now.getDay()];
  var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
  $(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup

  setInterval(checkTime, 1000);
  checkTime();



 
