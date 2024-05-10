fetch('1.txt')
    .then(response => response.text())
    .then(text => {
        // 将文本内容直接设置为 innerHTML，这会自动解析换行符
        document.getElementById('text-content').innerHTML = text;
    })
    .catch(error => console.error('Error fetching text:', error));
