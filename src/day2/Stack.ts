interface Node<T> {
    prev?: Node<T>
    value: T
}

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const newNode = { value: item } as Node<T>

        if (!this.head) {
            this.head = newNode
            return
        }

        const head = this.head
        this.head = newNode
        this.head.prev = head
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1)

        if (!this.head) {
            return
        }

        const head = this.head
        this.head = head.prev
        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}
