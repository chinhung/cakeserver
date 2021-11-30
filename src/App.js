import './App.css';
import { useState, useEffect } from  'react';
import { SidebarContainer, ContentContainer } from './component/Layout';
import { GitHub, NewCommit, CakeServerLogo, Commits } from './component/sidebar';
import { Message, Note, Operations, createOperations } from './component/content';
import { newCommit, isNewCommit, loadCommits, saveCommit, deleteCommit } from './data';

function App({ dataSource }) {

    const [ commits, setCommits ] = useState([]);
    const [ currentCommit, setCurrentCommit ] = useState(newCommit());

    const loadData = () => { loadCommits(dataSource)().then(commits => setCommits(commits)) };

    useEffect(() => {
        loadCommits(dataSource)().then(commits => setCommits(commits));
    }, []);

    const operationFunctions = {
        saveCommit: (toSaved) => { 
            saveCommit(dataSource)(toSaved).then(() => { loadData() });
        }, 
        redoCommit: (toRedoed) => {
            setCurrentCommit({ ...commits.filter(commit => commit.id === toRedoed.id)[0] });
        },
        copyCommitMessage: (message) => { 
            console.log('copy: ' + message);
        },
        deleteCommit: (toDeleted) => { 
            deleteCommit(dataSource)(toDeleted).then(() => { 
                loadData();
                setCurrentCommit(newCommit());
            });
        }, 
    };

    return (
        <>
            <SidebarContainer>
                <CakeServerLogo />
                <NewCommit onClick={() => {
                    setCurrentCommit(newCommit())
                }} />
                <Commits commits={commits} onSelect={(selected) => {
                    setCurrentCommit(selected)
                }} />
                <GitHub />
            </SidebarContainer>

            <ContentContainer>
                <Message message={currentCommit.message} onChange={(message) => {
                    setCurrentCommit({
                        ...currentCommit,
                        message
                    })
                }}/>
                <Note note={currentCommit.note} onChange={(note) => {
                    setCurrentCommit({
                        ...currentCommit,
                        note
                    })
                }}/>
                <hr></hr>
                <Operations operations={createOperations(isNewCommit(commits))(operationFunctions)(currentCommit)}/>
            </ContentContainer>
        </>
    );
}

export default App;
