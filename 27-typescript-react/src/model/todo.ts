class Todo{
    text: string;
    id: string;
    constructor(todotxt:string) {
        this.text = todotxt;
        this.id = new Date().toISOString();
    }
}
export default Todo;