fetch('1.txt')
    .then(response => response.text())
    .then(text => {
        // 将文本内容按照换行符拆分成段落
        const paragraphs = text.split('\n\n');
        
        // 将每个段落用 <p> 标签包裹起来
        const htmlContent = paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
        
        // 将 HTML 内容设置到 HTML 页面中
        document.getElementById('text-content').innerHTML = htmlContent;
    })
    .catch(error => console.error('Error fetching text:', error));
