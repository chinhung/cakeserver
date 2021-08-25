import uuidv4 from '../util/uuid';

class InMemeryDataSource {

    inMemoryCommits = [
        {
            id: uuidv4(),
            message: 'Add book',
            note: 'do it later'
        },
        {
            id: uuidv4(),
            message: 'Fix bug',
            note: 'do it later'
        }
    ];
    
    loadCommits() {
        return new Promise((resolve, reject) => { resolve([ ...this.inMemoryCommits ]) });
    }

    saveCommit(toSaved) { 
        const filtered = this.inMemoryCommits.filter(commitMessage => commitMessage.id === toSaved.id);
        if (filtered.length === 0) {
            this.inMemoryCommits = [ ...this.inMemoryCommits, toSaved ];
        } else {
            this.inMemoryCommits = [ ...this.inMemoryCommits.map(commit => commit.id === toSaved.id ? { id: commit.id, message: toSaved.message, note: toSaved.note } : commit) ];
        }
        return new Promise((resolve, reject) => { resolve() });
    }

    deleteCommit(toDeleted) {
        this.inMemoryCommits = [ ...this.inMemoryCommits.filter(commit => commit.id !== toDeleted.id) ];
        return new Promise((resolve, reject) => { resolve() });
    }
}

export default InMemeryDataSource;