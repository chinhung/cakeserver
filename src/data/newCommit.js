import uuidv4 from '../util/uuid';

const newCommit = () => ({ id: uuidv4(), message: '', note: '' });

const isNewCommit = (commits) => (toChecked) => {
    const filtered = commits.filter(commit => commit.id === toChecked.id);
    if (filtered.length === 0) {
        return true;
    }
    return false;
}

export { newCommit, isNewCommit };