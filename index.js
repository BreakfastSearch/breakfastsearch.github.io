let articles = [
    'welcome.html',
    '031018_Schedule.html'
]

for (let i = 0; i < articles.length; i++) {
    var client = new XMLHttpRequest();
    client.open('GET', articles[i]);
    let content = document.createElement('article')

    client.onreadystatechange = function() {
      content.innerHTML = client.responseText
    }
    console.log(content)
    document.querySelector('.content').appendChild(content);

    client.send();
}

