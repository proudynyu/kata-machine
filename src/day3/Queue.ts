interface Node<T> {
    value: T,
    next?: Node<T>
        prev?: Node<T>
}

export default class Queue<T> {
    public length: number;
    public head?: Node<T>
    public tail?: Node<T>

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node
            return
        }

        const tail = this.tail
        this.tail = node
        tail.next = this.tail
        this.tail.prev = tail
    }

    deque(): T | undefined {
        if (!this.tail) {
            return
        }

        this.length = Math.max(0, this.length - 1);

        const tail = this.tail
        this.tail = tail.prev
        this.tail = undefined
        tail.next = undefined
        return tail.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}
