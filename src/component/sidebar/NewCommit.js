function NewCommit({ onClick }) {
    return (
        <div className="e2e-new-commit w3-bar-item w3-button w3-dark-grey w3-button w3-hover-black w3-left-align" onClick={onClick}>New Commit<i className="w3-padding fa fa-pencil"></i></div>
    );
}

export default NewCommit;