import { loadCommits, saveCommit, deleteCommit } from './queryAndCommand';
import { newCommit, isNewCommit } from './newCommit';
import InMemeryDataSource from './InMemoryDataSource';
import LocalStorageDataSource from './LocalStorageDataSource';

export { newCommit, isNewCommit, loadCommits, saveCommit, deleteCommit, InMemeryDataSource, LocalStorageDataSource };