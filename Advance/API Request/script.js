const requestUrl = 'https://api.github.com/users/vaibhav-chitransh';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if(xhr.readyState === 4) {
        let data = this.responseText;
        console.log(data);
        console.log(data.public_repos);
        console.log(typeof(data));

        // Converting string to JSON
        data = JSON.parse(this.responseText);
        console.log(data.public_repos);
        console.log(data.avatar_url);
    }
}
xhr.send();
