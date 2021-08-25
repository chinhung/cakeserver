const getData = () => {
    return JSON.parse(localStorage.getItem('cakeserver.commits') || '[]');
};

const saveData = (commits) => {
    localStorage.setItem('cakeserver.commits', JSON.stringify(commits));
};

class LocalStorageDataSource {
    
    loadCommits() {
        const commits = getData();
        return new Promise((resolve, reject) => { resolve(commits) });
    }

    saveCommit(toSaved) { 
        let commits = getData();

        const filtered = commits.filter(commit => commit.id === toSaved.id);
        if (filtered.length === 0) {
            commits = [ ...commits, toSaved ];
        } else {
            commits = [ ...commits.map(commit => commit.id === toSaved.id ? { id: commit.id, message: toSaved.message, note: toSaved.note } : commit) ];
        }

        saveData(commits);
        return new Promise((resolve, reject) => { resolve() });
    }

    deleteCommit(toDeleted) {
        let commits = getData();

        commits = [ ...commits.filter(commitMessage => commitMessage.id !== toDeleted.id) ];

        saveData(commits);
        return new Promise((resolve, reject) => { resolve() });
    }
}

export default LocalStorageDataSource;