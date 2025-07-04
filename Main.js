const list = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".Menu");
const items = document.querySelectorAll(".choosecontent li");
const highlight = document.querySelector(".choosecontent span");
let currentMenu = "Địa Điểm"; 
let lastSelectedMenu = "Địa Điểm"; 


const contentMap = {
  "Địa Điểm": {
    Bắc: {
      mainContent: {
        imageSrc: "../image/hanoi.png",
        title: "Hà Nội",
        description:
          "Hà Nội, thủ đô của Việt Nam, nổi bật với lịch sử nghìn năm văn hiến, kiến trúc cổ kính và nhiều di tích Văn Hoá đặc sắc như Hồ Gươm, Văn Miếu và Phố Cổ.",
      },
      imgtilte2_1: {
        imageSrc: "../image/chùa.png",
        title: "Tây Ninh",
        description: "Tây Ninh là một tỉnh thuộc vùng Đông Nam Bộ Việt Nam.",
      },
      imgtilte2_2: {
        imageSrc: "../image/trangan.png",
        title: "Tràng An",
        description: "Tràng An là quần thể danh thắng nổi tiếng ở Ninh Bình.",
      },
      imgtilte3_1: {
        imageSrc: "../image/halong.png",
        title: "Vịnh Hạ Long",
        description: "Vịnh Hạ Long, di sản UNESCO với hàng ngàn đảo đá vôi.",
      },
      imgtilte3_2: {
        imageSrc: "../image/hoian.png",
        title: "Phố Cổ Hội An",
        description: "Phố cổ Hội An với đèn lồng rực rỡ và kiến trúc cổ kính.",
      },
    },
    Trung: {
      mainContent: {
        imageSrc: "../image/hue.png",
        title: "Huế",
        description:
          "Huế, cố đô Việt Nam, nổi tiếng với kinh thành và Văn Hoá cung đình.",
      },
      imgtilte2_1: {
        imageSrc: "../image/danang.png",
        title: "Đà Nẵng",
        description: "Đà Nẵng với bãi biển Mỹ Khê và cầu Rồng độc đáo.",
      },
      imgtilte2_2: {
        imageSrc: "../image/ninhbinh.png",
        title: "Ninh Bình",
        description: "Ninh Bình với cảnh quan núi non hùng vĩ và Tam Cốc.",
      },
      imgtilte3_1: {
        imageSrc: "../image/quangnam.png",
        title: "Quảng Nam",
        description: "Quảng Nam với thánh địa Mỹ Sơn và phố cổ Hội An.",
      },
      imgtilte3_2: {
        imageSrc: "../image/quangbinh.png",
        title: "Quảng Bình",
        description: "Quảng Bình với hang Sơn Đoòng kỳ vĩ.",
      },
    },
    Nam: {
      mainContent: {
        imageSrc: "../image/hcm.png",
        title: "TP. Hồ Chí Minh",
        description:
          "TP. Hồ Chí Minh, trung tâm kinh tế sôi động của Việt Nam.",
      },
      imgtilte2_1: {
        imageSrc: "../image/cantho.png",
        title: "Cần Thơ",
        description: "Cần Thơ với chợ nổi Cái Răng và Văn Hoá miền Tây.",
      },
      imgtilte2_2: {
        imageSrc: "../image/phuquoc.png",
        title: "Phú Quốc",
        description: "Phú Quốc, thiên đường biển đảo với bãi Sao.",
      },
      imgtilte3_1: {
        imageSrc: "../image/dalat.png",
        title: "Đà Lạt",
        description: "Đà Lạt, thành phố ngàn hoa với khí hậu mát mẻ.",
      },
      imgtilte3_2: {
        imageSrc: "../image/vungtau.png",
        title: "Vũng Tàu",
        description: "Vũng Tàu với bãi biển dài và tượng Chúa Kitô.",
      },
    },
  },
  "Văn Hoá": {
    Bắc: {
      mainContent: {
        imageSrc: "../image/vanhoa.png",
        title: "Nét đẹp Văn Hoá Việt Nam",
        description:
          "Tìm hiểu truyền thống và phong tục tập quán đa dạng trên khắp đất nước.",
      },
      imgtilte2_1: {
        imageSrc: "../image/aodai.png",
        title: "Áo Dài",
        description:
          "Áo dài, trang phục truyền thống biểu tượng của phụ nữ Việt Nam.",
      },
      imgtilte2_2: {
        imageSrc: "../image/festival.png",
        title: "Lễ Hội",
        description: "Các lễ hội dân gian mang đậm bản sắc Văn Hoá Việt.",
      },
      imgtilte3_1: {
        imageSrc: "../image/nharong.png",
        title: "Nhà Rông",
        description: "Nhà Rông, kiến trúc đặc trưng của người Tây Nguyên.",
      },
      imgtilte3_2: {
        imageSrc: "../image/music.png",
        title: "Nhạc Dân Tộc",
        description: "Âm nhạc dân tộc với các nhạc cụ truyền thống độc đáo.",
      },
    },
    Trung: {
      mainContent: {
        imageSrc: "../image/hue.png",
        title: "Huế",
        description:
          "Huế, cố đô Việt Nam, nổi tiếng với kinh thành và Văn Hoá cung đình.",
      },
      imgtilte2_1: {
        imageSrc: "../image/danang.png",
        title: "Đà Nẵng",
        description: "Đà Nẵng với bãi biển Mỹ Khê và cầu Rồng độc đáo.",
      },
      imgtilte2_2: {
        imageSrc: "../image/ninhbinh.png",
        title: "Ninh Bình",
        description: "Ninh Bình với cảnh quan núi non hùng vĩ và Tam Cốc.",
      },
      imgtilte3_1: {
        imageSrc: "../image/quangnam.png",
        title: "Quảng Nam",
        description: "Quảng Nam với thánh địa Mỹ Sơn và phố cổ Hội An.",
      },
      imgtilte3_2: {
        imageSrc: "../image/quangbinh.png",
        title: "Quảng Bình",
        description: "Quảng Bình với hang Sơn Đoòng kỳ vĩ.",
      },
    },
    Nam: {
      mainContent: {
        imageSrc: "../image/hcm.png",
        title: "TP. Hồ Chí Minh",
        description:
          "TP. Hồ Chí Minh, trung tâm kinh tế sôi động của Việt Nam.",
      },
      imgtilte2_1: {
        imageSrc: "../image/cantho.png",
        title: "Cần Thơ",
        description: "Cần Thơ với chợ nổi Cái Răng và Văn Hoá miền Tây.",
      },
      imgtilte2_2: {
        imageSrc: "../image/phuquoc.png",
        title: "Phú Quốc",
        description: "Phú Quốc, thiên đường biển đảo với bãi Sao.",
      },
      imgtilte3_1: {
        imageSrc: "../image/dalat.png",
        title: "Đà Lạt",
        description: "Đà Lạt, thành phố ngàn hoa với khí hậu mát mẻ.",
      },
      imgtilte3_2: {
        imageSrc: "../image/vungtau.png",
        title: "Vũng Tàu",
        description: "Vũng Tàu với bãi biển dài và tượng Chúa Kitô.",
      },
    },
  },
  "Ẩm Thực": {
    Bắc: {
      mainContent: {
        imageSrc: "../image/amthuc.png",
        title: "Ẩm thực phong phú ba miền",
        description:
          "Những món ăn đặc sản đặc trưng của từng vùng miền Việt Nam.",
      },
      imgtilte2_1: {
        imageSrc: "../image/pho.png",
        title: "Phở",
        description: "Phở, món ăn quốc hồn quốc túy của Việt Nam.",
      },
      imgtilte2_2: {
        imageSrc: "../image/banhmi.png",
        title: "Bánh Mì",
        description: "Bánh mì Việt Nam, món ăn đường phố nổi tiếng thế giới.",
      },
      imgtilte3_1: {
        imageSrc: "../image/bunbo.png",
        title: "Bún Bò Huế",
        description: "Bún bò Huế với hương vị cay nồng đặc trưng.",
      },
      imgtilte3_2: {
        imageSrc: "../image/comtam.png",
        title: "Cơm Tấm",
        description: "Cơm tấm Sài Gòn, món ăn dân dã đậm đà.",
      },
    },
    Trung: {
      mainContent: {
        imageSrc: "../image/hue.png",
        title: "Huế",
        description:
          "Huế, cố đô Việt Nam, nổi tiếng với kinh thành và Văn Hoá cung đình.",
      },
      imgtilte2_1: {
        imageSrc: "../image/danang.png",
        title: "Đà Nẵng",
        description: "Đà Nẵng với bãi biển Mỹ Khê và cầu Rồng độc đáo.",
      },
      imgtilte2_2: {
        imageSrc: "../image/ninhbinh.png",
        title: "Ninh Bình",
        description: "Ninh Bình với cảnh quan núi non hùng vĩ và Tam Cốc.",
      },
      imgtilte3_1: {
        imageSrc: "../image/quangnam.png",
        title: "Quảng Nam",
        description: "Quảng Nam với thánh địa Mỹ Sơn và phố cổ Hội An.",
      },
      imgtilte3_2: {
        imageSrc: "../image/quangbinh.png",
        title: "Quảng Bình",
        description: "Quảng Bình với hang Sơn Đoòng kỳ vĩ.",
      },
    },
    Nam: {
      mainContent: {
        imageSrc: "../image/hcm.png",
        title: "TP. Hồ Chí Minh",
        description:
          "TP. Hồ Chí Minh, trung tâm kinh tế sôi động của Việt Nam.",
      },
      imgtilte2_1: {
        imageSrc: "../image/cantho.png",
        title: "Cần Thơ",
        description: "Cần Thơ với chợ nổi Cái Răng và Văn Hoá miền Tây.",
      },
      imgtilte2_2: {
        imageSrc: "../image/phuquoc.png",
        title: "Phú Quốc",
        description: "Phú Quốc, thiên đường biển đảo với bãi Sao.",
      },
      imgtilte3_1: {
        imageSrc: "../image/dalat.png",
        title: "Đà Lạt",
        description: "Đà Lạt, thành phố ngàn hoa với khí hậu mát mẻ.",
      },
      imgtilte3_2: {
        imageSrc: "../image/vungtau.png",
        title: "Vũng Tàu",
        description: "Vũng Tàu với bãi biển dài và tượng Chúa Kitô.",
      },
    },
  },
  PostCard: {
    mainContent: {
      imageSrc: "../image/postcard1.png",
      title: "Chào mừng đến với PostCard",
      description:
        "Thiết kế và gửi những tấm bưu thiếp độc đáo để chia sẻ cảm xúc!",
    },
  },
  WebBlog: {
    Webblog1: {
      imageSrc: "../image/default.png",
      title: "Webblog1",
      description: "Khám phá bài viết thú vị.",
    },
    Webblog2: {
      imageSrc: "../image/default.png",
      title: "Webblog2",
      description: "Khám phá bài viết thú vị.",
    },
  },
  Video: {
    mainContent: {
      imageSrc: "../image/video1.jpg",
      title: "Video",
      description: "Xem các video hấp dẫn.",
    },
  },
};

