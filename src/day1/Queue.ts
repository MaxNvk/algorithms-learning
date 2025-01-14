type TNode<T> = {
    value: T,
    next?: TNode<T>,
}
 export default class Queue<T> {
    public length: number;
    private head?: TNode<T> | undefined;
    private tail?: TNode<T> | undefined;


    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as TNode<T>;
        this.length++;

        if (!this.tail)  {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) return;

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        // free
        head.next = undefined;

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
