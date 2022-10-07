function getCurrentUrl() {
    let location = chrome.tabs.getCurrent();
    alert(location);
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(getCurrentUrl(), 500);
  });