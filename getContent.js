function getContent(section) {
    section.element = document.querySelector('#'+section.title)
    for (articleTitle of section.articles) {
        let content = document.createElement('article')
        section.element.appendChild(content);
        fetch(section.title+'/'+articleTitle)
            .then(response => response.text())
            .then(text => content.innerHTML = text)
    }

}

const sections = [
    {
    title: 'announcements',
    articles: [
    '061018_materials.html',
    '101018_Schedule.html',
    '031018_Schedule.html',
    'welcome.html']
    },
    {
    title: 'resources',
    articles: [
        '../announcements/061018_materials.html',
        'links.html',
        'coming_soon.html'
    ]
    },
    {
    title: 'about',
    articles: [
        'about.html',
        'sponsors.html'
    ]
    },
    {
    title: 'contact',
    articles: [
        'contact.html'
    ]
    }
]

function show(target_section, sections) {
        for (section of sections) {
            section.element.classList.add('hidden')
        }
        target_section.element.classList.remove('hidden')
        console.log(target_section)
    
}

for (section of sections) {
    getContent(section)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}

show(sections[0], sections)

for (section of sections) {
    section.link = document.querySelector('#'+section.title+'-link')
}

for (section of sections) {
    section.link.addEventListener('click', 
    ((section,sections) => () => {show(section, sections)})(section, sections))
}


