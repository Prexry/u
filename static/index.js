const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

/*banner*/
function closeBanner() {
        var banner = document.getElementById("banner");
        banner.style.animation = "fadeOut 1s ease-in-out";
        setTimeout(function () {
            banner.style.display = "none";
        }, 1000);
    }

    function navigate(url) {
        window.location.href = url;
      }
          function openTab() {
                  var ccsdWindow = window.open("about:blank#UV", "CCSDUV");
      
                  if (ccsdWindow) {
                      var iframe = document.createElement("iframe");
                      iframe.src = "https://fixuv.bimbos.dev";
                      iframe.style.position = "fixed";
                      iframe.style.top = "0";
                      iframe.style.left = "0";
                      iframe.style.width = "100%";
                      iframe.style.height = "100%";
                      iframe.style.border = "none";
                      ccsdWindow.document.body.appendChild(iframe);
                  } else {
                      alert("Pop-up blocked. Please enable pop-ups for this website.");
                  }
              }