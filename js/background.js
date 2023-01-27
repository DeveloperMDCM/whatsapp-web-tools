function estado() {
    console.log('activo') };
    var validando = true;
chrome.action.onClicked.addListener((tab) => {
      if(tab.url.includes("whatsapp") && validando)  {
          chrome.tabs.create({ url: '/index.html', active: false });
          chrome.scripting.executeScript({
              target: { tabId: tab.id },
              files: ["/js/content.js"]
            })
}});

chrome.action.onClicked.addListener(() => {
    estado();
});
