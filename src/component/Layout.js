const sidebarWidth = '320px';

function SidebarContainer(props) {
    return (
        <nav className="w3-sidebar w3-bar-block w3-collapse w3-white w3-animate-left w3-card" style={{ zIndex: 3, width: sidebarWidth }} id="mySidebar">
            { props.children }
        </nav>
    );
}

function ContentContainer(props) {
    return (
        <div className="w3-main" style={{ marginLeft: sidebarWidth }}>
            <div id="Borge" className="w3-container person">
            <br></br>
                { props.children }
            </div>
        </div>
    );
}

export { SidebarContainer, ContentContainer };