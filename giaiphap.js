//section1
fetch("http://20.187.126.190:9999/api/content/?id=9")
  .then((response) => response.json())
  .then((data) => {
    //Thay thế chứ thường thành chứ hoa
    const content = data.content.replace(
      "Aurora Solution",
      "<strong>Aurora Solution</strong>"
    );
    // Cập nhật nội dung vào thẻ h1 và p
    document.getElementById("banner_title").textContent = data.title;
    document.getElementById("banner_content").innerHTML = content;
  })
  .catch((error) => {
    console.log("Đã xảy ra lỗi:", error);
  });

//section2
fetch("http://20.187.126.190:9999/api/content/?id=10")
  .then((response) => response.json())
  .then((data) => {
    // Cập nhật nội dung vào thẻ h1 và p
    document.getElementById("mangluoi_title").textContent = data.title;
    document.getElementById("mangluoi_content").textContent = data.content;
  })
  .catch((error) => {
    console.log("Đã xảy ra lỗi:", error);
  });
//3 hình
function fetchContent(id, titleId, contentId) {
  fetch(`http://20.187.126.190:9999/api/content/?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      // Cập nhật nội dung vào các thẻ tương ứng
      document.getElementById(titleId).textContent = data.title;
      document.getElementById(contentId).textContent = data.content;
    })
    .catch((error) => {
      console.log("Đã xảy ra lỗi:", error);
    });
}

// Gọi function fetchContent
for (let i = 11; i <= 13; i++) {
  let titleId = `mangluoi${i - 10}_title`;
  let contentId = `mangluoi${i - 10}_content`;
  fetchContent(i, titleId, contentId);
}
function fetchImage(id, imgId) {
  fetch(`http://20.187.126.190:9999/api/images/?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      // Cập nhật nội dung vào thuộc tính src của thẻ <img>
      document.getElementById(imgId).src = data.image;
    })
    .catch((error) => {
      console.log("Đã xảy ra lỗi:", error);
    });
}

// Gọi function fetchImage với vòng lặp
for (let i = 56; i <= 58; i++) {
  let imgId = `mangluoi${i - 55}_img`;
  fetchImage(i, imgId);
}

//icon
fetch("http://20.187.126.190:9999/api/images/?id=61")
  .then((response) => response.json())
  .then((data) => {
    //Cập nhật content vào thẻ img có id là mangluoi_icon1
    document.getElementById("mangluoi_icon1").src = data.image;
  })
  .catch((error) => {
    console.log("Đã xảy ra lỗi:", error);
  });
fetch("http://20.187.126.190:9999/api/images/?id=62")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("mangluoi_icon2").src = data.image;
  })
  .catch((error) => {
    console.log("Đã xảy ra lỗi:", error);
  });

fetch("http://20.187.126.190:9999/api/images/?id=60")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("mangluoi_icon3").src = data.image;
  })
  .catch((error) => {
    console.log("Đã xảy ra lỗi:", error);
  });

//section 3
fetch("http://20.187.126.190:9999/api/content/?id=14")
  .then((response) => response.json())
  .then((data) => {
    // Cập nhật nội dung vào thẻ h1 và p
    document.getElementById("nentang_title1").textContent = data.title;
    document.getElementById("nentang_content1").textContent = data.content;
  })
  .catch((error) => {
    console.log("Đã xảy ra lỗi:", error);
  });
//content của section3
for (let i = 14; i <= 18; i++) {
  let titleId = `nentang_title${i - 13}`;
  let contentId = `nentang_content${i - 13}`;
  fetchContent(i, titleId, contentId);
}

// Gọi hình với fetchImage
fetchImage(46, "nentang1_img");
fetchImage(69, "nentang2_img");
fetchImage(47, "nentang3_img");
fetchImage(44, "nentang4_img");

fetchContent(19, "kyc_title1", "kyc_content1");
fetchContent(23, "kyc_title2", "kyc_content2");
fetchContent(23, "kyc_title3", "kyc_content3");
fetchContent(24, "kyc_title4", "kyc_content4");
fetchContent(25, "kyc_title5", "kyc_content5");

fetchImage(42, "kyc_img1");
fetchImage(48, "kyc_img2");
fetchImage(45, "kyc_img3");
fetchImage(54, "kyc_img4");