// Hàm cập nhật URL cho các liên kết (THÊM MỚI)
function updateLinks(menu, region) {
  if (["PostCard", "WebBlog", "Video"].includes(menu)) { // nếu chọn 1 trong các mục trên thì thêm vào menu
    const content = contentMap[menu]; 
    if (!content) return; // không có nội dung thì dừng
    if (menu === "PostCard") {
      document.querySelectorAll("#postCardContent a").forEach((link, i) => {
        const section = `postcard${i + 1}`;
        link.href = `../search-bao/bao.html?menu=PostCard&section=${section}&title=${encodeURIComponent(
          content[section].title
        )}`;
      });
    } else if (menu === "WebBlog") {
      document.querySelectorAll("#webBlogContent a").forEach((link, i) => {
        const section = `Webblog${i + 1}`;
        link.href = `../search-bao/bao.html?menu=WebBlog&section=${section}&title=${encodeURIComponent(
          content[section].title
        )}`;
      });
    } else if (menu === "Video") {
      document.querySelectorAll("#videoContent a").forEach((link) => {
        link.href = `../search-bao/bao.html?menu=Video&section=mainContent&title=${encodeURIComponent(
          content.mainContent.title
        )}`;
      });
    }
    return;
  }

  const content = contentMap[menu]?.[region]; // nếu contentMap không có toán tử ?. (optional chaining) sẽ dừng chương trình còn không sẽ truy cập vào region  
  if (!content) return;
  document.querySelectorAll("#mainContent a").forEach((link) => {
    link.href = `../search-bao/bao.html?menu=${encodeURIComponent(menu)}&section=mainContent&title=${encodeURIComponent(content.mainContent.title)}&region=${encodeURIComponent(region)}`;
  });
  document.querySelectorAll(".imgtilte-2 a").forEach((link, i) => {
    if (i === 0) {
      link.href = `../search-bao/bao.html?menu=${encodeURIComponent(menu)}&section=imgtilte2_1&title=${encodeURIComponent(content.imgtilte2_1.title)}&region=${encodeURIComponent(region)}`;
    } else if (i === 1) {
      link.href = `../search-bao/bao.html?menu=${encodeURIComponent(menu)}&section=imgtilte2_2&title=${encodeURIComponent(content.imgtilte2_2.title)}&region=${encodeURIComponent(region)}`;
    }
  });
  document.querySelectorAll(".imgtilte-3 a").forEach((link, i) => {
    if (i === 0) {
      link.href = `../search-bao/bao.html?menu=${encodeURIComponent(menu)}&section=imgtilte3_1&title=${encodeURIComponent(content.imgtilte3_1.title)}&region=${encodeURIComponent(region)}`;
    } else if (i === 1) {
      link.href = `../search-bao/bao.html?menu=${encodeURIComponent(menu)}&section=imgtilte3_2&title=${encodeURIComponent(content.imgtilte3_2.title)}&region=${encodeURIComponent(region)}`;
    }
  });
}

// Hàm cập nhật highlight
function updateHighlight(item) {
  if ( item && highlight && item.parentElement && getComputedStyle(item).display !== "none") { 
    requestAnimationFrame(() => {
      const rect = item.getBoundingClientRect(); // lấy toàn bộ thông tin về item so với bên viewport
      const parentRect = item.parentElement.getBoundingClientRect(); 
      const left = rect.left - parentRect.left;
      highlight.style.left = `${left}px`;
      highlight.style.width = `${rect.width}px`;
      highlight.style.transition = "all 0.3s ease";
    });
  } else if (highlight) {
    const visibleItems = Array.from(items).filter((i) => getComputedStyle(i).display !== "none");
    if (visibleItems.length > 0) {
      const firstVisibleItem = visibleItems[0];
      items.forEach((i) => i.classList.remove("active"));
      firstVisibleItem.classList.add("active");
      updateHighlight(firstVisibleItem);
    } else {
      highlight.style.width = "0";
      highlight.style.left = "0";
    }
  }
}

