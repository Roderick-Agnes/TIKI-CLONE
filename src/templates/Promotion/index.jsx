import React, {
  useEffect,
  useState,
} from "react";
import CountdownTimer from "../../components/CountdownTimer";
import Carousel from "../../components/Carousel";
import ProductsCarousel from "../../components/ProductsCarousel";
import axios from "axios";
import "./index.css";

//config time for countdown timer
const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays =
  NOW_IN_MS + THREE_DAYS_IN_MS;

const API_DEALS_PRODUCT_URL =
  "https://tiki.vn/api/v2/widget/deals/collection?per_page=12&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";
const promotions = [
  {
    deal_id: 287292930,
    name: "Tâm Lý Học Về Tiền",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "book_deals",
    discount_percent: 43,
    special_price: 107730,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0.4902,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 10,
      qty_ordered: 8,
      qty_remain: 2,
      percent: 20,
      status: "progress-bar-danger",
      progress_text: "Đã bán 8",
      ordered_percent: 80,
      is_hot_flag: true,
    },
    product: {
      id: 75953558,
      master_id: 75953557,
      sku: "3981544195117",
      name: "Tâm Lý Học Về Tiền",
      url_key: "tam-ly-hoc-ve-tien-p75953557",
      url_path:
        "tam-ly-hoc-ve-tien-p75953557.html?spid=75953558",
      type: "simple",
      short_description: "",
      price: 107730,
      list_price: 189000,
      original_price: 189000,
      price_prefix: "1xx.xxx",
      badges_new: [
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 81270,
      discount_rate: 43,
      rating_average: 4.8,
      review_count: 2969,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/83/23/b7/14a42ae4f66c9b8b298aaef4b9671442.jpg",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 75953558,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 1000+",
        value: 18138,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 287187785,
    name: "[TÚI 10 CÁI - FAMAPRO MAX] Khẩu trang y tế kháng khuẩn 4 lớp Famapro Max dạng túi (10 cái/ túi) - XÁM - 1 TÚI",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "best_deals",
    discount_percent: 92,
    special_price: 1000,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0.0807,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 20,
      qty_ordered: 4,
      qty_remain: 16,
      percent: 80,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 20,
    },
    product: {
      id: 76168089,
      master_id: 198824514,
      sku: "1484133706982",
      name: "[TÚI 10 CÁI - FAMAPRO MAX] Khẩu trang y tế kháng khuẩn 4 lớp Famapro Max dạng túi (10 cái/ túi) - XÁM - 1 TÚI",
      url_key:
        "-tui-10-cai-famapro-max-khau-trang-y-te-khang-khuan-4-lop-famapro-max-dang-tui-10-cai-tui-p198824514",
      url_path:
        "-tui-10-cai-famapro-max-khau-trang-y-te-khang-khuan-4-lop-famapro-max-dang-tui-10-cai-tui-p198824514.html?spid=76168089",
      type: "simple",
      short_description: "",
      price: 1000,
      list_price: 12000,
      original_price: 12000,
      price_prefix: "1.xxx",
      badges_new: [
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 11000,
      discount_rate: 92,
      rating_average: 5,
      review_count: 54,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/37/9d/7e/66712ca63dee4453b0792465fc0530f8.png",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 76168089,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 555",
        value: 555,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 283862107,
    name: "Dầu Đậu Nành Simply 1L / 2L / 5L - 5 Lít",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "best_deals",
    discount_percent: 28,
    special_price: 290000,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 50,
      qty_ordered: 0,
      qty_remain: 50,
      percent: 100,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 0,
    },
    product: {
      id: 196328,
      master_id: 133696713,
      sku: "8934988020557",
      name: "Dầu Đậu Nành Simply 1L / 2L / 5L - 5 Lít",
      url_key:
        "dau-dau-nanh-simply-1l-2l-5l-p133696713",
      url_path:
        "dau-dau-nanh-simply-1l-2l-5l-p133696713.html?spid=196328",
      type: "simple",
      short_description: "",
      price: 290000,
      list_price: 400000,
      original_price: 400000,
      price_prefix: "2xx.xxx",
      badges_new: [
        {
          placement: "under_price",
          code: "best_price_guaranteed",
          type: "minor_badge",
          icon: "https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png",
          icon_width: 130,
          icon_height: 24,
          text_color: null,
          background_color: null,
          href: "https://hotro.tiki.vn/hc/vi/sections/900000370543-Ch%C6%B0%C6%A1ng-tr%C3%ACnh-R%E1%BA%BB-h%C6%A1n-ho%C3%A0n-ti%E1%BB%81n-",
          text: null,
        },
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 110000,
      discount_rate: 28,
      rating_average: 5,
      review_count: 1373,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/c9/b0/60/f513a9205ae19b4aeca512b0cba261d1.jpg",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 196328,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 1000+",
        value: 120759,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 287338500,
    name: "Bộ Hộp Cơm Giữ Nhiệt Lock&Lock Easy Carry 2.0L LHC8039BLU Có Túi (1 Hộp 720ml, 2 Hộp 420ml Kèm 1 Bộ Muỗng Và Nĩa)  - Màu Xanh",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "brand_offer_lockandlock",
    discount_percent: 50,
    special_price: 834000,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0.0059,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 30,
      qty_ordered: 1,
      qty_remain: 29,
      percent: 97,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 3,
    },
    product: {
      id: 53583476,
      master_id: 53583472,
      sku: "1512013988491",
      name: "Bộ Hộp Cơm Giữ Nhiệt Lock&Lock Easy Carry 2.0L LHC8039BLU Có Túi (1 Hộp 720ml, 2 Hộp 420ml Kèm 1 Bộ Muỗng Và Nĩa)  - Màu Xanh",
      url_key:
        "bo-hop-com-giu-nhiet-lock-lock-easy-carry-2l-lhc8039-co-tui-1-hop-720ml-2-hop-420ml-kem-1-bo-muong-va-nia-p53583472",
      url_path:
        "bo-hop-com-giu-nhiet-lock-lock-easy-carry-2l-lhc8039-co-tui-1-hop-720ml-2-hop-420ml-kem-1-bo-muong-va-nia-p53583472.html?spid=53583476",
      type: "simple",
      short_description: "",
      price: 834000,
      list_price: 1667000,
      original_price: 1667000,
      price_prefix: "8xx.xxx",
      badges_new: [
        {
          placement: "under_price",
          code: "best_price_guaranteed",
          type: "minor_badge",
          icon: "https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png",
          icon_width: 130,
          icon_height: 24,
          text_color: null,
          background_color: null,
          href: "https://hotro.tiki.vn/hc/vi/sections/900000370543-Ch%C6%B0%C6%A1ng-tr%C3%ACnh-R%E1%BA%BB-h%C6%A1n-ho%C3%A0n-ti%E1%BB%81n-",
          text: null,
        },
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 833000,
      discount_rate: 50,
      rating_average: 4.7,
      review_count: 2356,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/00/2f/10/4a6a633dbdf0860e6559db74eb05d22b.jpg",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 53583476,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 1000+",
        value: 9567,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 287268986,
    name: "Máy hút bụi giường nệm không dây UV PerySmith XTREME V20 cầm tay hiện đại - Hàng chính hãng",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "brand_offer",
    discount_percent: 49,
    special_price: 990000,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0.0059,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 30,
      qty_ordered: 1,
      qty_remain: 29,
      percent: 97,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 3,
    },
    product: {
      id: 174128754,
      master_id: 147776002,
      sku: "7414061603552",
      name: "Máy hút bụi giường nệm không dây UV PerySmith XTREME V20 cầm tay hiện đại - Hàng chính hãng",
      url_key:
        "may-hut-bui-giuong-nem-khong-day-uv-perysmith-xtreme-v20-cam-tay-hien-dai-p147776002",
      url_path:
        "may-hut-bui-giuong-nem-khong-day-uv-perysmith-xtreme-v20-cam-tay-hien-dai-p147776002.html?spid=174128754",
      type: "simple",
      short_description: "",
      price: 990000,
      list_price: 1954000,
      original_price: 1954000,
      price_prefix: "9xx.xxx",
      badges_new: [
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 964000,
      discount_rate: 49,
      rating_average: 4.7,
      review_count: 445,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/a2/82/d2/b0be82971a0551d5b0ec763fb49eb398.png",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 174128754,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 1000+",
        value: 1884,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 287179757,
    name: "Son Dưỡng Môi DHC Lip Cream 1,5g",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "fashion_deals",
    discount_percent: 20,
    special_price: 159000,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0.0567,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 10,
      qty_ordered: 2,
      qty_remain: 8,
      percent: 80,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 20,
    },
    product: {
      id: 12888213,
      master_id: 7331189,
      sku: "1411574632303",
      name: "Son Dưỡng Môi DHC Lip Cream 1,5g",
      url_key:
        "son-duong-moi-dhc-lip-cream-1-5g-p7331189",
      url_path:
        "son-duong-moi-dhc-lip-cream-1-5g-p7331189.html?spid=12888213",
      type: "simple",
      short_description: "",
      price: 159000,
      list_price: 199000,
      original_price: 199000,
      price_prefix: "1xx.xxx",
      badges_new: [
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 40000,
      discount_rate: 20,
      rating_average: 4.8,
      review_count: 196,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/be/59/f4/53e5bbb7a8dce189732129850e207a67.jpg",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 12888213,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 1000+",
        value: 1142,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 287205415,
    name: "Thùng 24 Lon Nước Ngọt Có Gaz 7Up lon xanh (320ml/lon)",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "brand_offer_7up",
    discount_percent: 23,
    special_price: 199900,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 45,
      qty_ordered: 0,
      qty_remain: 45,
      percent: 100,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 0,
    },
    product: {
      id: 98578837,
      master_id: 98578829,
      sku: "9373403200250",
      name: "Thùng 24 Lon Nước Ngọt Có Gaz 7Up lon xanh (320ml/lon)",
      url_key:
        "thung-24-lon-nuoc-ngot-co-gaz-7up-320ml-lon-p98578829",
      url_path:
        "thung-24-lon-nuoc-ngot-co-gaz-7up-320ml-lon-p98578829.html?spid=98578837",
      type: "simple",
      short_description: "",
      price: 199900,
      list_price: 260000,
      original_price: 260000,
      price_prefix: "1xx.xxx",
      badges_new: [
        {
          placement: "under_price",
          code: "best_price_guaranteed",
          type: "minor_badge",
          icon: "https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png",
          icon_width: 130,
          icon_height: 24,
          text_color: null,
          background_color: null,
          href: "https://hotro.tiki.vn/hc/vi/sections/900000370543-Ch%C6%B0%C6%A1ng-tr%C3%ACnh-R%E1%BA%BB-h%C6%A1n-ho%C3%A0n-ti%E1%BB%81n-",
          text: null,
        },
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 60100,
      discount_rate: 23,
      rating_average: 4.6,
      review_count: 541,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/e1/c3/a8/0790f91bf9889ad243ec291fe6b54819.PNG",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 98578837,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 1000+",
        value: 3618,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 287293279,
    name: "Giáo Trình Chuẩn HSK 2 - Bài Học (Kèm file MP3)",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "book_deals",
    discount_percent: 34,
    special_price: 130400,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0.0567,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 10,
      qty_ordered: 2,
      qty_remain: 8,
      percent: 80,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 20,
    },
    product: {
      id: 268145,
      master_id: 544731,
      sku: "9786045854679",
      name: "Giáo Trình Chuẩn HSK 2 - Bài Học (Kèm file MP3)",
      url_key:
        "giao-trinh-chuan-hsk-2-bai-hoc-kem-file-mp3-p544731",
      url_path:
        "giao-trinh-chuan-hsk-2-bai-hoc-kem-file-mp3-p544731.html?spid=268145",
      type: "simple",
      short_description: "",
      price: 130400,
      list_price: 198000,
      original_price: 198000,
      price_prefix: "1xx.xxx",
      badges_new: [
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 67600,
      discount_rate: 34,
      rating_average: 5,
      review_count: 411,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/3f/88/66/47d1ad0fa678ef722ed7609740740749.jpg",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 268145,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 1000+",
        value: 3046,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 287162913,
    name: "Cây lau nhà Kitimop-X tự vắt thông minh không cần thùng, chổi lau nhà xoay 360 độ cứng cáp chắc chắn bền bỉ - Kitimop-X",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "brand_offer",
    discount_percent: 49,
    special_price: 145000,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0.0362,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 5,
      qty_ordered: 1,
      qty_remain: 4,
      percent: 80,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 20,
    },
    product: {
      id: 186879902,
      master_id: 186879900,
      sku: "3116575034252",
      name: "Cây lau nhà Kitimop-X tự vắt thông minh không cần thùng, chổi lau nhà xoay 360 độ cứng cáp chắc chắn bền bỉ - Kitimop-X",
      url_key:
        "cay-lau-nha-tu-vat-kitimop-x-ong-inox-chong-ri-cung-cap-ban-vat-khoe-khoan-vat-kho-dung-ben-hieu-qua-p186879900",
      url_path:
        "cay-lau-nha-tu-vat-kitimop-x-ong-inox-chong-ri-cung-cap-ban-vat-khoe-khoan-vat-kho-dung-ben-hieu-qua-p186879900.html?spid=186879902",
      type: "simple",
      short_description: "",
      price: 145000,
      list_price: 285000,
      original_price: 285000,
      price_prefix: "1xx.xxx",
      badges_new: [
        {
          placement: "under_price",
          code: "best_price_guaranteed",
          type: "minor_badge",
          icon: "https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png",
          icon_width: 130,
          icon_height: 24,
          text_color: null,
          background_color: null,
          href: "https://hotro.tiki.vn/hc/vi/sections/900000370543-Ch%C6%B0%C6%A1ng-tr%C3%ACnh-R%E1%BA%BB-h%C6%A1n-ho%C3%A0n-ti%E1%BB%81n-",
          text: null,
        },
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 140000,
      discount_rate: 49,
      rating_average: 4.6,
      review_count: 47,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/4b/c8/5b/7f8cf138933caee9623f705ba9a508f6.jpg",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 186879902,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 246",
        value: 246,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 287400173,
    name: "Túi Xách Nữ Oscar - OCWHBS051 - NAVY",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "brand_offer_pierre_cardin",
    discount_percent: 68,
    special_price: 790000,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0.0279,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 20,
      qty_ordered: 2,
      qty_remain: 18,
      percent: 90,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 10,
    },
    product: {
      id: 145464246,
      master_id: 145464240,
      sku: "7226583709163",
      name: "Túi Xách Nữ Oscar - OCWHBS051 - NAVY",
      url_key:
        "tui-xach-nu-oscar-ocwhbs051-p145464240",
      url_path:
        "tui-xach-nu-oscar-ocwhbs051-p145464240.html?spid=145464246",
      type: "simple",
      short_description: "",
      price: 790000,
      list_price: 2490000,
      original_price: 2490000,
      price_prefix: "7xx.xxx",
      badges_new: [
        {
          placement: "under_price",
          code: "best_price_guaranteed",
          type: "minor_badge",
          icon: "https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png",
          icon_width: 130,
          icon_height: 24,
          text_color: null,
          background_color: null,
          href: "https://hotro.tiki.vn/hc/vi/sections/900000370543-Ch%C6%B0%C6%A1ng-tr%C3%ACnh-R%E1%BA%BB-h%C6%A1n-ho%C3%A0n-ti%E1%BB%81n-",
          text: null,
        },
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 1700000,
      discount_rate: 68,
      rating_average: 5,
      review_count: 1,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/e2/f8/c0/80de17d72b0f6854b913c1c9c2feeee1.jpg",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 145464246,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 10",
        value: 10,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 285514063,
    name: "Máy giặt Samsung Inverter 8 kg WW80T3020WW - Chỉ giao HCM",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "brand_offer_samsung",
    discount_percent: 46,
    special_price: 4829000,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 5,
      qty_ordered: 0,
      qty_remain: 5,
      percent: 100,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 0,
    },
    product: {
      id: 72748643,
      master_id: 72748642,
      sku: "5940247865428",
      name: "Máy giặt Samsung Inverter 8 kg WW80T3020WW - Chỉ giao HCM",
      url_key:
        "may-giat-samsung-inverter-8-kg-ww80t3020ww-chi-giao-hcm-p72748642",
      url_path:
        "may-giat-samsung-inverter-8-kg-ww80t3020ww-chi-giao-hcm-p72748642.html?spid=72748643",
      type: "simple",
      short_description: "",
      price: 4829000,
      list_price: 8990000,
      original_price: 8990000,
      price_prefix: "4.xxx.xxx",
      badges_new: [
        {
          placement: "bottom",
          code: "freeship_tikipro",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/b5/91/02/657464e151b389460b42ad1a346f4f2e.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 4161000,
      discount_rate: 46,
      rating_average: 4.6,
      review_count: 595,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/56/5b/34/33ee8290b001fac4d8ba9fbea64964a3.jpg",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 72748643,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 1000+",
        value: 1499,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
  {
    deal_id: 287188869,
    name: "Thùng 24 Lon Bia Hoegaarden White (330ml / Lon)",
    deal_status: "running",
    status: 2,
    url: "",
    tags: "brand_offer_hoegaarden",
    discount_percent: 10,
    special_price: 609000,
    special_from_date: 1669568400,
    from_date: "2022-11-28 00:00:00",
    special_to_date: 1669597200,
    score: 0,
    store_id: 0,
    store_name: "",
    store_logo: "",
    progress: {
      qty: 50,
      qty_ordered: 0,
      qty_remain: 50,
      percent: 100,
      status: "progress-bar-success",
      progress_text: "Vừa mở bán",
      ordered_percent: 0,
    },
    product: {
      id: 198459432,
      master_id: 198459430,
      sku: "8329689300134",
      name: "Thùng 24 Lon Bia Hoegaarden White (330ml / Lon)",
      url_key:
        "thung-24-lon-bia-hoegaarden-white-330ml-lon-p198459430",
      url_path:
        "thung-24-lon-bia-hoegaarden-white-330ml-lon-p198459430.html?spid=198459432",
      type: "simple",
      short_description: "",
      price: 609000,
      list_price: 675000,
      original_price: 675000,
      price_prefix: "6xx.xxx",
      badges_new: [
        {
          placement: "under_price",
          code: "best_price_guaranteed",
          type: "minor_badge",
          icon: "https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png",
          icon_width: 130,
          icon_height: 24,
          text_color: null,
          background_color: null,
          href: "https://hotro.tiki.vn/hc/vi/sections/900000370543-Ch%C6%B0%C6%A1ng-tr%C3%ACnh-R%E1%BA%BB-h%C6%A1n-ho%C3%A0n-ti%E1%BB%81n-",
          text: null,
        },
        {
          placement: "bottom",
          code: "freeship_tikifast",
          type: "icon_badge",
          icon: "https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png",
          icon_width: 91,
          icon_height: 16,
          text_color: null,
          background_color: null,
          href: null,
          text: null,
        },
      ],
      discount: 66000,
      discount_rate: 10,
      rating_average: 5,
      review_count: 14,
      favourite_count: 0,
      thumbnail_url:
        "https://salt.tikicdn.com/cache/280x280/ts/product/fe/97/ee/a8f6a016576b7e7034413edd48841975.jpg",
      has_ebook: false,
      inventory_status: "",
      inventory_type: "",
      productset_group_name: "",
      is_flower: false,
      is_fresh: false,
      is_gift_card: false,
      seller_product_id: 198459432,
      delivery_info_text: "",
      quantity_sold: {
        text: "Đã bán 103",
        value: 103,
      },
      stock_item: {
        max_sale_qty: 1000,
        min_sale_qty: 1,
        preorder_date: null,
        qty: 1000,
      },
    },
  },
];
const API_THUMBNAILS_URL =
  "https://api.tiki.vn/raiden/v2/home/widgets/rewards/asa/new?platform=desktop&trackity_id=0133075b-db6b-f905-4dbf-c62d0902c027";

function Promotion(props) {
  const [dealProdusts, setDealProdusts] =
    useState([]);
  const [thumbnails, setThumbnails] = useState(
    [],
  );

  useEffect(() => {
    (async () => {
      try {
        //set deal products data to state
        setDealProdusts(promotions);
         

        //set thumbnails data to state
        await axios
          .get(API_THUMBNAILS_URL)
          .then((res) => {
            setThumbnails(res.data.main_content);
          });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <section className="inline-block z-[9] w-full laptop:max-w-[73.75rem] ">
      <div className="flex flex-row  laptop:gap-2 items-center w-full h-[17rem]">
        <div className="w-full h-full bg-white rounded laptop:max-w-[692px]">
          <div className="flex justify-between items-center w-full pt-[1rem] pb-[0.5rem] px-[0.5rem] tablet:px-[1rem]">
            <div className="flex justify-start items-center w-full">
              <div className="flex flex-row gap-[0.5rem]">
                <div className="flex flex-row justify-center items-center">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
                    alt="giá-sốc"
                  />
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"
                    alt="icon-flash"
                    width={21}
                    className="hidden laptop:block animate-scale"
                  />
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
                    alt="flash-deal"
                    className="hidden laptop:block"
                  />
                </div>
                <CountdownTimer
                  targetDate={
                    dateTimeAfterThreeDays
                  }
                />
              </div>
            </div>
            <div className="flex justify-end flex-shrink-[3.5] items-center w-full">
              <span className="text-[1rem] text-[#0B74E5] font-thin cursor-pointer">
                Xem thêm
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center w-full px-[0.5rem] tablet:px-[1rem]">
            <ProductsCarousel
              data={dealProdusts}
              newSettings={{
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: false,
                focusOnSelect: true,
                speed: 2500,
                slidesToShow: 3,
                slidesToScroll: 2,
                swipeToSlide: true,
                // centerMode: true,
              }}
            />
          </div>
        </div>
        <div className="w-full h-full rounded object-cover hidden laptop:flex justify-center items-center max-w-[480px]">
          <Carousel
            data={thumbnails}
            newSettings={{
              dots: false,
              speed: 1000,
              autoplay: true,
              slidesToShow: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Promotion;
