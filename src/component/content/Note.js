function Note({ note, onChange }) {
    return (
        <>
            <h4>Note</h4>
            <textarea id="w3review" className="e2e-note" name="w3review" rows="4" cols="50" value={note} onChange={evt => onChange(evt.target.value)}>
            </textarea>
        </>
    );
}

export default Note;