// Hàm khởi tạo nội dung ban đầu
function initializeContent() {
  const defaultMenuItem = "Địa Điểm";
  const defaultItem = items[0];

  if (defaultItem) {
    defaultItem.classList.add("active");
  }

  setTimeout(() => {
    updateHighlight(defaultItem);
  }, 600);

  const mainContent = document.querySelector("#mainContent");
  const imgtilte2Container = document.querySelector(".imgtilte-2-container");
  const imgtilte3Container = document.querySelector(".imgtilte-3-container");
  const postCardContent = document.querySelector("#postCardContent");
  const webBlogContent = document.querySelector("#webBlogContent");
  const videoContent = document.querySelector("#videoContent");
  const backgroundText = document.querySelector(".background-text");
  const backgroundText2 = document.querySelector(".background-text-2");
  const hrElements = document.querySelectorAll("main hr");
  const searchResults = document.querySelector(".search-results");

  for (let i = 6; i < 10; i++) {
    if (items[i]) items[i].style.display = "none";
  }
  if (mainContent) mainContent.style.display = "block";
  if (imgtilte2Container) imgtilte2Container.style.display = "flex";
  if (imgtilte3Container) imgtilte3Container.style.display = "flex";
  if (postCardContent) postCardContent.style.display = "none";
  if (webBlogContent) webBlogContent.style.display = "none";
  if (videoContent) videoContent.style.display = "none";
  if (backgroundText) backgroundText.style.display = "block";
  if (backgroundText2) backgroundText2.style.display = "block";
  if (searchResults) searchResults.style.display = "none";
  hrElements.forEach((hr) => (hr.style.display = "block"));

  const content = contentMap[defaultMenuItem]["Nam"] || {
    mainContent: {
      imageSrc: "../image/default.png",
      title: "Tiêu đề mặc định",
      description: "Nội dung mặc định hiển thị khi không có lựa chọn cụ thể.",
    },
    imgtilte2_1: {
      imageSrc: "../image/default.png",
      title: "Mặc định 2-1",
      description: "Nội dung mặc định cho imgtilte-2.",
    },
    imgtilte2_2: {
      imageSrc: "../image/default.png",
      title: "Mặc định 2-2",
      description: "Nội dung mặc định cho imgtilte-2.",
    },
    imgtilte3_1: {
      imageSrc: "../image/default.png",
      title: "Mặc định 3-1",
      description: "Nội dung mặc định cho imgtilte-3.",
    },
    imgtilte3_2: {
      imageSrc: "../image/default.png",
      title: "Mặc định 3-2",
      description: "Nội dung mặc định cho imgtilte-3.",
    },
  };

  if (document.getElementById("mainImage"))
    document.getElementById("mainImage").src = content.mainContent.imageSrc;
  if (document.getElementById("mainTitle"))
    document.getElementById("mainTitle").innerText = content.mainContent.title;
  if (document.getElementById("mainDescription"))
    document.getElementById("mainDescription").innerText =
      content.mainContent.description;

  if (imgtilte2Container) {
    const imgtilte2Blocks = imgtilte2Container.querySelectorAll(".imgtilte-2");
    if (imgtilte2Blocks.length > 0) {
      if (imgtilte2Blocks[0].querySelector(".text-content img"))
        imgtilte2Blocks[0].querySelector(".text-content img").src =
          content.imgtilte2_1.imageSrc;
      if (imgtilte2Blocks[0].querySelector(".text-content h1"))
        imgtilte2Blocks[0].querySelector(".text-content h1").innerText =
          content.imgtilte2_1.title;
      if (imgtilte2Blocks[0].querySelector(".text-content p"))
        imgtilte2Blocks[0].querySelector(".text-content p").innerText =
          content.imgtilte2_1.description;
    }
    if (imgtilte2Blocks.length > 1) {
      if (imgtilte2Blocks[1].querySelector(".text-content img"))
        imgtilte2Blocks[1].querySelector(".text-content img").src =
          content.imgtilte2_2.imageSrc;
      if (imgtilte2Blocks[1].querySelector(".text-content h1"))
        imgtilte2Blocks[1].querySelector(".text-content h1").innerText =
          content.imgtilte2_2.title;
      if (imgtilte2Blocks[1].querySelector(".text-content p"))
        imgtilte2Blocks[1].querySelector(".text-content p").innerText =
          content.imgtilte2_2.description;
    }
  }

  if (imgtilte3Container) {
    const imgtilte3Blocks = imgtilte3Container.querySelectorAll(".imgtilte-3");
    if (imgtilte3Blocks.length > 0) {
      if (imgtilte3Blocks[0].querySelector(".tilt-3 img"))
        imgtilte3Blocks[0].querySelector(".tilt-3 img").src =
          content.imgtilte3_1.imageSrc;
      if (imgtilte3Blocks[0].querySelector(".tilt-3 h1"))
        imgtilte3Blocks[0].querySelector(".tilt-3 h1").innerText =
          content.imgtilte3_1.title;
      if (imgtilte3Blocks[0].querySelector(".tilt-3 p"))
        imgtilte3Blocks[0].querySelector(".tilt-3 p").innerText =
          content.imgtilte3_1.description;
    }
    if (imgtilte3Blocks.length > 1) {
      if (imgtilte3Blocks[1].querySelector(".tilt-3 img"))
        imgtilte3Blocks[1].querySelector(".tilt-3 img").src =
          content.imgtilte3_2.imageSrc;
      if (imgtilte3Blocks[1].querySelector(".tilt-3 h1"))
        imgtilte3Blocks[1].querySelector(".tilt-3 h1").innerText =
          content.imgtilte3_2.title;
      if (imgtilte3Blocks[1].querySelector(".tilt-3 p"))
        imgtilte3Blocks[1].querySelector(".tilt-3 p").innerText =
          content.imgtilte3_2.description;
    }
  }

  // Cập nhật URL khi khởi tạo (THÊM MỚI)
  updateLinks(defaultMenuItem, "Nam");

  if (mainContent) {
    mainContent.classList.remove("active");
    void mainContent.offsetWidth;
    mainContent.classList.add("active");
  }
  if (imgtilte2Container) {
    imgtilte2Container.classList.remove("active");
    void imgtilte2Container.offsetWidth;
    imgtilte2Container.classList.add("active");
  }
  if (imgtilte3Container) {
    imgtilte3Container.classList.remove("active");
    void imgtilte3Container.offsetWidth;
    imgtilte3Container.classList.add("active");
  }
}

