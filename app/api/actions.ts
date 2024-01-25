'use server'
export const apiGetTitle = async () => {
    let title = '';
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    title = json.title;
    // generate a little delay and then return the title
    await new Promise(resolve => setTimeout(resolve, 100));
    return title;
}