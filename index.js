const philosopher = "";
    function selectChat(philosopher) {
      document.getElementById("selector-body").hidden = true;
      document.getElementById("chat-container").hidden = false;

      document.getElementById("chat-title").innerHTML = philosopher;
      document.getElementById("chat-sub").innerHTML = "~150 BCE";
    }


const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
chatForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;
  const userDiv = document.createElement('div');
  userDiv.className = 'message user';
  userDiv.textContent = userMsg;
  chatMessages.appendChild(userDiv);
  chatInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  fetch("https://summon.akhandyaduvanshi.in/" + philosopher + "/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: userMsg })
  })
  .then(response => {
    if (!response.ok || !response.body) throw new Error("Stream failed");
  
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    const platoDiv = document.createElement('div');
    platoDiv.className = 'message plato';
    chatMessages.appendChild(platoDiv);
  
    const read = () => {
      reader.read().then(({ done, value }) => {
        if (done) return;
        platoDiv.textContent += decoder.decode(value, { stream: true });
        chatMessages.scrollTop = chatMessages.scrollHeight;
        read();
      });
    };
  
    read();
  })
  .catch(err => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'message plato';
    errorDiv.textContent = "⚠️ Plato is silent due to a server error.";
    chatMessages.appendChild(errorDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
  
});
