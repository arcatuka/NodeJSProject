import {writeFileJson,readFileJson} from '../dataSource/taskData.js'

export function CreateTask(data,task)
{
    readFileJson(task);
    task.push(JSON.parse(data))
    writeFileJson(task);
}