let borrowRecords = [
  { recordId: "PM01", studentId: "SV101", bookTitle: "Kỹ nghệ phần mềm", borrowDays: 10, isReturned: false },
  { recordId: "PM02", studentId: "SV102", bookTitle: "Thiết kế CSDL", borrowDays: 20, isReturned: false },
  { recordId: "PM03", studentId: "SV103", bookTitle: "Lập trình C++", borrowDays: 7, isReturned: true }
];

// 1. Create: Thêm phiếu PM04
borrowRecords.push({
  recordId: "PM04",
  studentId: "SV104",
  bookTitle: "Clean Code",
  borrowDays: 18,
  isReturned: false
});

// 2. Read: Tính phạt quá hạn (> 14 ngày)
console.log("DANH SÁCH PHIẾU QUÁ HẠN:");
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].borrowDays > 14) {
    let overdueDays = borrowRecords[i].borrowDays - 14;
    let fine = overdueDays * 5000;
    console.log("- " + borrowRecords[i].recordId + " (" + borrowRecords[i].studentId + "): Trễ " + overdueDays + " ngày, phạt " + fine + " VNĐ");
  }
}

// 3. Update: Cập nhật PM01 trả sách
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM01") {
    borrowRecords[i].isReturned = true;
    break;
  }
}

// 4. Delete: Xóa phiếu PM03
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM03") {
    borrowRecords.splice(i, 1);
    break;
  }
}

// 5. In bảng tổng kết
console.log("\n+--------+----------+--------------------+----------+------------+");
console.log("| Mã PM  | Mã SV    | Tên Sách           | Số Ngày  | Đã Trả?    |");
console.log("+--------+----------+--------------------+----------+------------+");

for (let i = 0; i < borrowRecords.length; i++) {
  let r = borrowRecords[i];
  let id = r.recordId.padEnd(6);
  let sv = r.studentId.padEnd(8);
  let title = (r.bookTitle.length > 18 ? r.bookTitle.substring(0, 15) + "..." : r.bookTitle).padEnd(18);
  let days = String(r.borrowDays).padStart(8);
  let returned = (r.isReturned ? "Có" : "Chưa").padEnd(10);

  console.log("| " + id + " | " + sv + " | " + title + " | " + days + " | " + returned + " |");
}

console.log("+--------+----------+--------------------+----------+------------+");