// Object mapping cho các mục menu
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
  PostCast: {
    mainContent: {
      imageSrc: "../image/postcard1.png",
      title: "Chào mừng đến với PostCast",
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

// Dữ liệu tĩnh cho PostCast, WebBlog, Video (giả lập từ index.html)
const staticContent = {
  PostCast: [
    { title: "Chào mừng đến với PostCast", description: "Thiết kế và gửi những tấm bưu thiếp độc đáo để chia sẻ cảm xúc!", imageSrc: "../image/postcard1.png" },
    { title: "PostCast 2", description: "Nội dung PostCast", imageSrc: "../image/postcard2.png" },
  ],
  WebBlog: [
    { title: "Tiêu đề bài viết 1", description: "Đoạn trích của bài viết blog 1...", imageSrc: "../image/default.png" },
    { title: "Tiêu đề bài viết 2", description: "Đoạn trích của bài viết blog 2...", imageSrc: "../image/default.png" },
  ],
  Video: [
    { title: "Tiêu đề Video 1", description: "Nội dung Video 1", imageSrc: "../image/video1.jpg" },
    { title: "Tiêu đề Video 2", description: "Nội dung Video 2", imageSrc: "../image/video2.jpg" },
  ],
};

// Xử lý hamburger menu
const list = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".Menu");

list.addEventListener("click", () => {
  list.classList.toggle("active");
  menu.classList.toggle("active");
});

// Xử lý tìm kiếm
const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar .search-btn");
const clearButton = document.querySelector(".search-bar .clear-search");
const resultsList = document.querySelector(".results-list");

function performSearch(keyword) {
  keyword = keyword.trim().toLowerCase();
  resultsList.innerHTML = "";

  if (!keyword) {
    resultsList.innerHTML = '<p>Vui lòng nhập từ khóa tìm kiếm.</p>';
    return;
  }

  let results = [];

  // Tìm trong contentMap
  for (const menuItem in contentMap) {
    const content = contentMap[menuItem];
    if (["PostCast", "WebBlog", "Video"].includes(menuItem)) {
      const fields = [
        { ...content.mainContent, type: "main", menu: menuItem, section: "mainContent" },
        ...(content.Webblog1 ? [{ ...content.Webblog1, type: "webblog", menu: menuItem, section: "Webblog1" }] : []),
        ...(content.Webblog2 ? [{ ...content.Webblog2, type: "webblog", menu: menuItem, section: "Webblog2" }] : []),
      ];
      fields.forEach((field) => {
        if (field.title?.toLowerCase().includes(keyword) || (field.description?.toLowerCase().includes(keyword))) {
          results.push({
            title: field.title,
            description: field.description,
            imageSrc: field.imageSrc,
            menu: menuItem,
            type: field.type,
            section: field.section,
          });
        }
      });
    } else {
      for (const region in content) {
        const regionContent = content[region];
        const fields = [
          { ...regionContent.mainContent, type: "main", menu: menuItem, section: "mainContent", region },
          { ...regionContent.imgtilte2_1, type: "imgtilte2", menu: menuItem, section: "imgtilte2_1", region },
          { ...regionContent.imgtilte2_2, type: "imgtilte2", menu: menuItem, section: "imgtilte2_2", region },
          { ...regionContent.imgtilte3_1, type: "imgtilte3", menu: menuItem, section: "imgtilte3_1", region },
          { ...regionContent.imgtilte3_2, type: "imgtilte3", menu: menuItem, section: "imgtilte3_2", region },
        ];
        fields.forEach((field) => {
          if (field.title?.toLowerCase().includes(keyword) || (field.description?.toLowerCase().includes(keyword))) {
            results.push({
              title: field.title,
              description: field.description,
              imageSrc: field.imageSrc,
              menu: menuItem,
              type: field.type,
              section: field.section,
              region,
            });
          }
        });
      }
    }
  }

  // Tìm trong staticContent
  for (const menuItem in staticContent) {
    staticContent[menuItem].forEach((item, index) => {
      if (item.title.toLowerCase().includes(keyword) || (item.description?.toLowerCase().includes(keyword))) {
        let section;
        if (menuItem === "PostCast") {
          section = `postcard${index + 1}`;
        } else if (menuItem === "WebBlog") {
          section = `Webblog${index + 1}`;
        } else if (menuItem === "Video") {
          section = index === 0 ? "mainContent" : `video${index + 1}`;
        }
        results.push({
          title: item.title,
          description: item.description,
          imageSrc: item.imageSrc,
          menu: menuItem,
          type: menuItem.toLowerCase(),
          section,
        });
      }
    });
  }

  // Loại bỏ trùng lặp
  results = [...new Set(results.map((r) => JSON.stringify(r)))].map((r) => JSON.parse(r));

  // Hiển thị kết quả
  if (results.length === 0) {
    resultsList.innerHTML = `<p>Không tìm thấy kết quả phù hợp.</p>`;
  } else {
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      const regionParam = result.region ? `&region=${encodeURIComponent(result.region)}` : '';
      resultItem.innerHTML = `
        <img src="${result.imageSrc || "../image/default.png"}" alt="${result.title}" onerror="this.src='../image/default.png'" />
        <div class="result-content">
          <h2>${result.title}</h2>
          <p>${result.description || "Không có mô tả"}</p>
          <a href="bao.html?menu=${encodeURIComponent(result.menu)}&section=${encodeURIComponent(result.section)}&title=${encodeURIComponent(result.title)}${regionParam}" class="result-link">Xem chi tiết</a>
        </div>
      `;
      resultsList.appendChild(resultItem);
    });
  }
} 

// Lấy từ khóa từ URL
const urlParams = new URLSearchParams(window.location.search);
const initialKeyword = urlParams.get("q") || "";
searchInput.value = initialKeyword;
performSearch(initialKeyword);

// Sự kiện input để hiển thị/ẩn nút xóa
searchInput.addEventListener("input", () => {
  if (searchInput.value) {
    clearButton.classList.add("visible");
  } else {
    clearButton.classList.remove("visible");
  }
});

// Sự kiện xóa tìm kiếm
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  clearButton.classList.remove("visible");
  window.location.href = "../Main/index.html"; // Điều hướng về trang chủ chính
});

// Sự kiện click nút tìm kiếm
searchButton.addEventListener("click", () => {
  performSearch(searchInput.value);
});
searchButton.addEventListener("touchstart", () => {
  performSearch(searchInput.value);
});

// Sự kiện nhấn Enter trong input
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch(searchInput.value);
  }
});