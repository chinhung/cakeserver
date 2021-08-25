import { copyCommitMessageTargetId } from './Operations';

function Message({ message, onChange }) {
    return (
        <>
            <h4>Commit Message</h4>
            <input id={copyCommitMessageTargetId} type="text" value={message} onChange={evt => onChange(evt.target.value)}></input>
        </>
    );
}

export default Message;