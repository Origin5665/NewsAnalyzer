export default class CommitList {
    constructor(container, create) {
        this.container = container;
        this.create = create;
    }


    _addCommit(element) {
        const commitElem = this.create(element)
        this.container.appendChild(commitElem.create())
    }


    render(data) {
        data.forEach(item => this._addCommit(item))
    }

}