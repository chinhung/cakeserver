import ClipboardJS from 'clipboard';
import { useEffect } from 'react';

const copyCommitMessageName = 'Copy Commit Message';

const copyCommitMessageBtnId = 'copyCommitMessageBtn';
const copyCommitMessageBtnSelector = `#${copyCommitMessageBtnId}`;

const copyCommitMessageTargetId = 'commitMessageText';
const copyCommitMessageTargetSelector = `#${copyCommitMessageTargetId}`;

function Operations({ operations }) {

    useEffect(() => {
        const clipboard = new ClipboardJS(copyCommitMessageBtnSelector);

        clipboard.on('success', function(e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);
        
            e.clearSelection();
        });
        
        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
        
    }, []);

    return (
        operations.map((operation, i) => { 
            if (operation.name === copyCommitMessageName) {
                return <button id={copyCommitMessageBtnId} data-clipboard-target={copyCommitMessageTargetSelector} key={i} className={operation.className} onClick={operation.operate}>{operation.name}</button>;
            }

            return <button key={i} className={operation.className} onClick={operation.operate}>{operation.name}</button>;
        })
    );
}

const createOperations = (isNewCommit) => ({ saveCommit, copyCommitMessage, deleteCommit, redoCommit }) => (commit) => {
    if (isNewCommit(commit)) {
        return [
            {
                name: 'Save',
                className: 'w3-button w3-light-grey e2e-save',
                operate: () => saveCommit(commit)
            }
        ];
    }

    return [
        {
            name: 'Save',
            className: 'w3-button w3-light-grey e2e-save',
            operate: () => saveCommit(commit)
        },
        {
            name: 'Redo',
            className: 'w3-button w3-light-grey e2e-redo',
            operate: () => redoCommit(commit)
        },
        {
            name: copyCommitMessageName,
            className: 'w3-button w3-light-grey e2e-copy-commit-message',
            operate: () => copyCommitMessage(commit.message)
        },
        {
            name: 'Delete',
            className: 'w3-button w3-light-grey e2e-delete',
            operate: () => deleteCommit(commit)
        }
    ];
};

export { Operations, createOperations };
export { copyCommitMessageTargetId };