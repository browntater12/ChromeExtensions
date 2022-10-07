window.onload = () => {
    chrome.tabs.query({currentWindow: true, active: true}).then((result) => {console.log(result)});
}

