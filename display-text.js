fetch('1.txt')
    .then(response => response.text())
    .then(text => {
        // 将换行符替换为 HTML 的换行标签
        text = text.replace(/\n/g, "<br>");
        document.getElementById('text-content').innerHTML = text;
    })
    .catch(error => console.error('Error fetching text:', error));
