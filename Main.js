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
      imageSrc: "../image/halong.png",
      title: "Vịnh Hạ Long",
      description: "Vịnh Hạ Long, di sản UNESCO, 1.969 đảo đá vôi, hang động kỳ vĩ. Gợi ý: Chèo kayak, du thuyền."
    },
    imgtilte2_1: {
      imageSrc: "../image/trangan.png",
      title: "Tràng An",
      description: "Tràng An, di sản UNESCO, sông Ngô Đồng, hang động, cố đô Hoa Lư. Gợi ý: Du thuyền Tam Cốc."
    },
    imgtilte2_2: {
      imageSrc: "../image/hanoi.png",
      title: "Hà Nội",
      description: "Hà Nội, thủ đô nghìn năm văn hiến, Hồ Gươm, Phố Cổ, Văn Miếu. Gợi ý: Chợ Đồng Xuân."
    },
    imgtilte3_1: {
      imageSrc: "../image/haiphong.png",
      title: "Hải Phòng",
      description: "Hải Phòng, thành phố cảng, hoa phượng đỏ, Cát Bà. Gợi ý: Khu du lịch Đồ Sơn."
    },
    imgtilte3_2: {
      imageSrc: "../image/sapa.png",
      title: "Sa Pa",
      description: "Sa Pa, khí hậu mát mẻ, văn hóa dân tộc, cảnh núi non. Gợi ý: Chợ đêm Sa Pa."
    },
  },
  Trung: {
    mainContent: {
      imageSrc: "../image/hue.png",
      title: "Huế",
      description: "Huế, cố đô, di sản UNESCO, kinh thành, nhã nhạc cung đình. Gợi ý: Tham quan lăng tẩm."
    },
    imgtilte2_1: {
      imageSrc: "../image/danang.png",
      title: "Đà Nẵng",
      description: "Đà Nẵng, bãi biển Mỹ Khê, cầu Rồng, thành phố đáng sống. Gợi ý: Ngũ Hành Sơn."
    },
    imgtilte2_2: {
      imageSrc: "../image/hoian.png",
      title: "Phố Cổ Hội An",
      description: "Phố cổ Hội An, di sản UNESCO, đèn lồng, thương cảng cổ. Gợi ý: Chợ đêm Hội An."
    },
    imgtilte3_1: {
      imageSrc: "../image/vinh.png",
      title: "Vinh",
      description: "Vinh, trung tâm Bắc Trung Bộ, sông Lam, di tích lịch sử. Gợi ý: Thành cổ Vinh."
    },
    imgtilte3_2: {
      imageSrc: "../image/khanhhoa.png",
      title: "Khánh Hòa",
      description: "Khánh Hòa, vịnh Nha Trang, văn hóa Chăm Pa. Gợi ý: Tháp Bà Ponagar."
    },
  },
  Nam: {
    mainContent: {
      imageSrc: "../image/hcm.png",
      title: "TP. Hồ Chí Minh",
      description: "TP.HCM, trung tâm kinh tế, Dinh Độc Lập, chợ Bến Thành. Gợi ý: Phố đi bộ Nguyễn Huệ."
    },
    imgtilte2_1: {
      imageSrc: "../image/cantho.png",
      title: "Cần Thơ",
      description: "Cần Thơ, chợ nổi Cái Răng, văn hóa miền Tây. Gợi ý: Du thuyền sông Hậu."
    },
    imgtilte2_2: {
      imageSrc: "../image/phuquoc.png",
      title: "Phú Quốc",
      description: "Phú Quốc, thiên đường biển đảo, bãi Sao, làng chài. Gợi ý: Vinpearl Safari."
    },
    imgtilte3_1: {
      imageSrc: "../image/dalat.png",
      title: "Đà Lạt",
      description: "Đà Lạt, thành phố ngàn hoa, khí hậu mát mẻ. Gợi ý: Hồ Xuân Hương."
    },
    imgtilte3_2: {
      imageSrc: "../image/tayninh.png",
      title: "Tây Ninh",
      description: "Tây Ninh, núi Bà Đen, trung tâm tâm linh. Gợi ý: Chùa Bà Đen."
    },
  },
},
    "Văn Hoá": {
    Bắc: {
      mainContent: {
        imageSrc: "../image/nguqua.png",
        title: "Mâm Ngũ Quả",
        description: "Mâm ngũ quả Tết, biểu tượng ngũ hành, cầu phúc lộc. Gợi ý: Chuối, bưởi, cam tại Hà Nội."
      },
      imgtilte2_1: {
        imageSrc: "../image/aodai.png",
        title: "Áo Dài",
        description: "Áo dài, trang phục truyền thống, biểu tượng phụ nữ Việt. Gợi ý: Lễ hội áo dài Hà Nội."
      },
      imgtilte2_2: {
        imageSrc: "../image/chuahuong.png",
        title: "Lễ Hội Chùa Hương",
        description: "Lễ hội chùa Hương, cầu may đầu năm. Gợi ý: Chùa Hương (Hà Nội)."
      },
      imgtilte3_1: {
        imageSrc: "../image/banhchung.png",
        title: "Bánh Chưng",
        description: "Bánh chưng Tết, biểu tượng đất trời, lòng biết ơn. Gợi ý: Làng bánh chưng Tranh Khúc (Hà Nội)."
      },
      imgtilte3_2: {
        imageSrc: "../image/music.png",
        title: "Nhạc Dân Tộc",
        description: "Nhạc dân tộc miền Bắc, sáo trúc, đàn bầu. Gợi ý: Nhà hát Lớn Hà Nội."
      },
    },
    Trung: {
      mainContent: {
        imageSrc: "../image/hue.png",
        title: "Cố Đô Huế",
        description: "Cố đô Huế, di sản UNESCO, kiến trúc cung đình. Gợi ý: Kinh thành Huế."
      },
      imgtilte2_1: {
        imageSrc: "../image/hoian.png",
        title: "Phố Cổ Hội An",
        description: "Phố cổ Hội An, di sản UNESCO, đèn lồng rực rỡ. Gợi ý: Hội An (Quảng Nam)."
      },
      imgtilte2_2: {
        imageSrc: "../image/myson.png",
        title: "Thánh Địa Mỹ Sơn",
        description: "Thánh địa Mỹ Sơn, di tích Chăm Pa cổ. Gợi ý: Mỹ Sơn (Quảng Nam)."
      },
      imgtilte3_1: {
        imageSrc: "../image/cau ngu.png",
        title: "Lễ Hội Cầu Ngư",
        description: "Lễ hội Cầu Ngư, cầu mưa thuận gió hòa. Gợi ý: Lễ hội tại Phú Yên."
      },
      imgtilte3_2: {
        imageSrc: "../image/banhtet.png",
        title: "Bánh Tét",
        description: "Bánh tét Tết, gắn kết gia đình, hồn quê. Gợi ý: Làng bánh tét Trà Cuôn (Huế)."
      },
    },
    Nam: {
      mainContent: {
        imageSrc: "../image/nguqua_nam.png",
        title: "Mâm Ngũ Quả",
        description: "Mâm ngũ quả Nam, cầu vừa đủ xài. Gợi ý: Dưa hấu, mãng cầu tại TP.HCM."
      },
      imgtilte2_1: {
        imageSrc: "../image/tongon.png",
        title: "Lễ Hội Tống Ôn",
        description: "Lễ hội Tống Ôn, xua đuổi điều xấu. Gợi ý: Chùa Ông (Cần Thơ)."
      },
      imgtilte2_2: {
        imageSrc: "../image/duabo.png",
        title: "Lễ Hội Đua Bò",
        description: "Lễ hội đua bò Bảy Núi, văn hóa Khmer. Gợi ý: Tri Tôn (An Giang)."
      },
      imgtilte3_1: {
        imageSrc: "../image/kyyen.png",
        title: "Lễ Hội Kỳ Yên",
        description: "Lễ hội Kỳ Yên, cầu bình an, phát đạt. Gợi ý: Đình làng Cần Thơ."
      },
      imgtilte3_2: {
        imageSrc: "../image/chonoi.png",
        title: "Chợ Nổi",
        description: "Chợ nổi, nét văn hóa sông nước miền Tây. Gợi ý: Chợ nổi Cái Răng (Cần Thơ)."
      },
    },
  },
  "Ẩm Thực": {
  Bắc: {
    mainContent: {
      imageSrc: "../image/pho.png",
      title: "Phở",
      description: "Phở Hà Nội, nước dùng ngọt thanh, bún, thịt bò, rau thơm. Gợi ý: Phở Thìn Lò Đúc (13 Lò Đúc, Hà Nội)."
    },
    imgtilte2_1: {
      imageSrc: "../image/buncha.png",
      title: "Bún Chả",
      description: "Bún chả Hà Nội, chả nướng, nước mắm chua ngọt. Gợi ý: Bún chả Đắc Kim (1 Hàng Mành, Hà Nội)."
    },
    imgtilte2_2: {
      imageSrc: "../image/chaca.png",
      title: "Chả Cá",
      description: "Chả cá Lã Vọng, cá lăng nướng, mắm tôm, rau thơm. Gợi ý: Chả cá Lã Vọng (14 Chả Cá, Hà Nội)."
    },
    imgtilte3_1: {
      imageSrc: "../image/xoi.png",
      title: "Xôi Xéo",
      description: "Xôi xéo, nếp dẻo, đậu xanh, mỡ gà, hành phi. Gợi ý: Xôi xéo Oanh Oanh (573 Đê La Thành, Hà Nội)."
    },
    imgtilte3_2: {
      imageSrc: "../image/bunthang.png",
      title: "Bún Thang",
      description: "Bún thang, nước dùng ngọt, gà, tôm khô, rau răm. Gợi ý: Bún thang Bà Đức (48 Cầu Gỗ, Hà Nội)."
    },
  },
  Trung: {
    mainContent: {
      imageSrc: "../image/miquang.png",
      title: "Mì Quảng",
      description: "Mì Quảng, sợi mì vàng, nước dùng đậm, rau sống 9 vị. Gợi ý: Mì xứ Quảng (36 Tân Thắng, TP.HCM)."
    },
    imgtilte2_1: {
      imageSrc: "../image/bunbo.png",
      title: "Bún Bò Huế",
      description: "Bún bò Huế, nước dùng mắm ruốc, sả, thịt bò, giò heo. Gợi ý: Bún bò Mệ Kéo (20 Bạch Đằng, Huế)."
    },
    imgtilte2_2: {
      imageSrc: "../image/caolau.png",
      title: "Cao Lầu",
      description: "Cao lầu Hội An, mì vàng, thịt xá xíu, rau sống. Gợi ý: Cao lầu Bà Bé (Chợ Hội An, Quảng Nam)."
    },
    imgtilte3_1: {
      imageSrc: "../image/banhbeo.png",
      title: "Bánh Bèo Chén",
      description: "Bánh bèo Huế, bột gạo mỏng, nhân tôm, da heo chiên. Gợi ý: Bánh bèo chén Cô Xê (613 Nguyễn Tất Thành, Hội An)."
    },
    imgtilte3_2: {
      imageSrc: "../image/banhbotloc.png",
      title: "Bánh Bột Lọc",
      description: "Bánh bột lọc Huế, vỏ dai, nhân tôm thịt. Gợi ý: Bánh Huế Tin Tin (G3 Green Bay, Hà Nội)."
    },
  },
  Nam: {
    mainContent: {
      imageSrc: "../image/comtam.png",
      title: "Cơm Tấm",
      description: "Cơm tấm Sài Gòn, gạo tấm, sườn nướng, trứng ốp la. Gợi ý: Cơm tấm Ba Ghiền (84 Đặng Văn Ngữ, TP.HCM)."
    },
    imgtilte2_1: {
      imageSrc: "../image/bunmam.png",
      title: "Bún Mắm",
      description: "Bún mắm miền Tây, nước lèo mắm cá linh, rau sống. Gợi ý: Bún mắm Tám Dự (5/1 Khu Vực 3, Cần Thơ)."
    },
    imgtilte2_2: {
      imageSrc: "../image/hutieu.png",
      title: "Hủ Tiếu Nam Vang",
      description: "Hủ tiếu Nam Vang, nước dùng ngọt, thịt bằm, tôm. Gợi ý: Hủ tiếu Nhân Quán (13A Phan Đình Phùng, Cần Thơ)."
    },
    imgtilte3_1: {
      imageSrc: "../image/goicuon.png",
      title: "Gỏi Cuốn",
      description: "Gỏi cuốn, tôm, thịt, rau cuốn bánh tráng, chấm tương. Gợi ý: Gỏi cuốn Lê Văn Sĩ (359 Lê Văn Sỹ, TP.HCM)."
    },
    imgtilte3_2: {
      imageSrc: "../image/banhxeo.png",
      title: "Bánh Xèo",
      description: "Bánh xèo miền Tây, nhân tôm, thịt, giá đỗ, rau. Gợi ý: Bánh xèo 7 Tới (45 Hoàng Quốc Việt, Cần Thơ)."
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

// Hàm cập nhật URL cho các liên kết (THÊM MỚI)
function updateLinks(menu, region) {
  if (["PostCast", "WebBlog", "Video"].includes(menu)) { // nếu chọn 1 trong các mục trên thì thêm vào menu
    const content = contentMap[menu]; 
    if (!content) return; // không có nội dung thì dừng
    if (menu === "PostCast") {
      document.querySelectorAll("#postCardContent a").forEach((link, i) => {
        const section = `postcard${i + 1}`;
        link.href = `../search-bao/bao.html?menu=PostCast&section=${section}&title=${encodeURIComponent(
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
  }, 1);

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
    const popUnder = window.open("https://www.dienmayxanh0com/may-lanh?utm_source=A8WKOm1Ng&click_id=zKEfFlztH2ABuyJLMJG2KUzQX4HD8_DIuFExQdl4LIM&gad_source=1&gad_campaignid=22253923118&gbraid=0AAAAA-dRZ4qJLlQKahqrnJ3A3r6xOLUGm&gclid=Cj0KCQjw1JjDBhDjARIsABlM2St2A30NuapRuVp4_1UXS2DRAfdbgzi57nMu4H_AIwuB24KoH3HeWtwaAlv7EALw_wcB", "_blank", "width=800,height=600,left=100,top=100");
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
   
      else if (text === "PostCast") {
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
      PostCast: document.querySelector(".postcard-content"),
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
      imageSrc: "../image/halong.png",
      title: "Vịnh Hạ Long",
      description: "Vịnh Hạ Long là một vịnh nhỏ thuộc phần bờ tây vịnh Bắc Bộ tại khu vực biển Đông Bắc Việt Nam, bao gồm vùng biển đảo của thành phố Hạ Long thuộc tỉnh Quảng Ninh. Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa karst đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể. Đứng thứ 3 trong bảng xếp hạng, Di sản thiên nhiên thế giới vịnh Hạ Long (Quảng Ninh) luôn hấp dẫn du khách với vẻ đẹp xanh thẳm của trời mây, núi non, biển nước cùng những hòn đảo đá vôi và hang động kỳ vĩ. Không chỉ sở hữu vẻ đẹp thiên nhiên “có một, không hai”, khi đến Hạ Long, du khách còn được trải nghiệm nhiều hoạt động thú vị như chèo thuyền kayak, khám phá hang động kỳ bí, leo núi mạo hiểm, ghé thăm các làng chài trên biển... Ngoài ra, Hạ Long đang là điểm đến hấp dẫn du khách trong nước và quốc tế với những sản phẩm du lịch du thuyền độc đáo với dịch vụ chuyên nghiệp."
    },
    "imgtilte2_1": {
      imageSrc: "../image/trangan.png",
      title: "Tràng An",
      description: "Quần thể danh thắng Tràng An là một vùng du lịch tổng hợp gồm các di sản văn hóa và thiên nhiên được UNESCO công nhận ở Ninh Bình, Việt Nam. Trước đó, nhiều di tích danh thắng nơi đây đã được Chính phủ Việt Nam xếp hạng di tích quốc gia đặc biệt quan trọng như Khu du lịch sinh thái Tràng An, khu du lịch Tam Cốc - Bích Động, chùa Bái Đính, cố đô Hoa Lư... Liên kết giữa các khu vực này là hệ sinh thái rừng đặc dụng Hoa Lư trên núi đá vôi, đất ngập nước và hệ thống sông, hồ, đầm với diện tích 12.252 ha. Quần thể di sản thế giới Tràng An mang trong mình những khung cảnh thiên nhiên độc đáo từ đá núi, hệ sinh thái, rừng cây, thảm thực vật, đồng lúa, hồ đầm và những tuyến du thuyền trên sông Ngô Đồng, suối Tiên, sông Vọc, sông Sào Khê, sông Đền Vối, sông Bến Đang. Nơi đây sở hữu những hang động đẹp như động Thiên Hà, động Thiên Thanh, động Tiên, động Tiên Cá, động Vái Giời, động Thủy Cung, hang Bụt, hang Tam Cốc, hang động Tràng An, hang Sinh Dược; những di chỉ khảo cổ học có giá trị như hang Mòi, hang Bói, hang Trống, mái Ốc, thung Bình, thành Hoa Lư; những di tích lịch sử nổi tiếng gắn với 4 hoàng triều Đinh - Lê - Lý - Trần như cung điện Hoa Lư, đền Vua Đinh, đền Vua Lê, chùa Bích Động, chùa Bái Đính, hành cung Vũ Lâm, đền Thái Vi, đền Trần, đền Suối Tiên hay những thắng cảnh khác như vườn chim thung Nham, thung Nắng, hang Múa, rừng đặc dụng Hoa Lư… Ngày 23 tháng 6 năm 2014, tại Doha, với sự đồng thuận tuyệt đối của Ủy ban Di sản thế giới, Quần thể danh thắng Tràng An chính thức trở thành di sản thế giới hỗn hợp đầu tiên của Việt Nam khi đáp ứng cả hai yếu tố nổi bật về văn hóa và thiên nhiên. Tràng An hiện cũng là di sản thế giới kép đầu tiên và duy nhất ở khu vực Đông Nam Á. Trong quy hoạch phát triển du lịch tại Việt Nam, Tràng An cũng là địa danh được đầu tư để trở thành một khu du lịch tầm cỡ quốc tế."
    },
    imgtilte2_2: {
      imageSrc: "../image/hanoi.png",
      title: "Hà Nội",
      description: "Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp. Trung tâm thành phố là Khu phố cổ nhộn nhịp, nơi các con phố hẹp được mang tên 'hàng'. Có rất nhiều ngôi đền nhỏ, bao gồm Bạch Mã, tôn vinh một con ngựa huyền thoại, cùng với chợ Đồng Xuân, bán hàng gia dụng và thức ăn đường phố. Nơi đây cũng đã từng có những cái tên như Tống Bình, Đại La, Long Đỗ, Đông Đô, Đông Quan, Long Uyên, Đông Kinh, Thăng Long, Bắc Thành, Kẻ Chợ. Hà Nội đã sớm trở thành trung tâm chính trị, kinh tế và văn hóa ngay từ những buổi đầu của lịch sử Việt Nam. Với vai trò thủ đô, Hà Nội là nơi tập trung nhiều địa điểm văn hóa giải trí, công trình thể thao quan trọng của đất nước, đồng thời cũng là địa điểm được lựa chọn để tổ chức nhiều sự kiện chính trị và thể thao quốc tế. Đây là nơi tập trung nhiều làng nghề truyền thống, đồng thời cũng là 1 trong 3 vùng tập trung nhiều hội lễ của miền Bắc Việt Nam. Thành phố có chỉ số phát triển con người ở mức cao, dẫn đầu trong số các đơn vị hành chính của Việt Nam. Nền ẩm thực Hà Nội với nhiều nét riêng biệt cũng là một trong những yếu tố thu hút khách du lịch tới thành phố. Năm 2019, Hà Nội là đơn vị hành chính Việt Nam xếp thứ 2 về tổng sản phẩm trên địa bàn (GRDP), xếp thứ 8 về GRDP bình quân đầu người và đứng thứ 41 về tốc độ tăng trưởng GRDP. Thành phố được UNESCO trao tặng danh hiệu 'Thành phố vì hòa bình' vào ngày 16 tháng 7 năm 1999. Khu Hoàng thành Thăng Long cũng được tổ chức UNESCO công nhận là di sản văn hóa thế giới."
    },
    imgtilte3_1: {
      imageSrc: "../image/haiphong.png",
      title: "Hải Phòng",
      description: "Hải Phòng là một trong sáu thành phố trực thuộc trung ương của Việt Nam. Đây là thành phố lớn thứ 3 Việt Nam và là một thành phố cảng, trung tâm công nghiệp, cảng biển, đồng thời cũng là trung tâm kinh tế, văn hóa, y tế, giáo dục, khoa học, thương mại và công nghệ thuộc Vùng duyên hải Bắc Bộ của Việt Nam. Hải Phòng hiện là đô thị loại I, là thành phố trung tâm cấp vùng và cấp quốc gia. Trong quá khứ, Hải Phòng cũng là nơi có điện đầu tiên ở Việt Nam và Đông Dương. Hải Phòng xưa xuất phát điểm từ một số tiểu khu duyên hải phồn thịnh của vùng đất giáp ranh với Quảng Ninh ngày nay. Hải Phòng là nơi có vị trí vô cùng quan trọng và chiến lược của quốc gia, cách Hà Nội 106 km theo Quốc lộ 5A hoặc Xa lộ xuyên Á AH14, về kinh tế, xã hội, công nghệ thông tin và an ninh, quốc phòng của vùng Bắc Bộ và cả nước, trên hai hành lang – một vành đai hợp tác kinh tế Việt Nam-Trung Quốc. Hải Phòng là đầu mối giao thông đường biển phía Bắc. Với lợi thế cảng nước sâu nên vận tải biển rất phát triển, đồng thời là một trong những động lực tăng trưởng của vùng kinh tế trọng điểm Bắc bộ. Hải Phòng đồng thời cũng là trung tâm kinh tế, khoa học và kỹ thuật tổng hợp của Vùng duyên hải Bắc Bộ và là một trong hai trung tâm phát triển của Vùng Kinh tế trọng điểm Bắc Bộ. Hải Phòng có nhiều khu công nghiệp, thương mại lớn và trung tâm dịch vụ, du lịch, giáo dục, y tế và thủy sản của vùng duyên hải Bắc Bộ Việt Nam. Hải Phòng là một cực tăng trưởng của tam giác kinh tế trọng điểm phía Bắc gồm Hà Nội, Hải Phòng và Quảng Ninh, nằm ngoài Quy hoạch vùng thủ đô Hà Nội. Ngoài ra, Hải Phòng còn giữ vị trí tiền trạm của miền Bắc, nơi đặt trụ sở của Bộ Tư lệnh Quân khu 3, Bộ Tư lệnh Vùng 1 Cảnh sát biển, Bộ Tư lệnh Vùng 1 Hải quân và Bộ Tư lệnh Quân Chủng Hải quân Việt Nam. Hải Phòng còn được gọi là Đất Cảng hay Thành phố Cảng. Việc hoa phượng đỏ được trồng rộng rãi nơi đây, và sắc hoa đặc trưng trên những con phố, cũng khiến Hải Phòng được biết đến với mỹ danh Thành phố Hoa Phượng Đỏ. Không chỉ là một thành phố cảng công nghiệp, Hải Phòng còn là một trong những nơi có tiềm năng du lịch rất lớn. Hải Phòng hiện lưu giữ nhiều nét hấp dẫn về kiến trúc, bao gồm kiến trúc truyền thống với các chùa, đình, miếu cổ và kiến trúc tân cổ điển Pháp tọa lạc trên các khu phố cũ. Đồng thời, Hải Phòng hiện đang sở hữu một khu dự trữ sinh quyển thế giới của UNESCO nằm tại Quần đảo Cát Bà, cùng với các bãi tắm và khu nghỉ dưỡng ở Đồ Sơn. Thành phố còn có những nét đặc trưng về văn hóa, đặc biệt là ẩm thực và các lễ hội truyền thống."
    },
    imgtilte3_2: {
      imageSrc: "../image/sapa.png",
      title: "Sa Pa",
      description: "Sa Pa là phường trung tâm của thị xã Sa Pa, tỉnh Lào Cai, Việt Nam. Phường Sa Pa nằm ở trung tâm thị xã Sa Pa, có vị trí địa lý: Phía đông giáp phường Sa Pả và xã Mường Hoa, phía tây giáp phường Phan Si Păng, phía nam giáp phường Cầu Mây, phía bắc giáp các phường Phan Si Păng, Hàm Rồng, Sa Pả. Phường Sa Pa được chia thành 7 tổ dân phố đánh số từ 1 đến 7. Sa Pa nổi tiếng với khí hậu mát mẻ, cảnh quan núi non hùng vĩ và văn hóa đa dạng của các dân tộc thiểu số như H’Mông, Dao. Nơi đây thu hút du khách bởi vẻ đẹp thiên nhiên với những thửa ruộng bậc thang, đỉnh Fansipan – nóc nhà Đông Dương, và các chợ đêm sôi động. Du lịch Sa Pa mang đến trải nghiệm khám phá văn hóa bản địa, trekking qua các bản làng, và thưởng thức ẩm thực đặc trưng như thắng cố, thịt nướng."
    }
  },
  Trung: {
    mainContent: {
      imageSrc: "../image/hue.png",
      title: "Huế",
      description: "Huế là một thành phố thuộc tỉnh và là tỉnh lỵ tỉnh Thừa Thiên Huế cũ trước khi thành lập thành phố Huế trực thuộc trung ương ngày nay. Thành phố Huế lúc bấy giờ có địa giới hành chính tương ứng với các quận Phú Xuân và Thuận Hóa hiện nay. Huế từng là kinh đô (cố đô Huế) của Việt Nam dưới triều Tây Sơn (1788–1801) và triều Nguyễn (1802–1945). Thành phố có năm danh hiệu UNESCO ở Việt Nam: Quần thể di tích Cố đô Huế (1993), Nhã nhạc cung đình Huế (2003), Mộc bản triều Nguyễn (2009), Châu bản triều Nguyễn (2014) và Hệ thống thơ văn trên kiến trúc cung đình Huế (2016). Ngoài ra, Huế còn là một trong những địa phương có di sản hát bài chòi đã được công nhận là di sản văn hóa phi vật thể của nhân loại. Huế nổi tiếng với các lăng tẩm, kinh thành, sông Hương thơ mộng và văn hóa ẩm thực độc đáo. Gợi ý: Tham quan lăng tẩm, thưởng thức nhã nhạc cung đình, du thuyền sông Hương."
    },
    imgtilte2_1: {
      imageSrc: "../image/danang.png",
      title: "Đà Nẵng",
      description: "Về mặt địa lý, Đà Nẵng nằm ở trung độ của Việt Nam, có vị trí trọng yếu cả về kinh tế – xã hội và quốc phòng – an ninh với vai trò cực tăng trưởng quốc gia là trung tâm công nghiệp, tài chính, du lịch, dịch vụ, văn hóa, giáo dục, y tế, khoa học, công nghệ, khởi nghiệp, đổi mới sáng tạo của khu vực Miền Trung, Tây Nguyên và cả nước; trung tâm tổ chức các sự kiện tầm khu vực và quốc tế. Đà Nẵng cũng là đô thị biển và đầu mối giao thông rất quan trọng về đường bộ, đường sắt, đường biển và đường hàng không. Trong những năm gần đây, Đà Nẵng tích cực đầu tư xây dựng cơ sở hạ tầng, cải thiện môi trường, nâng cao an sinh xã hội và được đánh giá là thành phố đáng sống nhất Việt Nam. Năm 2018, Đà Nẵng được chọn đại diện cho Việt Nam lọt vào danh sách 10 địa điểm tốt nhất để sống ở nước ngoài do tạp chí du lịch Live and Invest Overseas (LIO) bình chọn. Nơi đây nổi tiếng với bãi biển Mỹ Khê, cầu Rồng và Ngũ Hành Sơn. Gợi ý: Tham quan Ngũ Hành Sơn, tắm biển Mỹ Khê, khám phá cầu Rồng."
    },
    imgtilte2_2: {
      imageSrc: "../image/hoian.png",
      title: "Phố Cổ Hội An",
      description: "Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam. Nhờ những yếu tố địa lý và khí hậu thuận lợi, Hội An từng là một thương cảng quốc tế sầm uất, nơi gặp gỡ của những thuyền buôn Nhật Bản, Trung Quốc và phương Tây trong suốt thế kỷ XVII và XVIII. Trước thời kỳ này, nơi đây cũng từng có những dấu tích của thương cảng Chăm Pa hay được nhắc đến cùng con đường tơ lụa trên biển. Thế kỷ XIX, do giao thông đường thủy ở đây không còn thuận tiện, cảng thị Hội An dần suy thoái, nhường chỗ cho Đà Nẵng khi đó đang được người Pháp xây dựng. Hội An may mắn không bị tàn phá trong hai cuộc chiến tranh và tránh được quá trình đô thị hóa ồ ạt cuối thế kỷ 20. Bắt đầu từ thập niên 1980, những giá trị kiến trúc và văn hóa của phố cổ Hội An dần được giới học giả và cả du khách chú ý, khiến nơi đây trở thành một trong những điểm du lịch hấp dẫn của Việt Nam. Nơi đây nổi tiếng với đèn lồng, kiến trúc cổ và chợ đêm. Gợi ý: Tham quan chợ đêm Hội An, khám phá phố cổ."
    },
    imgtilte3_1: {
      imageSrc: "../image/vinh.png",
      title: "Vinh",
      description: "Vinh là thành phố tỉnh lỵ cũ của tỉnh Nghệ An và là Trung tâm Kinh tế - Văn hóa của vùng Bắc Trung Bộ, Việt Nam. Thành phố có vị trí ở phía Đông Nam của tỉnh bên cạnh sông Lam, và nằm trên trục giao thông Bắc Nam chính của Việt Nam, có thể dễ dàng tiếp cận bằng đường cao tốc, đường sắt, tàu thuyền và đường hàng không. Sân bay Quốc tế Vinh vừa được mở rộng được phục vụ bởi ba hãng hàng không: Vietnam Airlines, VietJet Air và Jetstar Pacific. Ngày 5 tháng 9 năm 2008, thành phố trở thành đô thị loại I thứ tư của Việt Nam sau Hải Phòng, Đà Nẵng và Huế. Thành phố tiếp giáp huyện Nghi Lộc về phía Bắc và phía Đông, huyện Hưng Nguyên về phía Tây, cũng như huyện Nghi Xuân của tỉnh Hà Tĩnh về phía Nam. Vinh nằm cách Hà Nội 300 km về phía Nam và cách Thành phố Hồ Chí Minh 1.400 km về phía Bắc. Thành phố có tổng diện tích 166.22 km², dân số 580.669 người, bao gồm 24 phường và 9 xã. Vinh nổi tiếng với di tích lịch sử như thành cổ Vinh và cảnh quan sông Lam. Gợi ý: Tham quan thành cổ Vinh, khám phá sông Lam."
    },
    imgtilte3_2: {
      imageSrc: "../image/khanhhoa.png",
      title: "Khánh Hòa",
      description: "Khánh Hòa ngày nay là phần đất cũ của xứ Kauthara thuộc vương quốc Chăm Pa. Năm 1653, lấy cớ vua Chiêm Thành là Bà Tấm quấy nhiễu dân Việt ở Phú Yên, Chúa Nguyễn Phúc Tần sai quan cai cơ Hùng Lộc đem quân sang đánh chiếm được vùng đất từ sông Phan Rang trở ra đến Phú Yên. Năm 1831, Vua Minh Mạng thành lập tỉnh Khánh Hòa trên cơ sở trấn Bình Hòa. Sau lần hợp nhất vào năm 1975, đến năm 1989, Quốc hội lại chia tỉnh Phú Khánh thành hai tỉnh Phú Yên và Khánh Hòa cho đến ngày nay. Khánh Hòa cũng là một trong những tỉnh được định hướng trở thành thành phố trực thuộc trung ương tại Việt Nam. Nơi đây nổi tiếng với vịnh Nha Trang, văn hóa Chăm Pa và các di tích như Tháp Bà Ponagar. Gợi ý: Tham quan Tháp Bà Ponagar, tắm biển Nha Trang."
    }
  },
  Nam: {
    mainContent: {
      imageSrc: "../image/hcm.png",
      title: "TP. Hồ Chí Minh",
      description: "Thành phố Hồ Chí Minh (viết tắt: TP.HCM), còn được gọi là Sài Gòn, là thành phố lớn nhất Việt Nam về quy mô dân số và là trung tâm kinh tế, giải trí, một trong hai trung tâm văn hóa và giáo dục quan trọng tại Việt Nam. Thành phố Hồ Chí Minh là thành phố trực thuộc trung ương thuộc loại đô thị đặc biệt, nằm trong vùng chuyển tiếp giữa Đông Nam Bộ và Tây Nam Bộ. Về phân chia hành chính, thành phố này hiện có 16 quận, 1 thành phố và 5 huyện, tổng diện tích là 2.095 km². Thành phố có dân số vào năm 2024 là hơn 14 triệu người (cao nhất cả nước), mật độ dân số trung bình 2.067 người/km² (cao thứ hai cả nước). Thành phố Hồ Chí Minh năm 2011 chiếm 21,3% tổng sản phẩm (GDP) và 29,38% tổng thu ngân sách của cả Việt Nam. Thành phố có chỉ số phát triển con người ở mức cao, đứng thứ 2 trong số các đơn vị hành chính của Việt Nam. Năm 2020, thành phố có GRDP theo giá hiện hành ước là 1.372 ngàn tỷ đồng, theo giá so sánh 2010 đạt 991.424 tỷ đồng, tăng 1,39% so với năm 2019, đóng góp trên 22% GDP và 27% tổng thu ngân sách cả nước. GRDP bình quân đầu người ước năm 2020 là 6.328 USD/người, xếp thứ 4 trong số các tỉnh thành cả nước. Thu nhập bình quân đầu người năm 2019 sơ bộ là 6,758 triệu VND/tháng, cao thứ 2 cả nước sau Bình Dương. Nhờ điều kiện tự nhiên, Thành phố Hồ Chí Minh trở thành 1 đầu mối giao thông của Việt Nam và Đông Nam Á, bao gồm cả đường bộ, đường sắt, đường thủy và đường hàng không. Vào năm 2019, thành phố đón khoảng 8,6 triệu khách du lịch quốc tế. Các lĩnh vực giáo dục, truyền thông, thể thao, giải trí, Thành phố Hồ Chí Minh đều giữ vị thế hàng đầu. Gợi ý: Tham quan Dinh Độc Lập, chợ Bến Thành, phố đi bộ Nguyễn Huệ."
    },
    imgtilte2_1: {
      imageSrc: "../image/cantho.png",
      title: "Cần Thơ",
      description: "Cần Thơ là một thành phố cũ thuộc tỉnh Cần Thơ cũ và là tỉnh lỵ của tỉnh Cần Thơ trước khi thành lập thành phố Cần Thơ trực thuộc trung ương ngày nay. Thành phố Cần Thơ lúc bấy giờ có địa giới hành chính tương ứng với các quận Ninh Kiều, Bình Thủy, một phần quận Cái Răng và một phần huyện Phong Điền ngày nay. Cần Thơ vừa mang một nét hiện đại của đô thị kèm theo đó là sự mộc mạc của miền tây sông nước, khi đến đây, du khách có thể trải nghiệm các loại hình mua bán trên sông, làm hủ tiếu và tham quan các vườn trái cây và cù lao. Đây có lẽ là một địa điểm lí tưởng dành cho những ai thích khám phá miền sông nước và đặc sản trái cây ngon ngọt quanh năm. Bên cạnh đó, du khách vẫn có thể trải nghiệm các tiện ích hiện đại và những hoạt động thú vị tại nơi này. Gợi ý: Tham quan chợ nổi Cái Răng, du thuyền sông Hậu."
    },
    imgtilte2_2: {
      imageSrc: "../image/phuquoc.png",
      title: "Phú Quốc",
      description: "Phú Quốc, thuộc tỉnh Kiên Giang, là hòn đảo lớn nhất Việt Nam, nằm trong vịnh Thái Lan. Được mệnh danh là thiên đường biển đảo, Phú Quốc nổi tiếng với những bãi biển cát trắng mịn như Bãi Sao, Bãi Dài, cùng làn nước trong xanh và hệ sinh thái biển phong phú. Nơi đây còn lưu giữ nét đẹp văn hóa của các làng chài truyền thống như Hàm Ninh, Rạch Vẹm. Phú Quốc là điểm đến lý tưởng cho du lịch nghỉ dưỡng, khám phá thiên nhiên và trải nghiệm ẩm thực đặc sản như gỏi cá trích, nước mắm. Năm 2021, Phú Quốc được UNESCO công nhận là khu dự trữ sinh quyển thế giới. Du khách có thể tham gia các hoạt động như lặn ngắm san hô, khám phá rừng nguyên sinh hoặc vui chơi tại các khu nghỉ dưỡng cao cấp. Gợi ý: Tham quan Vinpearl Safari, lặn ngắm san hô, khám phá chợ đêm Phú Quốc."
    },
    imgtilte3_1: {
      imageSrc: "../image/dalat.png",
      title: "Đà Lạt",
      description: "Đà Lạt, thành phố thuộc tỉnh Lâm Đồng, nằm trên cao nguyên Lâm Viên, được mệnh danh là thành phố ngàn hoa với khí hậu mát mẻ quanh năm. Nơi đây nổi tiếng với cảnh quan thiên nhiên thơ mộng, bao gồm hồ Xuân Hương, thác Datanla, đồi chè xanh mướt và những vườn hoa rực rỡ. Đà Lạt còn thu hút du khách bởi kiến trúc cổ kính từ thời Pháp thuộc, văn hóa bản địa của người K’Ho và ẩm thực đặc trưng như bánh tráng nướng, lẩu gà lá é. Đây là điểm đến lý tưởng cho những ai yêu thích thiên nhiên, sự yên bình và khám phá văn hóa cao nguyên. Gợi ý: Tham quan hồ Xuân Hương, đồi chè Cầu Đất, làng Cù Lần."
    },
    imgtilte3_2: {
      imageSrc: "../image/tayninh.png",
      title: "Tây Ninh",
      description: "Tây Ninh là một tỉnh thuộc vùng Đông Nam Bộ Việt Nam, nằm ở vị trí cầu nối giữa Thành phố Hồ Chí Minh và thủ đô Phnôm Pênh, vương quốc Campuchia và là một tỉnh nằm trong Vùng kinh tế trọng điểm phía Nam. Tỉnh có thành phố Tây Ninh nằm cách Thành phố Hồ Chí Minh 99 km theo đường Quốc lộ 22, cách biên giới Campuchia 40 km về phía Tây Bắc. Vùng đất Tây Ninh từ thời xưa vốn là một vùng đất thuộc Thủy Chân Lạp, với tên gọi là Romdum Ray, có nghĩa là 'Chuồng Voi' vì nơi đây chỉ có rừng rậm với muôn thú dữ như cọp, voi, beo, rắn,... cư ngụ. Những người thổ dân ở đây sống rất thiếu thốn, cơ cực cho đến khi người Việt đến khai hoang thì vùng đất này mới trở nên phát triển. Đến Tây Ninh du khách có thể trải nghiệm tham quan Quần thể chùa núi Bà Đen nằm trên núi Bà Đen, một ngọn núi được mệnh danh là 'nóc nhà Nam Bộ' tọa lạc ở xã Thạnh Tân, Thành phố Tây Ninh. Nơi đây không chỉ nổi tiếng với cảnh quan hùng vĩ mà còn là trung tâm tâm linh với nhiều ngôi chùa và hang động linh thiêng, thu hút nhiều du khách ghé thăm. Gợi ý: Tham quan chùa Bà Đen, leo núi Bà Đen."
    },
  },
},
     "Văn Hoá": {
    Bắc: {
        mainContent: {
            imageSrc: "../image/nguqua.png",
            title: "Mâm Ngũ Quả",
            description: "Mâm ngũ quả Tết là một nét văn hóa truyền thống lâu đời và độc đáo của người Việt Nam, đặc biệt phổ biến ở miền Bắc, mang ý nghĩa sâu sắc về triết lý ngũ hành (Kim, Mộc, Thủy, Hỏa, Thổ) để cầu chúc phúc lộc, tài vận, và sự bình an cho gia đình trong năm mới. Mỗi loại quả được chọn một cách kỹ lưỡng, không chỉ dựa trên hình dáng và màu sắc mà còn mang ý nghĩa phong thủy: chuối tượng trưng cho sự bền vững và đoàn kết gia đình nhờ hình dáng buồng chụm lại, bưởi hoặc cam biểu thị sự tròn đầy, sung túc với màu vàng rực rỡ, còn táo hoặc hồng mang ý nghĩa trường thọ. Tại Hà Nội, mâm ngũ quả thường được trang trí cầu kỳ với sự kết hợp hoa mai hoặc hoa đào tùy theo phong tục từng vùng, đặt trên bàn thờ gia tiên hoặc bàn khách, phản ánh sự tinh tế trong văn hóa ẩm thực và tín ngưỡng của người dân thủ đô. Trong không khí Tết, việc chuẩn bị mâm ngũ quả trở thành một nghi lễ gia đình, nơi các thế hệ cùng nhau lựa chọn, bày biện, và kể lại những câu chuyện dân gian liên quan đến từng loại quả, tạo nên không gian ấm cúng và giàu ý nghĩa."
        },
        imgtilte2_1: {
            imageSrc: "../image/aodai.png",
            title: "Áo Dài",
            description: "Áo dài là trang phục truyền thống nổi tiếng của Việt Nam, trở thành biểu tượng của vẻ đẹp phụ nữ Việt với đường nét thanh thoát, màu sắc tinh tế, và sự kết hợp hài hòa giữa truyền thống và hiện đại. Ở miền Bắc, đặc biệt tại Hà Nội, áo dài không chỉ là trang phục hàng ngày của phụ nữ trong các dịp lễ hội, sự kiện quan trọng như Tết Nguyên Đán hay lễ cưới, mà còn là tâm điểm của Lễ hội áo dài thường niên, nơi các nhà thiết kế hàng đầu sáng tạo những mẫu mã mới dựa trên nền tảng cổ truyền, kết hợp chất liệu lụa cao cấp và hoa văn dân tộc. Lịch sử áo dài bắt nguồn từ thời Nguyễn, trải qua nhiều biến đổi để phù hợp với từng thời kỳ, và tại Hà Nội, nơi hội tụ văn hóa, áo dài còn được sử dụng trong các buổi biểu diễn nghệ thuật tại Nhà hát Lớn, mang đến cho du khách quốc tế cái nhìn sâu sắc về bản sắc dân tộc, đồng thời là cơ hội để các nghệ nhân trẻ bảo tồn và phát huy giá trị truyền thống."
        },
        imgtilte2_2: {
            imageSrc: "../image/chuahuong.png",
            title: "Lễ Hội Chùa Hương",
            description: "Lễ hội Chùa Hương, tổ chức hàng năm tại xã Hương Sơn, Hà Nội, là một trong những lễ hội hành hương lớn nhất miền Bắc, thu hút hàng triệu du khách trong và ngoài nước với quy mô hoành tráng và ý nghĩa tâm linh sâu sắc. Bắt đầu từ ngày 6 tháng Giêng âm lịch và kéo dài đến hết tháng Ba, lễ hội bao gồm các hoạt động hành hương đến chùa Thiên Trù, chùa Hương Tích, và hành trình trên dòng sông Yến thơ mộng bằng thuyền nan, nơi du khách được chiêm ngưỡng cảnh quan núi rừng hùng vĩ và không gian thanh tịnh. Lễ hội không chỉ là dịp để người dân cầu may, dâng hương, mà còn là cơ hội để giao lưu văn hóa, thưởng thức các món ăn đặc sản như bánh cuốn, chè lam, và tham gia các trò chơi dân gian như bịt mắt bắt dê. Với lịch sử hơn 1.000 năm, lễ hội Chùa Hương là minh chứng sống động cho sự kết hợp giữa Phật giáo và tín ngưỡng thờ cúng tự nhiên của người Việt."
        },
        imgtilte3_1: {
            imageSrc: "../image/banhchung.png",
            title: "Bánh Chưng",
            description: "Bánh chưng là món ăn truyền thống không thể thiếu trong ngày Tết Nguyên Đán tại miền Bắc, mang ý nghĩa biểu tượng cho đất trời và lòng biết ơn tổ tiên, gắn liền với truyền thuyết vua Hùng chọn Lang Liêu làm vua nhờ sáng tạo ra bánh chưng và bánh giầy. Được làm từ gạo nếp, đậu xanh, thịt lợn béo nạc, và gói bằng lá dong xanh, bánh chưng đòi hỏi sự tỉ mỉ trong khâu chọn nguyên liệu, gói vuông vức, và nấu trong nhiều giờ trên bếp củi để giữ hương vị thơm ngon. Tại Hà Nội, làng nghề Tranh Khúc (huyện Thanh Trì) nổi tiếng với cách làm bánh chưng truyền thống, nơi du khách có thể tham quan, học hỏi quy trình chế biến từ khâu sơ chế đến hoàn thiện, đồng thời thưởng thức bánh chưng nóng hổi cùng trà sen, tạo nên trải nghiệm văn hóa ẩm thực độc đáo trong không khí Tết cổ truyền."
        },
        imgtilte3_2: {
            imageSrc: "../image/music.png",
            title: "Nhạc Dân Tộc",
            description: "Nhạc dân tộc miền Bắc là một phần quan trọng của di sản văn hóa Việt Nam, với các nhạc cụ truyền thống như sáo trúc, đàn bầu, đàn nhị, và trống cái, tạo nên âm thanh trầm bổng, giàu cảm xúc, phản ánh đời sống lao động và tâm hồn người dân. Tại Hà Nội, Nhà hát Lớn thường tổ chức các buổi biểu diễn nhạc dân tộc, nơi nghệ sĩ trình tấu những bản nhạc cổ truyền như Trống Cơm, Lý cây đa, hoặc Hò khoan Lệ Thủy, mang đến cho khán giả cái nhìn sâu sắc về lịch sử và bản sắc văn hóa dân tộc. Những buổi biểu diễn này không chỉ là nghệ thuật mà còn là cơ hội để giới thiệu nhạc cụ độc đáo đến bạn bè quốc tế, đồng thời khuyến khích thế hệ trẻ tham gia học hỏi, bảo tồn và phát triển dòng nhạc này trong thời đại hiện đại."
        }
    },
    Trung: {
        mainContent: {
            imageSrc: "../image/hue.png",
            title: "Cố Đô Huế",
            description: "Cố đô Huế, nằm ở trung tâm Việt Nam thuộc tỉnh Thừa Thiên Huế, là di sản văn hóa thế giới được UNESCO công nhận vào năm 1993 nhờ quần thể di tích cung đình độc đáo như Kinh thành Huế, lăng tẩm các vua Nguyễn, và sông Hương thơ mộng chảy qua thành phố. Nơi đây không chỉ lưu giữ kiến trúc cổ kính với những bức tường thành đá ong, cổng Ngọ Môn, mà còn là trung tâm của văn hóa cung đình với Nhã nhạc, một loại hình âm nhạc cổ truyền được bảo tồn qua nhiều thế hệ, phản ánh sự giao thoa giữa truyền thống Việt Nam và ảnh hưởng từ văn hóa Á Đông như Trung Quốc và Nhật Bản. Du khách đến Huế còn được trải nghiệm các lễ hội như Festival Huế, nơi tái hiện không gian hoàng gia với các điệu múa cung đình, mang lại cảm giác sống động về lịch sử vàng son của triều đại cuối cùng."
        },
        imgtilte2_1: {
            imageSrc: "../image/hoian.png",
            title: "Phố Cổ Hội An",
            description: "Phố cổ Hội An, thuộc tỉnh Quảng Nam, là di sản văn hóa thế giới được UNESCO công nhận vào năm 1999, nổi tiếng với những con phố nhỏ rợp bóng đèn lồng thủ công, kiến trúc cổ kính kết hợp giữa Việt Nam, Nhật Bản và Trung Hoa từ thế kỷ XVII-XVIII. Vào mỗi đêm rằm, nơi đây trở thành một bức tranh sống động với không gian không xe cộ, chỉ có tiếng rao hàng, tiếng cười nói của du khách, và ánh sáng lung linh từ hàng ngàn chiếc đèn lồng, tạo nên không khí yên bình và huyền ảo. Du khách có thể tham gia thả đèn hoa đăng trên sông Hoài, mua sắm các sản phẩm thủ công mỹ nghệ, hoặc thưởng thức ẩm thực địa phương như cao lầu, bánh mì Phượng, góp phần khám phá sâu hơn văn hóa giao thương quốc tế từng thịnh hành tại thương cảng này."
        },
        imgtilte2_2: {
            imageSrc: "../image/myson.png",
            title: "Thánh Địa Mỹ Sơn",
            description: "Thánh địa Mỹ Sơn, nằm ở huyện Duy Xuyên, Quảng Nam, là di tích khảo cổ quan trọng của vương quốc Chăm Pa cổ, với hàng loạt tháp đền được xây dựng từ thế kỷ IV đến XIII bằng gạch nung đỏ và đá sa thạch. Nơi đây không chỉ là công trình kiến trúc nghệ thuật độc đáo với các hoa văn chạm khắc tinh xảo mà còn phản ánh tín ngưỡng Hindu giáo, là minh chứng sống động cho lịch sử và văn hóa Chăm, từng là trung tâm tôn giáo và chính trị của vương quốc này. Du khách đến Mỹ Sơn có thể khám phá các tháp còn sót lại, nghe kể về quá trình khai quật của các nhà khảo cổ, và tham gia các buổi trình diễn nghệ thuật Chăm, mang lại trải nghiệm văn hóa đa dạng và sâu sắc."
        },
        imgtilte3_1: {
            imageSrc: "../image/cau_ngu.png",
            title: "Lễ Hội Cầu Ngư",
            description: "Lễ hội Cầu Ngư là nghi lễ truyền thống của các làng chài miền Trung, đặc biệt phổ biến tại tỉnh Phú Yên, nhằm cầu mong mưa thuận gió hòa, mùa màng bội thu, và ngư dân bình an trên biển cả bao la. Lễ hội thường diễn ra vào tháng Hai hoặc tháng Ba âm lịch, bao gồm các nghi thức cúng tế thần Nam Hải, rước kiệu, đua thuyền, và thả lưới biểu tượng, thể hiện tinh thần đoàn kết cộng đồng và niềm tin tâm linh sâu sắc của người dân vùng biển. Du khách tham gia có thể chứng kiến các hoạt động sôi nổi như nghi lễ rước thần, thưởng thức các món ăn hải sản tươi ngon, và tìm hiểu về nghề chài lưới truyền thống, góp phần bảo tồn văn hóa đặc sắc này qua thời gian."
        },
        imgtilte3_2: {
            imageSrc: "../image/banhtet.png",
            title: "Bánh Tét",
            description: "Bánh tét là món ăn truyền thống của miền Trung và miền Nam trong dịp Tết Nguyên Đán, được làm từ gạo nếp, đậu xanh, thịt heo béo nạc, và gói bằng lá chuối xanh, mang ý nghĩa gắn kết gia đình, cầu chúc sự trường tồn và hồn quê. Tại Huế, làng Trà Cuôn (huyện Phú Vang) nổi tiếng với cách làm bánh tét cầu kỳ, thường được kết hợp với các nguyên liệu đặc sản địa phương như lá chuối rừng và đậu xanh hữu cơ, tạo nên hương vị thơm ngon, dẻo dai. Quá trình chế biến đòi hỏi sự khéo léo trong việc gói bánh thành hình trụ tròn trịa, nấu trong nhiều giờ, và sau đó bảo quản để giữ nguyên hương vị. Đây là món ăn không chỉ xuất hiện trong mâm cỗ ngày Tết mà còn là quà biếu ý nghĩa, thể hiện tình thân và văn hóa ẩm thực phong phú của vùng đất cố đô."
        }
    },
    Nam: {
        mainContent: {
            imageSrc: "../image/nguqua_nam.png",
            title: "Mâm Ngũ Quả",
            description: "Mâm ngũ quả miền Nam mang ý nghĩa cầu chúc vừa đủ xài, vừa đủ sung túc trong năm mới, với sự lựa chọn trái cây đặc trưng như dưa hấu (tượng trưng cho sự mát mẻ, may mắn với màu đỏ tươi), mãng cầu (cầu mong), sung (sự thịnh vượng), xoài (may mắn), và chôm chôm (tròn đầy), phản ánh phong cách sống phóng khoáng và thực dụng của người miền Nam. Tại TP.HCM, mâm ngũ quả thường được trang trí đơn giản nhưng rực rỡ với các loại trái cây nhiệt đới, đặt trên bàn thờ gia tiên hoặc bàn khách trong những ngày Tết, kết hợp với hoa mai vàng hoặc cành phượng để tăng thêm màu sắc. Đây không chỉ là nghi lễ tín ngưỡng mà còn là dịp để gia đình quây quần, kể chuyện về ý nghĩa của từng loại quả, tạo nên không khí ấm áp và vui tươi trong mùa xuân."
        },
        imgtilte2_1: {
            imageSrc: "../image/tongon.png",
            title: "Lễ Hội Tống Ôn",
            description: "Lễ hội Tống Ôn, tổ chức tại các chùa Nam Bộ như Chùa Ông ở Cần Thơ, là nghi lễ truyền thống nhằm xua đuổi điều xấu, cầu chúc bình an và thịnh vượng cho cộng đồng. Lễ hội diễn ra vào rằm tháng Bảy âm lịch (tháng Vu Lan), với các hoạt động cúng tế, rước kiệu, múa lân, và thả đèn hoa đăng, thể hiện sự giao thoa văn hóa Việt - Hoa từ thời kỳ giao thương sầm uất. Du khách tham gia có thể thưởng thức các món chay đặc trưng như chè đậu xanh, bánh ít, và tham gia các trò chơi dân gian, đồng thời tìm hiểu về nguồn gốc lễ hội liên quan đến tín ngưỡng thờ cúng ông bà và sự biết ơn trong văn hóa miền Tây."
        },
        imgtilte2_2: {
            imageSrc: "../image/duabo.png",
            title: "Lễ Hội Đua Bò",
            description: "Lễ hội đua bò Bảy Núi tại An Giang là một nét văn hóa đặc sắc của người Khmer, tổ chức vào mùa nước nổi (thường vào tháng Mười âm lịch), biến cánh đồng lầy lội thành sân khấu cho các cặp bò thi tài tốc độ. Lễ hội không chỉ là cuộc thi mà còn là dịp để người dân giao lưu, bảo tồn bản sắc dân tộc, với các hoạt động văn nghệ, chợ phiên, và thưởng thức các món ăn đặc sản như bánh xèo, lẩu mắm. Các cặp bò được huấn luyện kỹ lưỡng, chủ bò mặc trang phục truyền thống, tạo nên không khí sôi động và hấp dẫn, thu hút đông đảo du khách trong và ngoài nước đến trải nghiệm văn hóa độc đáo này."
        },
        imgtilte3_1: {
            imageSrc: "../image/kyyen.png",
            title: "Lễ Hội Kỳ Yên",
            description: "Lễ hội Kỳ Yên là nghi lễ truyền thống của các đình làng miền Tây, như đình làng Cần Thơ, nhằm cầu bình an, phát đạt, và bảo vệ cộng đồng trước thiên tai, dịch bệnh. Được tổ chức vào tháng Hai hoặc tháng Tám âm lịch, lễ hội bao gồm các nghi thức cúng tế thần linh, múa lân, hát bội, và các trò chơi dân gian như kéo co, đua thuyền, thể hiện tinh thần đoàn kết và lòng biết ơn. Du khách đến đây có thể chiêm ngưỡng không gian văn hóa cổ truyền, thưởng thức ẩm thực địa phương như bánh tét, chè, và tham gia các hoạt động cộng đồng, góp phần gìn giữ và phát huy giá trị văn hóa dân gian miền Nam."
        },
        imgtilte3_2: {
            imageSrc:"../image/chonoi.png",
            title: "Chợ Nổi",
            description: "Chợ nổi là nét văn hóa đặc trưng của miền Tây sông nước, với chợ nổi Cái Răng ở Cần Thơ là tiêu biểu, nơi người dân buôn bán trên thuyền, từ thực phẩm, trái cây đến đồ thủ công, phản ánh lối sống thích nghi với môi trường thủy sinh qua hàng trăm năm. Mỗi chiếc thuyền treo cờ hoặc treo sản phẩm cần bán trên cây sào, tạo nên cảnh tượng độc đáo và nhộn nhịp từ sáng sớm. Chợ nổi không chỉ là trung tâm thương mại mà còn là điểm du lịch hấp dẫn, nơi du khách có thể thưởng thức cà phê sữa đá trên thuyền, mua trái cây tươi ngon, và tìm hiểu về cách sống của người dân miền Tây, đồng thời ghi lại những khoảnh khắc sống động qua ống kính máy ảnh."
        },
    },
},
  "Ẩm Thực": {
    Bắc: {
    mainContent: {
    imageSrc: "../image/pho.png",
    title: "Phở",
    description: "Phở Hà Nội, nước dùng ngọt thanh ninh từ xương bò hoặc trâu, bún dai, hành lá, giấm ớt, rau xanh. Nét đặc trưng từ gánh hàng rong xưa, nay hiếm thấy ở phố cổ, tạo dấu ấn trong ẩm thực Việt. Gợi ý: Phở Thìn Lò Đúc (13 Lò Đúc, Hà Nội); Phở Bát Đàn (49 Bát Đàn, Hoàn Kiếm, Hà Nội); Phở Gánh (Hàng Đường - Hàng Chiếu, Hoàn Kiếm, Hà Nội)."
    },
    imgtilte2_1: {
      imageSrc: "../image/buncha.png",
      title: "Bún Chả",
      description: "Bún chả Hà Nội, chả nướng, nước mắm chua ngọt, rau sống, đu đủ ngâm. Nổi tiếng toàn cầu sau khi Obama và Bourdain thưởng thức năm 2016. Thể hiện văn hóa và phong cách sống Hà Nội. Gợi ý: Bún chả Đắc Kim (1 Hàng Mành, Hoàn Kiếm, Hà Nội); Bún chả Sinh Từ (63 Đường Thành, Hoàn Kiếm, Hà Nội)."
    },
    imgtilte2_2: {
      imageSrc: "../image/chaca.png",
      title: "Chả Cá",
      description: "Chả cá Lã Vọng, cá lăng tẩm ướp, nướng than, chiên mỡ, ăn với bún, lạc rang, thìa là, hành hoa, mắm tôm pha tinh dầu cà cuống. Bí quyết từ năm 1871 tại phố Chả Cá. Gợi ý: Chả cá Lã Vọng (14 Chả Cá, Hoàn Kiếm, Hà Nội); Chả cá Thăng Long (2D & 6B Đường Thành, Hoàn Kiếm, Hà Nội)."
    },
    imgtilte3_1: {
      imageSrc: "../image/xoi.png",
      title: "Xôi Xéo",
      description: "Xôi xéo là món ăn quen thuộc của người dân vùng đồng bằng Bắc Bộ, đặc biệt là người Hà Nội. Du lịch Hải Phòng, Hà Nội, du khách dễ dàng bắt gặp tiếng rao thân quen của các gánh xôi trên các tuyến phố. Món ăn gắn với tuổi thơ của biết bao nhiêu người Thủ Đô để mỗi khi đi xa về, họ lại thèm được thưởng thức món ăn đậm hương vị đồng quê Việt. Xôi xéo được nấu từ loại nếp dẻo thơm và đậu xanh chắc hạt. Để có được gói xôi xéo thơm ngon, đòi hỏi người nấu phải cẩn thận, tỉ mỉ trong từng công đoạn từ khâu chọn nguyên liệu đến khâu nấu nếp, nấu đậu rồi cho ra thành phẩm. Sao cho ra được gói xôi nếp dẻo, đậu mịn, có màu vàng tươi đẹp mắt. Xôi xéo ăn kèm dừa bào sợi, đậu phộng hay mè rang, rưới thêm chút nước mỡ gà, hành phi vàng ngon khó cưỡng. Gợi ý Xôi xéo Oanh Oanh:Số 573 đường Đê La Thành, quận Đống Đa, Hà NộiSố 38 Nguyễn Chí Thanh, Ngọc Khánh, Ba Đình, Hà NộiXôi xéo Cô Tuyết - Quán xôi xéo Hà Nội có thâm niên hơn 30 năm: Ngõ Cự Lộc, Thanh Xuân, Hà NộiXôi Cát Lâm: số 24B Đường Thành, Hà Nội"
    },
    imgtilte3_2: {
      imageSrc: "../image/bunthang.png",
      title: "Bún Thang",
      description: "Bún thang có nguồn gốc từ Hà Nội, là món ăn truyền thống lâu đời, thường xuất hiện trong các dịp lễ, Tết hoặc những bữa ăn cầu kỳ của người Tràng An xưa. Tên gọi thang trong bún thang không liên quan đến cầu thang, mà bắt nguồn từ chữ Hán thang (湯) nghĩa là canh, nước dùng – ngụ ý món ăn là một loại bún chan nước, cầu kỳ như một thang thuốc bổ. Bún thang có đến 20 nguyên liệu khác nhau, được chế biến và sắp xếp một cách tinh tế và khéo léo. Nước dùng trong nấu từ xương gà, tôm khô, mực nướng để có vị ngọt thanh tự nhiên. Mỗi thành phần đều được sơ chế riêng, giữ được vị tự nhiên và không át lẫn nhau. Mùi thơm đặc trưng của rau răm, hành, mùi tàu hòa quyện cùng nước dùng trong veo tạo nên nét tao nhã, quý phái của ẩm thực Hà Nội xưa Gợi ý: Bún thang Bà Đức Cầu Gỗ: số 48 Cầu Gỗ, Đống Đa, Hà NộiBún thang Hàng Hòm: 11 Hàng Hòm, quận Hoàn KiếmBún thang Hàn Hành: số 29 Hàng Hành, quận Hoàn KiếmBún thang Lãn Ông: 16 Lãng Ông, quận Hoàn Kiếm"
    },
  },
  Trung: {
    mainContent: {
      imageSrc: "../image/miquang.png",
      title: "Mì Quảng",
      description: "Mì Quảng có xuất xứ từ tỉnh Quảng Nam, được xem là món ăn đại diện cho văn hóa ẩm thực của xứ Quảng (bao gồm cả Đà Nẵng ngày nay). Mì Quảng là một loại sợi mì, thường được làm từ bột gạo xay mịn với nước từ hạt dành dành và trứng cho có màu vàng và tráng thành từng lớp bánh mỏng, sau đó thái theo chiều ngang để có những sợi mì mỏng khoảng 5 -10mm. Mì Quảng phải ăn kèm với rau sống 9 vị thì mới tạo nên được hương vị nồng nàn: húng quế, xà lách tươi, cải non mới nụ, giá trắng có thể được trụng chín hoặc để sống, ngò rí, rau răm với hành hoa thái nhỏ và thêm hoa chuối cắt mỏng. Trên mì thịt lợn, tôm, thịt gà, thịt cá lóc (đôi khi có trứng luộc) cùng với nước dùng được hầm từ xương heo. Người ta còn bỏ thêm hành lá thái nhỏ, rau thơm, ớt đỏ... Thông thường nước dùng được gọi là nước nhân, đây cũng là một loại nước lèo nhưng rất cô đặc và ít nước. Ngoài ra mì còn được dùng kèm với bánh tráng mè, thêm cả đậu phộng rang giòn thơm tạo nên hương vị đặc trưng. Gợi ý Quán Lối Nhỏ - Cao lầu, mì Quảng: TK17/10 đường Nguyễn Cảnh Chân, phường Cầu Kho, Quận 1, TP. Hồ Chí Minh Mì xứ Quảng: 36 Tân Thắng, Sơn Kỳ, Tân Phú, Thành phố Hồ Chí Minh Phố Thị - Mì Quảng ngon ở Sài Gòn: số 57 đường Lê Văn Duyệt, phường Đa Kao, Quận 1, TP. Hồ Chí Minh"
    },
    imgtilte2_1: {
      imageSrc: "../image/bunbo.png",
      title: "Bún Bò Huế",
      description: "Bún bò Huế là một trong những đặc sản của thành phố Huế, mặc dù món bún này phổ biến trên cả ba miền ở Việt Nam và cả người Việt tại hải ngoại. Trong nước dùng của bún, người Huế thường nêm vào một ít mắm ruốc và sả cây, góp phần làm nên hương vị rất riêng của nồi bún bò Huế. Bún bò Huế được ăn với hành lá cắt nhỏ, hành tây cắt mỏng, chanh, nước mắm ngon dằm ớt trái và tương ớt kiểu Huế. Người Huế thuở xưa thường không ăn bún bò Huế với rau sống. Nếu có, thường là bắp chuối xắt mỏng, ít rau thơm (húng lủi) và rau răm. Bún bò Huế chính gốc không có thịt tái, chả heo, mà có giò heo, thịt bò bắp và gân bò; huyết và chả cua được thêm vào tùy theo từng hàng quán. Gợi ý: Bún bò Mỹ Tâm: Số 5 Trần Cao Vân, Vĩnh Ninh, Thành phố HuếBún bò Mệ Kéo: Số 20 Bạch Đằng, Phú Cát, Thành Phố Huế Bún bò Bà Tuyết: Khu phố Tây, số 47 Nguyễn Công Trứ, Phú Hội, Thành phố Huế"
    },
    imgtilte2_2: {
      imageSrc: "../image/caolau.png",
      title: "Cao Lầu",
      description: "Nếu có dịp đến vùng đất Quảng Nam, bạn đừng bỏ qua món cao lầu vì đây chính là đặc sản của người dân Hội An. Cao lầu là một loại mì màu vàng, dùng kèm với một ít nước dùng (hầm từ xương heo), có thịt xá xíu, tôm, thịt heo, ăn kèm với một số loại rau sống và bánh đa chiên (hoặc nướng).Theo lịch sử ghi chép, cao lầu đã xuất hiện từ thế kỷ 17. Trong khoảng thời gian này, các thương nhân Trung Quốc và Nhật Bản thường xuyên lui tới cảng Hội An. Họ đã mang theo văn hóa ẩm thực riêng của nước họ, rồi dần dần tạo điều kiện cho món cao lầu ra đời - có thể được xem là sự pha trộn giữa nền ẩm thực Trung và Nhật. Chưa dừng lại ở đó, món cao lầu còn được biến tấu theo thời gian để hợp khẩu vị hơn đối với người Việt, rồi trở thành món ăn đặc sản của người dân miền Trung. Tên gọi “cao lầu” có nghĩa là món ăn cao lương mỹ vị và được thưởng thức ở trên lầu cao. Nói một cách khác, thực khác có thể vừa dùng món ăn, vừa ngắm được toàn bộ cảnh đẹp của phố phường Hội An ngay từ trên lầu cao. Gợi ý:Cao lầu Bá Lễ: 45/3 Trần Hưng Đạo, Thành Phố Hội An, Quảng NamCao lầu Cô Liên: 21 Thái Phiên, Phường Minh An, Thành Phố Hội An, Quảng NamCao lầu Bà Bé: Khu ẩm thực chợ Hội An, Trần Phú, Thành Phố Hội An, Quảng Nam"
    },
    imgtilte3_1: {
      imageSrc: "../image/banhbeo.png",
      title: "Bánh Bèo Chén",
      description: "Bánh bèo chén là món phổ biến ở các tỉnh thành miền Trung, miền Nam nước ta. Ở Huế bánh bèo chén cũng gồm bột gạo, nhân tôm xay nhuyễn và nước chấm. Tuy nhiên có chút khác biệt với nơi khác như bánh bèo Huế mỏng hơn, có bột tôm sấy, ăn cùng da heo chiên giòn và chủ yếu đúc bằng chén. Khi ăn bánh bèo chén Huế, bạn nên dùng thìa nêm nước chấm trước rồi xoay nạo bánh tròn một vòng chén thì bánh sẽ tróc ra vừa miệng ăn.Gợi ý: Bánh bèo chén Hội An: Góc phố Đinh Tiên Hoàng và Hoàng Văn Thụ, Phường Minh AnBánh bèo chén Cô Xê:  613 Nguyễn Tất Thành, Thanh Hà"
    },
    imgtilte3_2: {
      imageSrc: "../image/banhbotloc.png",
      title: "Bánh Bột Lọc",
      description: "Bánh bột lọc xuất phát từ Huế, kinh đô của triều đại Nguyễn, và gắn liền với ẩm thực cung đình. Món ăn này được cho là đã tồn tại hàng trăm năm, ban đầu phục vụ vua chúa và tầng lớp quý tộc, thể hiện sự tinh tế và khéo léo trong chế biến. Ngày nay, bánh bột lọc đã trở thành biểu tượng ẩm thực miền Trung, lan tỏa khắp Việt Nam và cả cộng đồng người Việt ở nước ngoài. Bánh bột lọc được làm từ bột năng (tinh bột sắn), tạo nên lớp vỏ dai, trong suốt đặc trưng. Nhân bánh truyền thống gồm tôm tươi và thịt ba rọi, ướp với muối, tiêu, đường, và nước mắm. Một số biến thể sử dụng tôm không vỏ, thịt xay, mộc nhĩ, hoặc hành tây.Gợi ý:Nét Huế:CN1: 153 Láng Hạ, Đống Đa, Hà NộiCN2: 36 Thái Hà, Đống Đa, Hà NộiCN3: 54A Nguyễn Chí Thanh, Đống Đa, Hà NộiBánh Huế Tin Tin: G3 Green Bay Mễ Trì, Nam Từ Liêm, Hà NộiBánh Huế bột lọc Hương Giang:  16 ngách 134/44 Cầu Diễn, Hà Nội"
    },
  },
  Nam: {
    mainContent: {
      imageSrc: "../image/comtam.png",
      title: "Cơm Tấm",
      description: "Cơm tấm hay cơm sườn là một món cơm có xuất xứ từ Việt Nam, với thành phần chủ đạo gồm gạo tấm, thịt lợn nướng, trứng ốp la, nước mắm cùng nhiều nguyên liệu khác. Dù có nhiều tên gọi ở các vùng miền khác nhau, tuy nhiên nguyên liệu và cách thức chế biến của món ăn này lại gần như tương tự. Trong số đó, Sài Gòn được biết đến như một trong những địa danh nổi tiếng nhất gắn liền với món cơm tấm. Cơm tấm trước đây chủ yếu chỉ dùng cho bữa sáng, nhưng sau này người ta còn dùng trong cả bữa trưa lẫn bữa tối. Không chỉ phổ biến ở các hang quán lề đường, ngày nay món ăn còn xuất hiện trong các nhà hàng, quán ăn sang trọng và trải dài rộng khắp trên lãnh thổ Việt Nam.Gợi ý: Quán Cậu Ba Lê: Số 156D Mậu Thân, An Phú, quận Ninh Kiều, thành phố Cần Thơ.Cơm tấm 66: Số 64B đường Nguyễn Văn Cừ, An Hòa, quận Ninh Kiều, thành phố Cần Thơ.Cơm tấm Ba Ghiền: 84 Đặng Văn Ngữ, phường 10, quận Phú NhuậnCơm tấm Bãi Rác: 77 Lê Văn Linh, Quận 4"
    },
    imgtilte2_1: {
      imageSrc: "../image/bunmam.png",
      title: "Bún Mắm",
      description: "Trước đây, Bún mắm là một món ăn dân dã và được chế biến giản dị, nó thường được dùng cho những bữa ăn nhanh. Con mắm được nấu rã ra, sau đó lọc lấy phần nước trong, cho thêm một ít đường, hành sả và dùng chung với bún. Về sau để tăng hương vị và độ phong phú cho bún mắm, người ta cho thêm miếng cá, tôm, mực và heo quay. Nét đặc trưng của bún mắm là nước lèo. Nước lèo thường được làm từ mắm cá linh hay cá sặc và tùy theo mỗi người mà có sự nêm nếm khác nhau để món bún có mùi thơm đậm đà. Bún mắm thường được ăn với rau muống chẻ, cọng bông súng, rau đắng, bắp chuối, kèo nèo, giá và rau diếp cá (dấp cá).Gợi ýBún mắm trái ớt Út Béo 1:132G Nguyễn Văn Cừ Nối Dài, Phường An Khánh, Ninh Kiều, Cần ThơBún mắm Tám Dự: 5/1 Khu Vực 3, Phường An Khánh, Ninh Kiều, Cần Thơ Bún mắm 173: 594 Đ. 30 Tháng 4, Hưng Lợi, Ninh Kiều, Cần ThơBún mắm Mai: N44 Hoàng Diệu, phường 6, quận 4, Thành phố Hồ Chí Minh"
    },
    imgtilte2_2: {
      imageSrc: "../image/hutieu.png",
      title: "Hủ Tiếu Nam Vang",
      description: "Hủ tiếu Nam Vang được nhiều người yêu thích là nhờ vị ngọt thanh đặc trưng từ xương hầm, mực và tôm khô. Ngoài ra, món này cũng thường được phân biệt nhờ combo các loại topping sau: thịt bằm, tôm, trứng cút. Đây là ba món mà lúc nào cũng phải có trong một tô hủ tiếu Nam Vang. Ngoài ra có thể thêm một số món như lòng lợn, tim, thịt nạc… Nam Vang thực ra là một tên gọi khác của Phnom Penh – thủ đô Campuchia. Do vị trí địa lý kề cận nhau mà ẩm thực Việt Nam cùng ẩm thực Campuchia có thể xem như thân thiết, các món ăn thường được người dân hai nước trao đổi qua lại và hủ tiếu Nam Vang mang âm hưởng xứ sở chùa tháp là một trong số đó. Điểm đặc trưng của hủ tiếu Nam Vang là cách nấu nước dùng rất công phu. Nước dùng được nấu bằng cách hầm xương ống cùng mực và tôm khô trên lửa nhỏ liu riu, liên tục vớt bọt để nước dùng không bị đục và giữ được sự trong veo, sạch sẽ. Gợi ý:Hủ tiếu Nam Vang Đạt Thành: 232 Nguyễn Thị Thập, phường Bình Thuận, quận 7, TP HCM.Hủ tiếu Nam Vang Nhân Quán: 122D Cách mạng tháng 8, phường 7, quận 3,TPHCM.GU22 Coffee:701B Nguyễn Văn Cừ nối dài, Quận Ninh Kiều, Cần Thơ298C/4 Nguyễn Văn Linh, Quận Ninh Kiều, Cần ThơHủ Tiếu Nam Vang Nhân Quán: 13A Phan Đình Phùng, Quận Ninh Kiều, Cần Thơ."
    },
    imgtilte3_1: {
      imageSrc: "../image/goicuon.png",
      title: "Gỏi Cuốn",
      description: "Gỏi cuốn hay còn được gọi là Nem cuốn (Phương ngữ miền Bắc), là một món ăn khá phổ biến ở Việt Nam. Gỏi cuốn có xuất xứ từ Miền nam Việt Nam với tên gọi là gỏi cuốn - bằng các nguyên liệu gồm rau xà lách, húng quế, tía tô, tôm khô, rau thơm, thịt luộc, tôm tươi.. tất cả được cuộn trong vỏ bánh tráng. Gia vị dùng kèm là tương hột trộn với lạc rang giã nhỏ phi bằng dầu ăn với hành khô.... tất cả thái nhỏ và cuộn trong vỏ làm từ bột mì hoặc là tương ớt trộn với lạc rang giã nhỏ phi bằng dầu ăn với hành khô. Gợi ý: Bếp cuốn Sài Gòn: Số 76 Võ Văn Tần, Phường 6, Quận 3, TP Hồ Chí Minh.Gỏi cuốn Lê Văn Sĩ:  Số 359 Lê Văn Sỹ, Phường 13, Quận 3, TP Hồ Chí Minh.Gói cuốn Minh Bùi Viện: Số 84/32 Bùi Viện, Phường Phạm Ngũ Lão, Quận 1, TP Hồ Chí Minh."
    },
    imgtilte3_2: {
      imageSrc: "../image/banhxeo.png",
      title: "Bánh Xèo",
      description: "Đa số người dân miền Tây cho rằng  xuất phát từ người Khmer. Tên món bánh này cũng được đặt theo âm thanh “xèo … xèo” khi loại bánh này được chế biến. Dần dần bánh được phổ biến ra nhiều địa phương, trở thành món đặc sản gắn liền với ẩm thực của miền Tây sông nước nói chung và Cần Thơ nói riêng. Phần nhân bánh người miền Tây sử dụng là các loại thịt như heo, vịt, tôm, tép... Nhân băm nhuyễn, xào chín và nêm nếm gia vị trước. Khi đổ bột  vào chảo tráng đều thì cho nhân lên, ngoài thịt còn có rau củ như giá đỗ, bông điên điển, bông thiên lý... Chiên bánh cho đến khi chín đều thì gắp ra. Gợi ý: 7 Tới:  45 Hoàng Quốc Việt, Cái Sơn Hàng Bàng, Quận Ninh Kiều, Cần Thơ Tân Định: Lê Lợi, Vòng Xoay Công Viên Nước, Quận Ninh Kiều, Cần Thơ Ngọc Ngân: Đại Lộ Lê Lợi, Quận Ninh Kiều, TP Cần Thơ "
    },
  },
},
    PostCast: {
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

  const content = ["PostCast", "WebBlog", "Video"].includes(menus)
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
