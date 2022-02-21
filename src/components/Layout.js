import NavBar from "./Navbar";


function Layout(props) {
    return <div className="fill-screen">
        <main>
            {props.children}
        </main>
    </div>
}
export default Layout;