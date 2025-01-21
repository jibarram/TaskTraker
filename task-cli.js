#!/usr/bin/env node
const fs = require('fs/promises');
const path = require('path');

const filePath = path.resolve('tasks.json');

async function initFile() {
    try {
        await fs.access(filePath);
    } catch {
        await fs.writeFile(filePath, JSON.stringify([]));
    }
}

async function readTasks() {
    await initFile();
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

async function writeTasks(tasks) {
    await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
}

async function addTask(description) {
    const tasks = await readTasks();
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id, description, status: 'todo', createdAt: new Date(), updatedAt: new Date() };
    tasks.push(newTask);
    await writeTasks(tasks);
    console.log(`Tarea agregada con éxito (ID: ${id})`);
}

async function listTasks(status = null) {
    const tasks = await readTasks();
    const filtered = status ? tasks.filter(task => task.status === status) : tasks;
    if (filtered.length === 0) console.log('No hay tareas para mostrar.');
    else filtered.forEach(task => console.log(`[${task.status}] ID: ${task.id}, Tarea: ${task.description}, Creacion: ${task.createdAt}, Actualizacion: ${task.updatedAt}`));
}

async function main() {
    const [command, ...args] = process.argv.slice(2);
    switch (command) {
        case 'add': await addTask(args.join(' ')); break;
        case 'list': await listTasks(args[0]); break;
        default: console.log('Comando no reconocido');
    }
}

main();
