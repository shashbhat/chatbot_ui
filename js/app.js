var outputArea = $("#chat-output");

$("#user-input-form").on("submit", function (e) {

  e.preventDefault();

  var message = $("#user-input").val();
  botResponse(message);
  outputArea.append(`
    <div class='bot-message'>
      <div class='message'>
        ${message}
      </div>
    </div>
  `);

  function botResponse(userMsg) {

    // Bot Response
    $.get( `https://edith-chatbot.herokuapp.com/getResponse?msg=${userMsg}`, function(data){
      console.log(userMsg);
      console.log(data);

      const msgText = data;

      setTimeout(function () {
        outputArea.append(`
          <div class='user-message'>
            <div class='message'>
              ${msgText}
            </div>
          </div>
        `);
      }, 250);

      
    });

  }

  $("#user-input").val("");

});