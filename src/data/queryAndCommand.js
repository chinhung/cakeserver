const loadCommits = (dataSource) => () => {
    return dataSource.loadCommits();
};

const saveCommit = (dataSource) => (toSaved) => { 
    return dataSource.saveCommit(toSaved);
};

const deleteCommit = (dataSource) => (toDeleted) => {
    return dataSource.deleteCommit(toDeleted);
};

export { loadCommits, saveCommit, deleteCommit };