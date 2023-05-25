function fetchContent(id, titleId, contentId) {
    fetch(`http://20.187.126.190:9999/api/content/?id=${id}`)
      .then(response => response.json())
      .then(data => {
        // Cập nhật nội dung vào các thẻ tương ứng
        document.getElementById(titleId).textContent = data.title;
        document.getElementById(contentId).textContent = data.content;
      })
      .catch(error => {
        console.log('Đã xảy ra lỗi:', error);
      });
  }


  
function fetchImage(id, imgId) {
    fetch(`http://20.187.126.190:9999/api/images/?id=${id}`)
        .then(response => response.json())
        .then(data => {
        // Cập nhật nội dung vào thuộc tính src của thẻ <img>
        document.getElementById(imgId).src = data.image;
        })
        .catch(error => {
        console.log('Đã xảy ra lỗi:', error);
        });
}

 fetchContent(1, "banner_title", "banner_content");
 fetch('http://20.187.126.190:9999/api/content/?id=49')
 .then(response => response.json())
 .then(data => {
   //Thay thế chứ thường thành chứ hoa
   const content = data.content.replace('Aurora Solution', '<strong>Aurora Solution</strong>');
   // Cập nhật nội dung vào thẻ h1 và p
   document.getElementById('gioithieu_content').innerHTML  = content;
 })
 .catch(error => {
   console.log('Đã xảy ra lỗi:', error);
 });

 fetchImage(5, "image_intro1");
 fetchImage(6, "image_intro2");
 fetchImage(7, "image_intro3");
 fetchImage(8, "image_intro4");

 fetchImage(10, "image_service1");
 fetchImage(11, "image_service2");
 fetchImage(12, "image_service3");
 fetchImage(13, "image_service4");

 fetchContent(3, "service_title1", "service_content1");
 fetchContent(4, "service_title2", "service_content2");
 fetchContent(5, "service_title3", "service_content3");
 fetchContent(6, "service_title4", "service_content4");




