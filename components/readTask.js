import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates } from "../services/date.js";

export const displayTasks = () => {

    const list = document.querySelector('[data-list]');

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

    const dates = uniqueDates(taskList);

    dates.sort((a, b) => {
        const firstDate = moment(a, 'DD/MM/YYYY')
        const secondDate = moment(b, 'DD/MM/YYYY')
        return firstDate - secondDate
    });

    dates.forEach((date) => {
        const dateMoment = moment(date, "DD/MM/YYYY")
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const dateTask = moment(task.dateFormat, "DD/MM/YYYY")
            const diff = dateMoment.diff(dateTask);

            if (diff === 0) {
                list.appendChild(createTask(task));
            }
        });
    })

}