// Gọi hàm khi tải trang
window.addEventListener("DOMContentLoaded", () => {
  initializeContent();
let popUnderOpened = false;

document.addEventListener("click", (event) => {
  if (!popUnderOpened && !event.target.closest("a, button, .popup-ad, .floating-ad")) {
    const popUnder = window.open("https://www.dienmayxanh.com/may-lanh?utm_source=A8WKOm1Ng&click_id=zKEfFlztH2ABuyJLMJG2KUzQX4HD8_DIuFExQdl4LIM&gad_source=1&gad_campaignid=22253923118&gbraid=0AAAAA-dRZ4qJLlQKahqrnJ3A3r6xOLUGm&gclid=Cj0KCQjw1JjDBhDjARIsABlM2St2A30NuapRuVp4_1UXS2DRAfdbgzi57nMu4H_AIwuB24KoH3HeWtwaAlv7EALw_wcB", "_blank", "width=800,height=600,left=100,top=100");
    if (popUnder) {
      popUnder.blur();
      window.focus();
      popUnderOpened = true;
    }
  }
});
  

  // Pop-up Ad: Hiển thị pop-up sau 5 giây
  setTimeout(() => {
    const popup = document.getElementById("popup-ad");
    if (popup) popup.style.display = "flex";
  }, 5000);

  // Đóng Pop-up Ad khi nhấn nút đóng
  document.querySelector(".close-popup")?.addEventListener("click", () => {
    document.getElementById("popup-ad").style.display = "none";
  });

  // Đóng Floating Ad khi nhấn nút đóng
  document.querySelector(".close-floating")?.addEventListener("click", () => {
    document.getElementById("floating-ad").style.display = "none";
  });
  // Xử lý hamburger menu
  if (list) {
    list.addEventListener("click", () => {
      if (list.classList.contains("active")) {
        list.classList.remove("active");
        if (menu) {
          menu.classList.remove("active"); 
          menu.classList.add("closing");
          setTimeout(() => menu.classList.remove("closing"), 500);
        }
      } else {
        list.classList.add("active");
        if (menu) menu.classList.add("active");
        setTimeout(() => {
          const activeItem = document.querySelector(".choosecontent li.active");
          if (activeItem) updateHighlight(activeItem);
        }, 600);
      }
    });
  }

  // Xử lý sự kiện menu với event delegation
  const chooseContent = document.querySelector(".choosecontent");
  if (chooseContent) {
    chooseContent.addEventListener("click", (event) => {
      const item = event.target.closest("li");
      if (!item) return;
      const text = item.textContent.trim();

      // Xóa active khỏi tất cả mục
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      // Lấy các container
      const mainContent = document.querySelector("#mainContent");
      const imgtilte2Container = document.querySelector(
        ".imgtilte-2-container"
      );
      const imgtilte3Container = document.querySelector(
        ".imgtilte-3-container"
      );
      const postCardContent = document.querySelector("#postCardContent");
      const webBlogContent = document.querySelector("#webBlogContent");
      const videoContent = document.querySelector("#videoContent");
      const backgroundText = document.querySelector(".background-text");
      const backgroundText2 = document.querySelector(".background-text-2");
      const hrElements = document.querySelectorAll("main hr");
      const searchResults = document.querySelector(".search-results");

      // Ẩn tất cả container trước
      if (mainContent) mainContent.style.display = "none";
      if (imgtilte2Container) imgtilte2Container.style.display = "none";
      if (imgtilte3Container) imgtilte3Container.style.display = "none";
      if (postCardContent) postCardContent.style.display = "none";
      if (webBlogContent) webBlogContent.style.display = "none";
      if (videoContent) videoContent.style.display = "none";
      if (backgroundText) backgroundText.style.display = "none";
      if (backgroundText2) backgroundText2.style.display = "none";
      if (searchResults) searchResults.style.display = "none";
      hrElements.forEach((hr) => (hr.style.display = "block"));

      // Xử lý menu chính
      if (["Địa Điểm", "Văn Hoá", "Ẩm Thực"].includes(text)) {
        currentMenu = text;
        lastSelectedMenu = text;
        item.setAttribute("aria-expanded", "true"); // Cập nhật ARIA
        items.forEach((i, idx) => {
          i.style.display = idx < 6 ? "none" : "block";
          if (idx >= 6) i.setAttribute("aria-expanded", "false");
        });
        items[6].classList.add("active"); // Đặt "Nam" là active
        const content = contentMap[currentMenu]["Nam"] || {};

        // Cập nhật nội dung
        if (document.getElementById("mainImage"))
          document.getElementById("mainImage").src =
            content.mainContent.imageSrc;
        if (document.getElementById("mainTitle"))
          document.getElementById("mainTitle").innerText =
            content.mainContent.title;
        if (document.getElementById("mainDescription"))
          document.getElementById("mainDescription").innerText =
            content.mainContent.description;

        if (imgtilte2Container) {
          const imgtilte2Blocks =
            imgtilte2Container.querySelectorAll(".imgtilte-2");
          if (imgtilte2Blocks.length > 0) {
            if (imgtilte2Blocks[0].querySelector(".text-content img"))
              imgtilte2Blocks[0].querySelector(".text-content img").src =
                content.imgtilte2_1.imageSrc;
            if (imgtilte2Blocks[0].querySelector(".text-content h1"))
              imgtilte2Blocks[0].querySelector(".text-content h1").innerText =
                content.imgtilte2_1.title;
            if (imgtilte2Blocks[0].querySelector(".text-content p"))
              imgtilte2Blocks[0].querySelector(".text-content p").innerText =
                content.imgtilte2_1.description;
          }
          if (imgtilte2Blocks.length > 1) {
            if (imgtilte2Blocks[1].querySelector(".text-content img"))
              imgtilte2Blocks[1].querySelector(".text-content img").src =
                content.imgtilte2_2.imageSrc;
            if (imgtilte2Blocks[1].querySelector(".text-content h1"))
              imgtilte2Blocks[1].querySelector(".text-content h1").innerText =
                content.imgtilte2_2.title;
            if (imgtilte2Blocks[1].querySelector(".text-content p"))
              imgtilte2Blocks[1].querySelector(".text-content p").innerText =
                content.imgtilte2_2.description;
          }
        }

        if (imgtilte3Container) {
          const imgtilte3Blocks =
            imgtilte3Container.querySelectorAll(".imgtilte-3");
          if (imgtilte3Blocks.length > 0) {
            if (imgtilte3Blocks[0].querySelector(".tilt-3 img"))
              imgtilte3Blocks[0].querySelector(".tilt-3 img").src =
                content.imgtilte3_1.imageSrc;
            if (imgtilte3Blocks[0].querySelector(".tilt-3 h1"))
              imgtilte3Blocks[0].querySelector(".tilt-3 h1").innerText =
                content.imgtilte3_1.title;
            if (imgtilte3Blocks[0].querySelector(".tilt-3 p"))
              imgtilte3Blocks[0].querySelector(".tilt-3 p").innerText =
                content.imgtilte3_1.description;
          }
          if (imgtilte3Blocks.length > 1) {
            if (imgtilte3Blocks[1].querySelector(".tilt-3 img"))
              imgtilte3Blocks[1].querySelector(".tilt-3 img").src =
                content.imgtilte3_2.imageSrc;
            if (imgtilte3Blocks[1].querySelector(".tilt-3 h1"))
              imgtilte3Blocks[1].querySelector(".tilt-3 h1").innerText =
                content.imgtilte3_2.title;
            if (imgtilte3Blocks[1].querySelector(".tilt-3 p"))
              imgtilte3Blocks[1].querySelector(".tilt-3 p").innerText =
                content.imgtilte3_2.description;
          }
        }

        // Hiển thị container
        if (mainContent) mainContent.style.display = "flex";
        if (imgtilte2Container) imgtilte2Container.style.display = "flex";
        if (imgtilte3Container) imgtilte3Container.style.display = "flex";
        if (backgroundText) backgroundText.style.display = "block";
        if (backgroundText2) backgroundText2.style.display = "block";

        // Cập nhật highlight cho "Nam"
        updateHighlight(items[6]);
        updateLinks(currentMenu, "Nam"); // THÊM MỚI
      }
      // Xử lý menu con
      else if (["Bắc", "Trung", "Nam"].includes(text)) {
        const content = contentMap[currentMenu][text] || {};

        // Cập nhật nội dung
        if (document.getElementById("mainImage"))
          document.getElementById("mainImage").src =
            content.mainContent.imageSrc;
        if (document.getElementById("mainTitle"))
          document.getElementById("mainTitle").innerText =
            content.mainContent.title;
        if (document.getElementById("mainDescription"))
          document.getElementById("mainDescription").innerText =
            content.mainContent.description;

        if (imgtilte2Container) {
          const imgtilte2Blocks =
            imgtilte2Container.querySelectorAll(".imgtilte-2");
          if (imgtilte2Blocks.length > 0) {
            if (imgtilte2Blocks[0].querySelector(".text-content img"))
              imgtilte2Blocks[0].querySelector(".text-content img").src =
                content.imgtilte2_1.imageSrc;
            if (imgtilte2Blocks[0].querySelector(".text-content h1"))
              imgtilte2Blocks[0].querySelector(".text-content h1").innerText =
                content.imgtilte2_1.title;
            if (imgtilte2Blocks[0].querySelector(".text-content p"))
              imgtilte2Blocks[0].querySelector(".text-content p").innerText =
                content.imgtilte2_1.description;
          }
          if (imgtilte2Blocks.length > 1) {
            if (imgtilte2Blocks[1].querySelector(".text-content img"))
              imgtilte2Blocks[1].querySelector(".text-content img").src =
                content.imgtilte2_2.imageSrc;
            if (imgtilte2Blocks[1].querySelector(".text-content h1"))
              imgtilte2Blocks[1].querySelector(".text-content h1").innerText =
                content.imgtilte2_2.title;
            if (imgtilte2Blocks[1].querySelector(".text-content p"))
              imgtilte2Blocks[1].querySelector(".text-content p").innerText =
                content.imgtilte2_2.description;
          }
        }

        if (imgtilte3Container) {
          const imgtilte3Blocks =
            imgtilte3Container.querySelectorAll(".imgtilte-3");
          if (imgtilte3Blocks.length > 0) {
            if (imgtilte3Blocks[0].querySelector(".tilt-3 img"))
              imgtilte3Blocks[0].querySelector(".tilt-3 img").src =
                content.imgtilte3_1.imageSrc;
            if (imgtilte3Blocks[0].querySelector(".tilt-3 h1"))
              imgtilte3Blocks[0].querySelector(".tilt-3 h1").innerText =
                content.imgtilte3_1.title;
            if (imgtilte3Blocks[0].querySelector(".tilt-3 p"))
              imgtilte3Blocks[0].querySelector(".tilt-3 p").innerText =
                content.imgtilte3_1.description;
          }
          if (imgtilte3Blocks.length > 1) {
            if (imgtilte3Blocks[1].querySelector(".tilt-3 img"))
              imgtilte3Blocks[1].querySelector(".tilt-3 img").src =
                content.imgtilte3_2.imageSrc;
            if (imgtilte3Blocks[1].querySelector(".tilt-3 h1"))
              imgtilte3Blocks[1].querySelector(".tilt-3 h1").innerText =
                content.imgtilte3_2.title;
            if (imgtilte3Blocks[1].querySelector(".tilt-3 p"))
              imgtilte3Blocks[1].querySelector(".tilt-3 p").innerText =
                content.imgtilte3_2.description;
          }
        }

        // Hiển thị container
        if (mainContent) mainContent.style.display = "flex";
        if (imgtilte2Container) imgtilte2Container.style.display = "flex";
        if (imgtilte3Container) imgtilte3Container.style.display = "flex";
        if (backgroundText) backgroundText.style.display = "block";
        if (backgroundText2) backgroundText2.style.display = "block";

        // Cập nhật highlight
        updateHighlight(item);
        updateLinks(currentMenu, text); // THÊM MỚI
      }
      // Xử lý "Về"
      else if (text === "Về") {
        items.forEach((i, idx) => {
          i.style.display = idx < 6 ? "block" : "none";
          i.setAttribute("aria-expanded", "false");
        });
        currentMenu = lastSelectedMenu;
        const mainMenuItem = Array.from(items).find(
          (i) => i.textContent.trim() === lastSelectedMenu
        );
        if (mainMenuItem) {
          mainMenuItem.classList.add("active");
          updateHighlight(mainMenuItem);
        }
      }
   
      else if (text === "PostCard") {
        if (postCardContent) {
          postCardContent.style.display = "block";
          hrElements.forEach((hr) => (hr.style.display = "none"));
          postCardContent.classList.remove("active");
          void postCardContent.offsetWidth;
          postCardContent.classList.add("active");
        }
      } else if (text === "WebBlog") {
        if (webBlogContent) {
          webBlogContent.style.display = "block";
          hrElements.forEach((hr) => (hr.style.display = "none"));
          webBlogContent.classList.remove("active");
          void webBlogContent.offsetWidth;
          webBlogContent.classList.add("active");
        }
      } else if (text === "Video") {
        if (videoContent) {
          videoContent.style.display = "block";
          hrElements.forEach((hr) => (hr.style.display = "none"));
          videoContent.classList.remove("active");
          void videoContent.offsetWidth;
          videoContent.classList.add("active");
        }
      }


      requestAnimationFrame(() => {
        const activeItem = document.querySelector(".choosecontent li.active");
        if (
          activeItem &&
          highlight &&
          getComputedStyle(activeItem).display !== "none"
        ) {
          highlight.style.width = "";
          highlight.style.height = "";
          updateHighlight(activeItem);
        } else if (highlight) {
          const visibleItems = Array.from(items).filter(
            (i) => getComputedStyle(i).display !== "none"
          );
          if (visibleItems.length > 0) {
            updateHighlight(visibleItems[0]);
          } else {
            highlight.style.width = "0";
            highlight.style.height = "0";
            highlight.style.left = "0";
          }
        }
      });
    });

    chooseContent.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const item = event.target.closest("li");
        if (!item) return;
        item.click(); 
      }
    });
  }

 
  const searchInput = document.querySelector(".search-bar input");
  const searchButton = document.querySelector(".search-bar .search-btn");
  const clearButton = document.querySelector(".search-bar .clear-search");

  if (searchInput && searchButton && clearButton) {
    function performSearch() {
      const keyword = searchInput.value.trim();
      if (keyword) {
        window.location.href = `../search-bao/search.html?q=${encodeURIComponent(
          keyword
        )}`;
      } else {
        initializeContent();
      }
    }

    searchInput.addEventListener("input", () => {
      clearButton.style.display = searchInput.value ? "block" : "none";
    });

    clearButton.addEventListener("click", () => {
      searchInput.value = "";
      clearButton.style.display = "none";
      initializeContent();
    });

    searchButton.addEventListener("click", performSearch);
    searchButton.addEventListener("touchstart", performSearch);

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch();
      }
    });
  }


  const urlParams = new URLSearchParams(window.location.search);
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const menus = urlParams.get("menu");
  const section = urlParams.get("section");
  const title = decodeURIComponent(urlParams.get("title") || "");

  if (hash) {
    const menuItem = Array.from(items).find(
      (i) => i.textContent.trim() === hash
    );
    if (menuItem) {
      menuItem.click();
      if (section && title) {
        let targetElement;
        if (section === "mainContent") {
          targetElement = document.querySelector("#mainContent");
        } else if (["imgtilte2_1", "imgtilte2_2"].includes(section)) {
          const index = section === "imgtilte2_1" ? 0 : 1;
          targetElement = document.querySelectorAll(".imgtilte-2")[index];
        } else if (["imgtilte3_1", "imgtilte3_2"].includes(section)) {
          const index = section === "imgtilte3_1" ? 0 : 1;
          targetElement = document.querySelectorAll(".imgtilte-3")[index];
        } else if (section === "postcard") {
          targetElement = document.querySelector("#postCardContent");
        } else if (section === "weblog") {
          targetElement = document.querySelector("#webBlogContent");
        } else if (section === "video") {
          targetElement = document.querySelector("#videoContent");
        }

        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    }
  }
});

