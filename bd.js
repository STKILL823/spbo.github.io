// db.js — Отдельная "база данных" для GitChat

export let DB = {
    users: [],      // все зарегистрированные пользователи
    chats: []       // все чаты (по репозиториям или с пользователями)
};

// Функция для добавления тестового пользователя (для удобства)
export function addTestUsers() {
    if (DB.users.length === 0) {
        DB.users = [
            { id: 1, username: "octocat", avatar: "https://github.com/identicons/octocat.png" },
            { id: 2, username: "vercel", avatar: "https://github.com/identicons/vercel.png" },
            { id: 3, username: "dan_abramov", avatar: "https://github.com/identicons/dan_abramov.png" }
        ];
    }
}

export function saveToLocal() {
    try {
        localStorage.setItem('gitchat_db', JSON.stringify(DB));
    } catch(e) {}
}

export function loadFromLocal() {
    try {
        const saved = localStorage.getItem('gitchat_db');
        if (saved) DB = JSON.parse(saved);
    } catch(e) {}
}
