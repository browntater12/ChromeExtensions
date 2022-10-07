
var website = {
    firstName:"John",
    lastName: "Doe",
    url : window.location.href,
    text : window.getSelection().toString(),
    fullName: function () {
    return this.firstName + " " + this.lastName;
    }
}

if(website.text) {
    alert(website.url + '\n\n' +website.text);
}
else {
    alert("Nothing highlighted not saved for later.")
}