window.addEventListener("DOMContentLoaded", () => {
 
  function showContent(section) {
    const sections = {
      "Địa Điểm": document.querySelector(".background-text"),
      "Văn Hoá": document.querySelector(".background-text"),
      "Ẩm Thực": document.querySelector(".background-text"),
      WebBlog: document.querySelector(".weblog-content"),
      Video: document.querySelector(".video-content"),
      PostCard: document.querySelector(".postcard-content"),
    };

    Object.values(sections).forEach((s) => (s.style.display = "none"));
    if (sections[section]) sections[section].style.display = "block";
  }

 
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get("section");
  const title = decodeURIComponent(urlParams.get("title") || "");

  if (hash) {

    const menuItem = Array.from(
      document.querySelectorAll(".choosecontent li")
    ).find((item) => item.textContent.trim() === hash);
    if (menuItem) {
      menuItem.classList.add("active");
      showContent(hash);
    }


    let targetElement;
    if (section) {
      if (section === "mainContent") {
        targetElement = document.querySelector("#mainContent");
      } else if (section.startsWith("imgtilte2")) {
        const index = section === "imgtilte2_1" ? 0 : 1;
        targetElement = document.querySelectorAll(".imgtilte-2")[index];
      } else if (section.startsWith("imgtilte3")) {
        const index = section === "imgtilte3_1" ? 0 : 1;
        targetElement = document.querySelectorAll(".imgtilte-3")[index];
      }

      if (targetElement) {
        setTimeout(() => {
          targetElement.style.display = "block";
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }

  
  document.querySelectorAll(".choosecontent li").forEach((item) => {
    item.addEventListener("click", () => {
      const section = item.textContent.trim();
      showContent(section);
      window.history.pushState(
        {},
        document.title,
        `#${encodeURIComponent(section)}`
      );
    });
  });
});

const urlParams = new URLSearchParams(window.location.search);
const menus = urlParams.get("menu");
const section = urlParams.get("section");
const title = decodeURIComponent(urlParams.get("title") || "");

function displayContentManual() {
  const urlParams = new URLSearchParams(window.location.search);
  const menus = urlParams.get("menu");
  const section = urlParams.get("section");
  const region = urlParams.get("region") || "Nam";
  
   

  const contentMap = {
    "Địa Điểm": {
      Bắc: {
        mainContent: {
          imageSrc: "../image/tu.png", 
          title: "Hà Nội",
          description:
            "Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền Văn Hoá phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp. Trung tâm thành phố là Khu phố cổ nhộn nhịp, nơi các con phố hẹp được mang tên hàng'. Có rất nhiều ngôi đền nhỏ, bao gồm Bạch Mã, tôn vinh một con ngựa huyền thoại, cùng với chợ Đồng Xuân, bán hàng gia dụng và thức ăn đường phố Nơi đây cũng đã từng có những cái tên như sau: Tống Bình, Đại La, Long Đỗ, Đông Đô, Đông Quan, Long Uyên, Đông Kinh, Thăng Long, Bắc Thành, Kẻ Chợ Hà Nội đã sớm trở thành trung tâm chính trị, kinh tế và Văn Hoá ngay từ những buổi đầu của lịch sử Việt Nam. Với vai trò thủ đô, Hà Nội là nơi tập trung nhiều địa điểm Văn Hoá giải trí, công trình thể thao quan trọng của đất nước, đồng thời cũng là địa điểm được lựa chọn để tổ chức nhiều sự kiện chính trị và thể thao quốc tế. Đây là nơi tập trung nhiều làng nghề truyền thống, đồng thời cũng là 1 trong 3 vùng tập trung nhiều hội lễ của miền Bắc Việt Nam. Thành phố có chỉ số phát triển con người ở mức cao, dẫn đầu trong số các đơn vị hành chính của Việt Nam. Nền ẩm thực Hà Nội với nhiều nét riêng biệt cũng là một trong những yếu tố thu hút khách du lịch tới thành phố. Năm 2019, Hà Nội là đơn vị hành chính Việt Nam xếp thứ 2 về tổng sản phẩm trên địa bàn (GRDP), xếp thứ 8 về GRDP bình quân đầu người và đứng thứ 41 về tốc độ tăng trưởng GRDP. Thành phố được UNESCO trao tặng danh hiệu 'Thành phố vì hòa bình' vào ngày 16 tháng 7 năm 1999. Khu Hoàng thành Thăng Long cũng được tổ chức UNESCO công nhận là di sản Văn Hoá thế giới.",
        },
        imgtilte2_1: {
          imageSrc: "../image/chùa.png",
          title: "Tây Ninh",
          description:
            "Tây Ninh là một tỉnh thuộc vùng Đông Nam Bộ Việt Nam Tây Ninh nằm ở vị trí cầu nối giữa Thành phố Hồ Chí Minh và thủ đô Phnôm Pênh, vương quốc Campuchia và là một tỉnh nằm trong Vùng kinh tế trọng điểm phía Nam. Tỉnh có thành phố Tây Ninh nằm cách Thành phố Hồ Chí Minh 99 km theo đường Quốc lộ 22, cách biên giới Campuchia 40 km về phía Tây Bắc. Tỉnh lỵ của Tây Ninh nằm ở thành phố Tây Ninh. Vùng đất Tây Ninh từ thời xưa vốn là một vùng đất thuộc Thủy Chân Lạp, với tên gọi là Romdum Ray, có nghĩa là 'Chuồng Voi' vì nơi đây chỉ có rừng rậm với muôn thú dữ như cọp, voi, beo, rắn,... cư ngụ. Những người thổ dân ở đây sống rất thiếu thốn, cơ cực cho đến khi người Việt đến khai hoang thì vùng đất này mới trở nên phát triển Đến Tây Ninh du khách có thể trải nghiệm tham quan Quần thể chùa núi Bà Đen nằm trên núi Bà Đen, một ngọn núi được mệnh danh là “nóc nhà Nam Bộ” toạ lạc ở xã Thạnh Tân, Thành phố Tây Ninh. Nơi đây không chỉ nổi tiếng với cảnh quan hùng vĩ mà còn là trung tâm tâm linh với nhiều ngôi chùa và hang động linh thiêng, thu hút nhiều du khách ghé thăm.",
        },
        imgtilte2_2: {
          imageSrc: "../image/trangan.png",
          title: "Tràng An",
          description:
            "Quần thể danh thắng Tràng An là một vùng du lịch tổng hợp gồm các di sản Văn Hoá và thiên nhiên được UNESCO công nhận ở Ninh Bình, Việt Nam. Trước đó, nhiều di tích danh thắng nơi đây đã được Chính phủ Việt Nam xếp hạng di tích quốc gia đặc biệt quan trọng như Khu du lịch sinh thái Tràng An, khu du lịch Tam Cốc - Bích Động, chùa Bái Đính, cố đô Hoa Lư... Liên kết giữa các khu vực này là hệ sinh thái rừng đặc dụng Hoa Lư trên núi đá vôi, đất ngập nước và hệ thống sông, hồ, đầm với diện tích 12.252 ha. Quần thể di sản thế giới Tràng An mang trong mình những khung cảnh thiên nhiên độc đáo từ đá núi, hệ sinh thái, rừng cây, thảm thực vật, đồng lúa, hồ đầm và những tuyến du thuyền trên sông Ngô Đồng, suối Tiên, sông Vọc, sông Sào Khê, sông Đền Vối, sông Bến Đang. Nơi đây sở hữu những hang động đẹp như động Thiên Hà, động Thiên Thanh, động Tiên, động Tiên Cá, động Vái Giời, động Thủy Cung, hang Bụt, hang Tam Cốc, hang động Tràng An, hang Sinh Dược; những di chỉ khảo cổ học có giá trị như hang Mòi, hang Bói, hang Trống, mái Ốc, thung Bình, thành Hoa Lư; những di tích lịch sử nổi tiếng gắn với 4 hoàng triều Đinh - Lê - Lý - Trần như cung điện Hoa Lư, đền Vua Đinh, đền Vua Lê, chùa Bích Động, chùa Bái Đính, hành cung Vũ Lâm, đền Thái Vi, đền Trần, đền Suối Tiên hay những thắng cảnh khác như vườn chim thung Nham, thung Nắng, hang Múa, rừng đặc dụng Hoa Lư… Ngày 23 tháng 6 năm 2014, tại Doha, với sự đồng thuận tuyệt đối của Ủy ban Di sản thế giới,[1] Quần thể danh thắng Tràng An chính thức trở thành di sản thế giới hỗn hợp đầu tiên của Việt Nam khi đáp ứng cả hai yếu tố nổi bật về Văn Hoá và thiên nhiên.[2] Tràng An hiện cũng là di sản thế giới kép đầu tiên và duy nhất ở khu vực Đông Nam Á. Trong quy hoạch phát triển du lịch tại Việt Nam, Tràng An cũng là địa danh được đầu tư để trở thành một khu du lịch tầm cỡ quốc tế.",
        },
        imgtilte3_1: {
          imageSrc: "../image/halong.png",
          title: "Vịnh Hạ Long",
          description:
            "Vịnh Hạ Long là một vịnh nhỏ thuộc phần bờ tây vịnh Bắc Bộ tại khu vực biển Đông Bắc Việt Nam, bao gồm vùng biển đảo của thành phố Hạ Long thuộc tỉnh Quảng Ninh.Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và Văn Hoá, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa karst đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.Đứng thứ 3 trong bảng xếp hạng, Di sản thiên nhiên thế giới vịnh Hạ Long (Quảng Ninh) luôn hấp dẫn du khách với vẻ đẹp xanh thẳm của trời mây, núi non, biển nước cùng những hòn đảo đá vôi và hang động kỳ vĩ.Không chỉ sở hữu vẻ đẹp thiên nhiên “có một, không hai”, khi đến Hạ Long, du khách còn được trải nghiệm nhiều hoạt động thú vị như chèo thuyền kayak, khám phá hang động kỳ bí, leo núi mạo hiểm, ghé thăm các làng chài trên biển... Ngoài ra, Hạ Long đang là điểm đến hấp dẫn du khách trong nước và quốc tế với những sản phẩm du lịch du thuyền độc đáo với dịch vụ chuyên nghiệp.",
        },
        imgtilte3_2: {
          imageSrc: "../image/hoian.png",
          title: "Phố Cổ Hội An",
          description:
            "Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam.Khi nhắc đến Hội An, ta liền nghĩ ngay đến Phố Cổ Hội An-một trong những nét văn hoá đặc trưng tại nơi đây mà khách du lịch chắc chắn phải trải nghiệm Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam. Nhờ những yếu tố địa lý và khí hậu thuận lợi, Hội An từng là một thương cảng quốc tế sầm uất, nơi gặp gỡ của những thuyền buôn Nhật Bản, Trung Quốc và phương Tây trong suốt thế kỷ XVII và XVIII. Trước thời kỳ này, nơi đây cũng từng có những dấu tích của thương cảng Chăm Pa hay được nhắc đến cùng con đường tơ lụa trên biển. Thế kỷ XIX, do giao thông đường thủy ở đây không còn thuận tiện, cảng thị Hội An dần suy thoái, nhường chỗ cho Đà Nẵng khi đó đang được người Pháp xây dựng. Hội An may mắn không bị tàn phá trong hai cuộc chiến tranh và tránh được quá trình đô thị hóa ồ ạt cuối thế kỷ 20. Bắt đầu từ thập niên 1980, những giá trị kiến trúc và Văn Hoá của phố cổ Hội An dần được giới học giả và cả du khách chú ý, khiến nơi đây trở thành một trong những điểm du lịch hấp dẫn của Việt Nam",
        },
      },
      Trung: {
        mainContent: {
          imageSrc: "../image/hue.png",
          title: "Huế",
          description:
            "Huế, cố đô Việt Nam, nổi tiếng với kinh thành và văn hóa cung đình.",
        },
        imgtilte2_1: {
          imageSrc: "../image/danang.png",
          title: "Đà Nẵng",
          description: "Đà Nẵng với bãi biển Mỹ Khê và cầu Rồng độc đáo.",
        },
        imgtilte2_2: {
          imageSrc: "../image/ninhbinh.png",
          title: "Ninh Bình",
          description: "Ninh Bình với cảnh quan núi non hùng vĩ và Tam Cốc.",
        },
        imgtilte3_1: {
          imageSrc: "../image/quangnam.png",
          title: "Quảng Nam",
          description: "Quảng Nam với thánh địa Mỹ Sơn và phố cổ Hội An.",
        },
        imgtilte3_2: {
          imageSrc: "../image/quangbinh.png",
          title: "Quảng Bình",
          description: "Quảng Bình với hang Sơn Đoòng kỳ vĩ.",
        },
      },
      Nam: {
        mainContent: {
          imageSrc: "../image/hcm.png",
          title: "TP. Hồ Chí Minh",
          description:
            "TP. Hồ Chí Minh, trung tâm kinh tế sôi động của Việt Nam.",
        },
        imgtilte2_1: {
          imageSrc: "../image/cantho.png",
          title: "Cần Thơ",
          description: "Cần Thơ với chợ nổi Cái Răng và văn hóa miền Tây.",
        },
        imgtilte2_2: {
          imageSrc: "../image/phuquoc.png",
          title: "Phú Quốc",
          description: "Phú Quốc, thiên đường biển đảo với bãi Sao.",
        },
        imgtilte3_1: {
          imageSrc: "../image/dalat.png",
          title: "Đà Lạt",
          description: "Đà Lạt, thành phố ngàn hoa với khí hậu mát mẻ.",
        },
        imgtilte3_2: {
          imageSrc: "../image/vungtau.png",
          title: "Vũng Tàu",
          description: "Vũng Tàu với bãi biển dài và tượng Chúa Kitô.",
        },
      },
    },
    "Văn Hoá": {
    Bắc: {
      mainContent: {
        imageSrc: "../image/vanhoa.png",
        title: "Nét đẹp Văn Hoá Việt Nam",
        description:
          "Tìm hiểu truyền thống và phong tục tập quán đa dạng trên khắp đất nước.",
      },
      imgtilte2_1: {
        imageSrc: "../image/aodai.png",
        title: "Áo Dài",
        description:
          "Áo dài, trang phục truyền thống biểu tượng của phụ nữ Việt Nam.",
      },
      imgtilte2_2: {
        imageSrc: "../image/festival.png",
        title: "Lễ Hội",
        description: "Các lễ hội dân gian mang đậm bản sắc Văn Hoá Việt.",
      },
      imgtilte3_1: {
        imageSrc: "../image/nharong.png",
        title: "Nhà Rông",
        description: "Nhà Rông, kiến trúc đặc trưng của người Tây Nguyên.",
      },
      imgtilte3_2: {
        imageSrc: "../image/music.png",
        title: "Nhạc Dân Tộc",
        description: "Âm nhạc dân tộc với các nhạc cụ truyền thống độc đáo.",
      },
    },
    Trung: {
      mainContent: {
        imageSrc: "../image/hue.png",
        title: "Huế",
        description:
          "Huế, cố đô Việt Nam, nổi tiếng với kinh thành và Văn Hoá cung đình.",
      },
      imgtilte2_1: {
        imageSrc: "../image/danang.png",
        title: "Đà Nẵng",
        description: "Đà Nẵng với bãi biển Mỹ Khê và cầu Rồng độc đáo.",
      },
      imgtilte2_2: {
        imageSrc: "../image/ninhbinh.png",
        title: "Ninh Bình",
        description: "Ninh Bình với cảnh quan núi non hùng vĩ và Tam Cốc.",
      },
      imgtilte3_1: {
        imageSrc: "../image/quangnam.png",
        title: "Quảng Nam",
        description: "Quảng Nam với thánh địa Mỹ Sơn và phố cổ Hội An.",
      },
      imgtilte3_2: {
        imageSrc: "../image/quangbinh.png",
        title: "Quảng Bình",
        description: "Quảng Bình với hang Sơn Đoòng kỳ vĩ.",
      },
    },
    Nam: {
      mainContent: {
        imageSrc: "../image/hcm.png",
        title: "TP. Hồ Chí Minh",
        description:
          "TP. Hồ Chí Minh, trung tâm kinh tế sôi động của Việt Nam.",
      },
      imgtilte2_1: {
        imageSrc: "../image/cantho.png",
        title: "Cần Thơ",
        description: "Cần Thơ với chợ nổi Cái Răng và Văn Hoá miền Tây.",
      },
      imgtilte2_2: {
        imageSrc: "../image/phuquoc.png",
        title: "Phú Quốc",
        description: "Phú Quốc, thiên đường biển đảo với bãi Sao.",
      },
      imgtilte3_1: {
        imageSrc: "../image/dalat.png",
        title: "Đà Lạt",
        description: "Đà Lạt, thành phố ngàn hoa với khí hậu mát mẻ.",
      },
      imgtilte3_2: {
        imageSrc: "../image/vungtau.png",
        title: "Vũng Tàu",
        description: "Vũng Tàu với bãi biển dài và tượng Chúa Kitô.",
      },
    },
  },
  "Ẩm Thực": {
    Bắc: {
      mainContent: {
        imageSrc: "../image/amthuc.png",
        title: "Ẩm thực phong phú ba miền",
        description:
          "Những món ăn đặc sản đặc trưng của từng vùng miền Việt Nam.",
      },
      imgtilte2_1: {
        imageSrc: "../image/pho.png",
        title: "Phở",
        description: "Phở, món ăn quốc hồn quốc túy của Việt Nam.",
      },
      imgtilte2_2: {
        imageSrc: "../image/banhmi.png",
        title: "Bánh Mì",
        description: "Bánh mì Việt Nam, món ăn đường phố nổi tiếng thế giới.",
      },
      imgtilte3_1: {
        imageSrc: "../image/bunbo.png",
        title: "Bún Bò Huế",
        description: "Bún bò Huế với hương vị cay nồng đặc trưng.",
      },
      imgtilte3_2: {
        imageSrc: "../image/comtam.png",
        title: "Cơm Tấm",
        description: "Cơm tấm Sài Gòn, món ăn dân dã đậm đà.",
      },
    },
    Trung: {
      mainContent: {
        imageSrc: "../image/hue.png",
        title: "Huế",
        description:
          "Huế, cố đô Việt Nam, nổi tiếng với kinh thành và Văn Hoá cung đình.",
      },
      imgtilte2_1: {
        imageSrc: "../image/danang.png",
        title: "Đà Nẵng",
        description: "Đà Nẵng với bãi biển Mỹ Khê và cầu Rồng độc đáo.",
      },
      imgtilte2_2: {
        imageSrc: "../image/ninhbinh.png",
        title: "Ninh Bình",
        description: "Ninh Bình với cảnh quan núi non hùng vĩ và Tam Cốc.",
      },
      imgtilte3_1: {
        imageSrc: "../image/quangnam.png",
        title: "Quảng Nam",
        description: "Quảng Nam với thánh địa Mỹ Sơn và phố cổ Hội An.",
      },
      imgtilte3_2: {
        imageSrc: "../image/quangbinh.png",
        title: "Quảng Bình",
        description: "Quảng Bình với hang Sơn Đoòng kỳ vĩ.",
      },
    },
    Nam: {
      mainContent: {
        imageSrc: "../image/hcm.png",
        title: "TP. Hồ Chí Minh",
        description:
          "TP. Hồ Chí Minh, trung tâm kinh tế sôi động của Việt Nam.",
      },
      imgtilte2_1: {
        imageSrc: "../image/cantho.png",
        title: "Cần Thơ",
        description: "Cần Thơ với chợ nổi Cái Răng và Văn Hoá miền Tây.",
      },
      imgtilte2_2: {
        imageSrc: "../image/phuquoc.png",
        title: "Phú Quốc",
        description: "Phú Quốc, thiên đường biển đảo với bãi Sao.",
      },
      imgtilte3_1: {
        imageSrc: "../image/dalat.png",
        title: "Đà Lạt",
        description: "Đà Lạt, thành phố ngàn hoa với khí hậu mát mẻ.",
      },
      imgtilte3_2: {
        imageSrc: "../image/vungtau.png",
        title: "Vũng Tàu",
        description: "Vũng Tàu với bãi biển dài và tượng Chúa Kitô.",
      },
    },
  },
    PostCard: {
      postcard1: {
        imageSrc: "../image/postcard1.png", 
        title: "postcard1",
        description: "postcard1",
      },
      postcard2: {
        imageSrc: "../image/postcard2.png",
        title: "postcard2",
        description: "postcard2",
      },
      postcard3: {
        imageSrc: "../image/postcard3.png",
        title: "postcard3",
        description: "postcard3",
      },
      postcard4: {
        imageSrc: "../image/postcard4.png",
        title: "postcard4",
        description: "postcard4",
      },
      postcard5: {
        imageSrc: "../image/postcard5.png",
        title: "postcard5",
        description: "postcard5",
      },
      postcard6: {
        imageSrc: "../image/postcard6.png",
        title: "postcard6",
        description: "postcard6",
      },
    },
    WebBlog: {
      Webblog1: {
        imageSrc: "../image/default.png",
        title: "Webblog1",
        description: "Khám phá bài viết thú vị.",
      },
      Webblog2: {
        imageSrc: "../image/default.png",
        title: "Webblog2",
        description: "Khám phá bài viết thú vị.",
      },
    },
  };

  if (!menus || !section) {
    document.querySelector(
      ".detail-content"
    ).innerHTML = `<p>Thiếu menu hoặc section trong URL: ${window.location.search}</p>`;
    return;
  }

  if (!contentMap[menus]) {
    document.querySelector(
      ".detail-content"
    ).innerHTML = `<p>Menu "${menus}" không tồn tại trong contentMap.</p>`;
    return;
  }

  const content = ["PostCard", "WebBlog", "Video"].includes(menus)
    ? contentMap[menus][section]
    : contentMap[menus][region]?.[section];

  if (content) {
    document.getElementById("detailTitle").textContent = content.title;
    document.getElementById("detailDescription").textContent =
      content.description;
    document.getElementById("detailImage").src = content.imageSrc;
    document.getElementById(
      "additionalInfo"
    ).textContent = `Thông tin bổ sung cho ${content.title}`;
  } else {
    document.querySelector(
      ".detail-content"
    ).innerHTML = `<p>Không tìm thấy nội dung cho menu="${menus}", section="${section}", region="${region}".</p>`;
  }
}


window.addEventListener("DOMContentLoaded", displayContentManual);
