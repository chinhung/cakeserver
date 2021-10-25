function Commits({ commits, onSelect }) {
    return (
        <>
            <div className="w3-bar-item w3-button"><i className="fa fa-inbox w3-margin-right"></i>Commits<i className="fa fa-caret-down w3-margin-left"></i></div>
            <div className="w3-animate-left">

                {commits.map(commit => (
                    <div key={commit.id} className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey" onClick={() => onSelect({ ...commit })}>
                        <div className="w3-container">
                            <span className="e2e-commit-message w3-opacity w3-large">{commit.message}</span>
                            <p className="e2e-commit-note">{commit.note}</p>
                        </div>
                    </div>
                ))}
            
            </div>
        </>
    );
}

export default Commits;