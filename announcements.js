// announcements.js - ระบบป๊อปอัปข่าวสารลอยมุมขวาบน
(function() {
    // 📢 ข้อมูลข่าวสาร (แก้ไขข้อความ/วันที่ ตรงนี้ได้เลย)
    const noticeData = {
        title: "📢 ข่าวสารประชาสัมพันธ์",
        message: "ขอความร่วมมือ อสม. เร่งสำรวจกลุ่มผู้ป่วยติดเตียงและวัดความดันผู้สูงอายุในพื้นที่ เพื่อสรุปรายงานประจำเดือนเสนอ รพ.สต.",
        date: "28 ก.ค. 2569"
    };

    // 🎨 สร้าง Style สำหรับป๊อปอัปและปุ่มกระดิ่ง
    const style = document.createElement('style');
    style.innerHTML = `
        /* ป๊อปอัปข่าวสารลอยมุมขวา */
        .toast-notice {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 310px;
            background: #ffffff;
            border-left: 5px solid #fbc02d;
            border-radius: 14px;
            padding: 14px 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            animation: slideInRight 0.5s ease-out;
            font-family: 'Segoe UI', Tahoma, sans-serif;
        }

        @keyframes slideInRight {
            from { transform: translateX(120%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        .toast-notice.closed {
            transform: translateX(130%);
            opacity: 0;
            pointer-events: none;
        }

        .toast-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 6px;
        }

        .toast-badge {
            background-color: #fff9c4;
            color: #f57f17;
            font-size: 10.5px;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 12px;
            border: 1px solid #fff59d;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .btn-close-toast {
            background: none;
            border: none;
            font-size: 18px;
            color: #5c677d;
            cursor: pointer;
            padding: 0 4px;
            line-height: 1;
        }
        .btn-close-toast:hover { color: #d32f2f; }

        .toast-body {
            font-size: 12px;
            color: #1c2541;
            line-height: 1.45;
            text-align: left;
        }

        .toast-date {
            display: block;
            margin-top: 6px;
            font-size: 10.5px;
            color: #5c677d;
            text-align: right;
        }

        /* ปุ่มกระดิ่งเล็กๆ มุมขวาบน */
        .bell-toggle-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 42px;
            height: 42px;
            background: #ffffff;
            border: 1.5px solid #fbc02d;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            z-index: 9998;
            transition: transform 0.2s;
        }
        .bell-toggle-btn:hover { transform: scale(1.1); }

        .bell-badge {
            position: absolute;
            top: 2px;
            right: 2px;
            width: 10px;
            height: 10px;
            background-color: #d32f2f;
            border-radius: 50%;
            border: 2px solid white;
        }

        /* รองรับหน้าจอมือถือ */
        @media (max-width: 480px) {
            .toast-notice {
                top: 15px;
                right: 15px;
                left: 15px;
                width: auto;
            }
            .bell-toggle-btn {
                top: 15px;
                right: 15px;
            }
        }
    `;
    document.head.appendChild(style);

    // 🛠️ สร้างโครงสร้าง HTML สำหรับป๊อปอัป
    const widgetContainer = document.createElement('div');
    widgetContainer.innerHTML = `
        <div class="bell-toggle-btn" onclick="toggleNoticeWidget()">
            🔔
            <div class="bell-badge"></div>
        </div>

        <div class="toast-notice" id="toastNoticeWidget">
            <div class="toast-header">
                <div class="toast-badge">${noticeData.title}</div>
                <button class="btn-close-toast" onclick="toggleNoticeWidget()">&times;</button>
            </div>
            <div class="toast-body">
                ${noticeData.message}
            </div>
            <span class="toast-date">${noticeData.date}</span>
        </div>
    `;
    document.body.appendChild(widgetContainer);

    // ⚡ ฟังก์ชันสำหรับซ่อน/แสดง ป๊อปอัป
    window.toggleNoticeWidget = function() {
        const toast = document.getElementById('toastNoticeWidget');
        if (toast) {
            toast.classList.toggle('closed');
        }
    };
})();