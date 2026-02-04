const reminders = [];

const titleInput = document.getElementById("remTitle");
const priorityInput = document.getElementById("remPriority");
const colorInput = document.getElementById("remColor");
const descriptionInput = document.getElementById("remDescription");
const reminderContainer = document.getElementById("reminderTable");

function createReminder(title, priority, color, description) {
    return { title, priority, color, description };
}

function clearReminderInputs() {
    titleInput.value = "";
    priorityInput.value = "";
    descriptionInput.value = "";
}

function showReminderTable() {
    let table = `
        <table border="1" cellpadding="5">
            <tr>
                <th>Title</th>
                <th>Priority</th>
                <th>Description</th>
            </tr>
    `;

    reminders.forEach(rem => {
        table += `
            <tr>
                <td style="color:${rem.color}">${rem.title}</td>
                <td>${rem.priority}</td>
                <td>${rem.description}</td>
            </tr>
        `;
    });

    table += "</table>";
    reminderContainer.innerHTML = table;
}

document.getElementById("addReminder").addEventListener("click", () => {
    const reminder = createReminder(
        titleInput.value,
        priorityInput.value,
        colorInput.value,
        descriptionInput.value
    );

    reminders.push(reminder);
    clearReminderInputs();
});

document.getElementById("showReminders").addEventListener("click", showReminderTable);
