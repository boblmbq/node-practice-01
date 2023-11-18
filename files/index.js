const path = require("path");
const fs = require("fs/promises");
const { existsSync }=  require("fs")

console.log("hello from files");
console.log(__dirname);
const usersPath = path.join(__dirname, "..", "db", "users.json"); // ../db/users.json

class FileOperations {
  constructor(filePath) {
    this.filePath = filePath;
  }

  read = async () => {
    const data = await fs.readFile(this.filePath);
    return JSON.parse(data);
  };

  display = async () => {
    const users = await this.read();
    console.table(users);
  };

  create = async (users) => {
    return await fs.writeFile(this.filePath, JSON.stringify(users, null, 4));
  };

  remove = async () => {
    await fs.unlink(this.filePath);
  };

  update = async (userData) => {
    const users = await this.read();
    users.push(userData);
    return await this.create(users);
  };

  updateOne = async (id, newName) => {
    const users = await this.read();
    const idx = users.findIndex((item) => item.id === id);
    if (idx === -1) {
      console.log(`user with this ID ${id} not found`);
      return false;
    }
    users[idx].name = newName;
    return await this.create(users);
  };

  removeOne = async (id) => {
    const users = await this.read();
    const idx = users.findIndex((item) => item.id === id);
    if (idx === -1) {
      console.log(`user with this ID ${id} not found`);
      return false;
    }
    users.splice(idx, 1);
    return await this.create(users);
  };

  getOne = async (id) => {
    const users = await this.read();
    const idx = users.findIndex((item) => item.id === id);
    if (idx === -1) {
      console.log(`user with this ID ${id} not found`);
      return false;
    }
    console.log(users[idx])
    return users[idx]
  }
}

if (existsSync(usersPath)) {
  console.log("the file exists");
  const file = new FileOperations(usersPath);

  // file.read() // зчитує і парсить масив з файла users.json
  file.display(); // виводить в консоль зміст файла users.json
  // const users = [
  //   { id: "1", name: "Danya" },
  //   { id: "2", name: "Vadym" },
  //   { id: "3", name: "Yaryna" },
  // ];
  // file.create(users); // створює з нуля файл users.json
  // file.remove(); // повністю видаляє users.json
  // file.update({ id: "4", name: "Andrii" }); // додає в кінець масиву нового користувача в файлі users.json
  // file.updateOne("3", "Yaryna++"); // шукає корист. по id і змінює ім'я
  // file.removeOne("3"); // шукає корист. по id і повністю видаляє об'єкт з масиву
  // file.getOne("2") // шукає користувача по id і видає його інфу

} else {
  console.log("the file doesn't exist");
}



