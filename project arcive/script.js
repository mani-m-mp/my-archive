// داده‌های نمونه برای جزوه‌ها و گزارش‌کارها
const notes = [
    { title: "جزوه ریاضی", link: "math-note.pdf" },
    { title: "جزوه فیزیک", link: "physics-note.pdf" },
    { title: "جزوه شیمی", link: "chemistry-note.pdf" }
];

const reports = [
    { title: "گزارش کار آزمایشگاه فیزیک", link: "physics-lab-report.pdf" },
    { title: "گزارش کار آزمایشگاه شیمی", link: "chemistry-lab-report.pdf" }
];

// تابع برای نمایش لیست جزوه‌ها
function displayNotes() {
    const notesList = document.getElementById("notes-list");
    notes.forEach(note => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = note.link;
        link.textContent = note.title;
        listItem.appendChild(link);
        notesList.appendChild(listItem);
    });
}

// تابع برای نمایش لیست گزارش‌کارها
function displayReports() {
    const reportsList = document.getElementById("reports-list");
    reports.forEach(report => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = report.link;
        link.textContent = report.title;
        listItem.appendChild(link);
        reportsList.appendChild(listItem);
    });
}

// فراخوانی توابع برای نمایش داده‌ها
displayNotes();
displayReports();
