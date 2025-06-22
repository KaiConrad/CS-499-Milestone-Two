
// Kailey Conrad  - Python game updated: 8/13/2023     JS Game Updated: 5/25/2025
// Purpose: Create text-based game in JavaScript from old Python game

const rooms = {
    "Main Room": { south: "Painting Room", Item: "Shard" },
    "Painting Room": { west: "Library", north: "Main Room", Item: "Photo" },
    "Library": { south: "Kitchen", north: "Play Room", east: "Painting Room", west: "Throne Room", Item: "Notebook" },
    "Kitchen": { north: "Library", east: "Clock Room", Item: "Childs Art" },
    "Clock Room": { west: "Kitchen", Item: "Broken Clock" },
    "Play Room": { south: "Library", east: "Music Room", Item: "Stuffed Toy" },
    "Music Room": { west: "Play Room", Item: "Record" },
    "Throne Room": { east: "Library", Item: "Hades" }
};

let state = "Main Room";
let inventory = [];
const items = ['Shard', 'Photo', 'Notebook', 'Childs Art', 'Broken Clock', 'Stuffed Toy', 'Record'];

function instructions() {
    alert(
        `Welcome to "Cycles". A game of life - or death.\n` +
        "Collect 7 artifacts. Reveal the truth.\n" +
        "Or don't and face the consequences.It's all up to you.\n" +
        "To move, simply enter the direction you'd like to go for example: go South, go North, go East, go West\n" +
        "To pick up an item and add it to your Inventory, simply: get 'item_name'\n" +
        "I think that's all you need to know.\n" +
        "--------------"
    );
}

function getNewState(currentState, direction) {
    const room = rooms[currentState];
    if (room && room[direction]) {
        return room[direction];
    }
    return currentState;
}

function getItem(state) {
    return rooms[state].Item;
}

function describeRoom(state) {
    if (state === "Main Room") {
        console.log("You arrive in a desolate room. Spectral figures drift around...");
        console.log("Faint whispers of long forgotten conversations hang in the air...");
        console.log("The emptiness of the room tugs at you, beckoning you to stay.");
    }
    if (state === "Painting Room") {
        console.log("You arrive in a desolate room. Spectral figures drift around...");
        console.log("Faint whispers of long forgotten conversations hang in the air...");
        console.log("The emptiness of the room tugs at you, beckoning you to stay.");
    }
    if (state === "Library") {
        console.log("You arrive in a desolate room. Spectral figures drift around...");
        console.log("Faint whispers of long forgotten conversations hang in the air...");
        console.log("The emptiness of the room tugs at you, beckoning you to stay.");
    }
    if (state === "Kitchen") {
        console.log("You arrive in a desolate room. Spectral figures drift around...");
        console.log("Faint whispers of long forgotten conversations hang in the air...");
        console.log("The emptiness of the room tugs at you, beckoning you to stay.");
    }
    if (state === "Clock Room") {
        console.log("You arrive in a desolate room. Spectral figures drift around...");
        console.log("Faint whispers of long forgotten conversations hang in the air...");
        console.log("The emptiness of the room tugs at you, beckoning you to stay.");
    }
    if (state === "Play Room") {
        console.log("You arrive in a desolate room. Spectral figures drift around...");
        console.log("Faint whispers of long forgotten conversations hang in the air...");
        console.log("The emptiness of the room tugs at you, beckoning you to stay.");
    }
    if (state === "Music Room") {
        console.log("You arrive in a desolate room. Spectral figures drift around...");
        console.log("Faint whispers of long forgotten conversations hang in the air...");
        console.log("The emptiness of the room tugs at you, beckoning you to stay.");
    }
    if (state === "Throne Room") {
        console.log("You arrive in a desolate room. Spectral figures drift around...");
        console.log("Faint whispers of long forgotten conversations hang in the air...");
        console.log("The emptiness of the room tugs at you, beckoning you to stay.");
    }
    // NEED TO: Add in the other rooms, flesh out the full descriptions.
}

function describeItem(item) {
    switch (item) {
        case "Shard":
            console.log("The glimmering shard emits a soft, ethereal light...");
            break;
        case "Photo":
            console.log("The photo, aged by time, shows two children under a sunset...");
            break;
        case "Notebook":
            console.log("The glimmering shard emits a soft, ethereal light... (placeholder)");
            break;
        case "Childs Art":
            console.log("The glimmering shard emits a soft, ethereal light... (placeholder)");
            break;
        case "Broken Clock":
            console.log("The glimmering shard emits a soft, ethereal light... (placeholder)");
            break;
        case "Stuffed Toy":
            console.log("The glimmering shard emits a soft, ethereal light... (placeholder)");
            break;
        case "Record":
            console.log("The glimmering shard emits a soft, ethereal light... (placeholder)");
            break;
    }
}
//NEED TO: copy paste descriptions from the python code to fully flesh out the items. 

instructions();

while (true) {
    console.log(`Welcome, to the ${state}`);
    describeRoom(state);
    console.log(`Your current inventory: [${inventory.join(", ")}]`);
    console.log(inventory.length < 7 ? "Looks like there's still room for more stuff." : "Your inventory is full.");

    const item = getItem(state);
    console.log(`You take a moment to look around the room again and find a ${item}.`);
    describeItem(item);

    if (item === "Hades") {
        if (inventory.length < 7) {
            console.log("He shoots you a cold glare... the GAME of Cycles is now OVER");
            break;
        } else {
            console.log("You tell him of the items you collected. He replies with a nod.");
            const choice = prompt("You're faced with a decision. Do you want to remember? Yes, or no?").toLowerCase();
            if (choice === "yes") {
                console.log("So, you choose to remember.");
            } else {
                console.log("Ah, you choose to forget.");
            }
            console.log("Congratulations, you have completed the game of Cycles.");
            break;
        }
    }
    //NEED TO fully copy over interaction from python.

    let input = prompt("Which direction would you like to go? Or would you like to get the item in the room?").toLowerCase();

    if (input.startsWith("go ")) {
        let direction = input.slice(3).trim();
        const newState = getNewState(state, direction);
        if (newState === state) {
            console.log("There's a wall there. Try another direction.");
        } else {
            state = newState;
        }
    } else if (input === `get ${item.toLowerCase()}`) {
        if (inventory.includes(item)) {
            console.log("That item is just a mirage - it's already in your inventory.");
            //creative: maybe instead of mirage, player passes through item 'oh look - it's already in your inventory type idea'
        } else {
            inventory.push(item);
            console.log(`${item} added to inventory.`);
        }
    } else {
        console.log("Looks like you can't do that. Try another direction.");
    }

    console.log("-------");
}
