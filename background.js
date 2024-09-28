const webList = [
    {
        name: 'MDN',
        homepage: 'https://developer.mozilla.org/zh-CN/',
        searchUrl: 'https://developer.mozilla.org/zh-CN/search?q=',
    },
    {
        name: 'NPM',
        homepage: 'https://www.npmjs.com/',
        searchUrl: 'https://www.npmjs.com/search?q=',
    },
    {
        name: 'Jue Jin',
        homepage: 'https://juejin.im/',
        searchUrl: 'https://juejin.im/search?query=',
    },
    {
        name: 'GitHub',
        homepage: 'https://github.com/',
        searchUrl: 'https://github.com/search?q='
    }
]

// listen url input, and set the suggest results
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
    // generate suggest results
    const res = webList.map(item => {
        return {
            content: item.searchUrl + text,
            description: `<match>${item.name}</match>: ${text}`,
        }
    })
    suggest(res)
})

chrome.omnibox.onInputEntered.addListener((text, disposition) => {
    chrome.tabs.update({ url: text });
});
