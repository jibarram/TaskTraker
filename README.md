(#) Task Tracker

Sample solution for the https://roadmap.sh/projects/task-tracker challenge from roadmap.sh.

How to Run
Clone the repository and run the following commands:

```bash
git clone https://github.com/jibarram/TaskTraker.git
cd TaskTracker
```
Make sure you have Node.js installed on your system. You can verify by running:


```bash
node -v
```
Run the Project
Execute the following command to run the project:


```bash
node task-cli.js --help
```
Available Commands
Add a Task
To add a new task:

```bash
node task-cli.js add "Buy groceries"

```
Update a Task
To update an existing task:

```bash
node task-cli.js update 1 "Buy groceries and cook dinner"
```
Delete a Task
To delete a task by ID:

```bash
node task-cli.js delete 1
```
Mark a Task as in Progress, Done, or Todo
To update the status of a task:


```bash
node task-cli.js mark-in-progress 1
node task-cli.js mark-done 1
node task-cli.js mark-todo 1
```
List All Tasks
To list all tasks:


```bash
node task-cli.js list
```
To list tasks by status:


```bash
node task-cli.js list done
node task-cli.js list todo
node task-cli.js list in-progress
```
Features

Add, update, delete tasks: Manage tasks efficiently with basic CRUD operations.

Mark tasks by status: Update tasks as "in-progress," "done," or "todo."

List tasks: View all tasks or filter them by status.

Notes

Tasks are stored in a tasks.json file in the current directory.

The application ensures the tasks.json file is created automatically if it does not exist.

Feel free to customize the project and expand its features!
