let articles = [
    '031018_Schedule.html',
    'welcome.html',
]

var client = []

for (let i = 0; i < articles.length; i++) {
    client.push(new XMLHttpRequest());
    client[i].open('GET', articles[i]);
    let content = document.createElement('article')

    client[i].onreadystatechange = function() {
      content.innerHTML = client[i].responseText
    }
    console.log(content)
    document.querySelector('.content').appendChild(content);

    client[i].send();
}

