const queue = [
  { id: 1, name: "Aung Aung", type: "Normal" },
  { id: 2, name: "Su Su", type: "VIP" },
  { id: 3, name: "Kyaw Kyaw", type: "Normal" },
  { id: 4, name: "Hnin Yu", type: "VIP" },
  { id: 5, name: "Mya Mya", type: "Normal" },
];

function addUser(name) {
  const newId = queue[queue.length - 1].id + 1;

  const newUser = {
    id: newId,
    name: name,
    type: "Normal",
  };

  queue.push(newUser);

  console.log(`Normal user ${name} added to queue.`);
}

function addVIPUser(name) {
  const newId = queue[queue.length - 1].id + 1;

  const vipUser = {
    id: newId,
    name: name,
    type: "VIP",
  };

  queue.unshift(vipUser);

  console.log(`VIP user ${name} added to first queue.`);
}

function serveUser() {
  const served = queue.shift();

  if (served) {
    console.log(`Serving User: ${served.name} (${served.type})`);
  } else {
    console.log("Queue is empty.");
  }
}

function removeLastUser() {
  const removed = queue.pop();

  if (removed) {
    console.log(`Removed Last User: ${removed.name}`);
  } else {
    console.log("Queue is empty.");
  }
}

function searchUser(search) {
  const result = queue.filter(function (user) {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return result;
}

function filterVIPUsers() {
  const vipUsers = queue.filter(function (user) {
    return user.type === "VIP";
  });

  return vipUsers;
}

function countUsers() {
  return queue.length;
}

function showFullQueue() {
  console.log("\n" + "=".repeat(60));
  console.log("FULL QUEUE LIST");
  console.log("=".repeat(60));

  if (queue.length === 0) {
    console.log("Queue is empty.");
  } else {
    queue.forEach(function (user, index) {
      console.log(
        `${index + 1}. ID: ${user.id} | Name: ${user.name.padEnd(12)} | Type: ${user.type}`,
      );
    });
  }

  console.log("=".repeat(60));
}

showFullQueue();

addUser("Min Min");

showFullQueue();

addVIPUser("John");

showFullQueue();

serveUser();

showFullQueue();

removeLastUser();

showFullQueue();

const searchResult = searchUser("su");

console.log("\nSEARCH RESULT:");
console.log(searchResult);

const vipUsers = filterVIPUsers();

console.log("\nVIP USERS:");
console.log(vipUsers);

console.log("\nTotal Waiting Users:", countUsers());
