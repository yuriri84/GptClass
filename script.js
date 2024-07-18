document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        { title: '첫 번째 여행 이야기', content: '오늘은 첫 번째 여행 이야기를 공유합니다.' },
        { title: '두 번째 여행 이야기', content: '어제의 두 번째 여행 이야기입니다.' },
        { title: '세 번째 여행 이야기', content: '오늘의 세 번째 여행 이야기를 담았습니다.' }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(function(post) {
        const postElement = document.createElement('article');
        postElement.classList.add('blog-post');

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);

        blogPostsContainer.appendChild(postElement);
    });
});

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1 
    }
    
    slides[slideIndex - 1].style.display = "block";  

    setTimeout(showSlides, 3000); // 이미지가 3초마다 넘어가도록 설정
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides(); // 페이지 로드 시 슬라이드 시작
});
